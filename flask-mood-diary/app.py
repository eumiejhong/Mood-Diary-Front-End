from flask_debugtoolbar import DebugToolbarExtension
from db import db, connect_db
from flask import Flask, render_template, request, redirect, flash, session, g, jsonify
from flask_migrate import Migrate
from sqlalchemy.exc import IntegrityError
import datetime
import os
from os import environ
import json
from requests import get
import flair
import yake
import requests
from db import User, Diary

app = Flask(__name__, static_folder='react_app/build', template_folder="build")
migrate = Migrate(app, db)
env_config = os.getenv("APP_SETTINGS", "config.DevelopmentConfig")
app.config.from_object(env_config)
app.debug=True

debug = DebugToolbarExtension(app)
migrate = Migrate(app, db)

connect_db(app)

CURR_USER = 'curr_user'
IS_DEV = environ.get("FLASK_ENV", None) == "development"
WEBPACK_DEV_SERVER_HOST = "http://localhost:3000"

@app.before_request
def add_user_to_global():
    """If logged in, add user to Flask global"""

    if CURR_USER in session:
        g.user = User.query.get(session[CURR_USER])
    else:
        g.user = None

def g_login(user):
    """Logs in the user"""
    session[CURR_USER] = user.id

def g_logout(user):
    """Logs out the user"""
    if CURR_USER in session:
        del session[CURR_USER]

def proxy(host, path):
    response = get(f"{host}{path}")
    excluded_headers = [
        "content-encoding",
        "content-length",
        "transfer-encoding",
        "connection",
    ]
    headers = {
        name: value
        for name, value in response.raw.headers.items()
        if name.lower() not in excluded_headers
    }
    return (response.content, response.status_code, headers)


@app.route('/api/sign-up', methods=['POST'])
def sign_up():
    """Shows and handles sign-up form"""
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    country = request.json['country']
    image_url = request.json['image_url']
    bio = request.json['bio']

    user = User.signup(
        first_name,
        last_name,
        username,
        email,
        password,
        country,
        image_url,
        bio
    )
    g_login(user)

    return {"success": True, "status": 201, 'userData': user.to_json()}

@app.route('/api/login', methods=['POST'])
def login():
    """shows login form"""
    username = request.json['username']
    password = request.json['password']

    user = User.authenticate(
        username,
        password
    )

    if user: 
        g_login(user)
        return {"success": True, "status": 201, 'userData': user.to_json()}
    return {"success": False, "status": 404}

@app.route('/api/logout')
def logout():
    """handles user logout"""
    session.pop(CURR_USER)
    return {'success': True, 'status': 201}

@app.route('/api/user/<int:user_id>')
def user_profile(user_id):
    """shows user profile"""
    user = User.query.get_or_404(user_id)
    diaries = (Diary.query.filter(Diary.user_id == user_id).order_by(Diary.timestamp.desc()))
    return {'success': True, 'status': 200, 'user': user.to_json(), 'diaries': diaries.to_json()}

@app.route('/api/user/delete', methods=['POST'])
def delete_user():
    if not g.user:
        flash("Access unauthorized!", "danger")
        return redirect("/")
    g_logout()

    db.session.delete(g.user)
    db.session.commit()
    return redirect('/sign-up')

#DIARY
@app.route('/api/add-diary', methods=['POST'])
def add_diary():
    """adds diary entry"""
    user_id = g.user.id
    title = request.json['title']
    date = request.json['date']
    post = request.json['post']

    #flair sentiment analysis predictor
    flair_sentiment = flair.models.TextClassifier.load('en-sentiment')
    s = flair.data.Sentence(post)
    flair_sentiment.predict(s)
    total_sentiment = s.labels[0].to_dict()['value'] 
    mood = total_sentiment
    #yake keyword analysis predictor
    kw_extractor = yake.KeywordExtractor()
    #text = """spaCy is an open-source software library for advanced natural language processing, written in the programming languages Python and Cython. The library is published under the MIT license and its main developers are Matthew Honnibal and Ines Montani, the founders of the software company Explosion."""
    language = "en"
    max_ngram_size = 1
    deduplication_threshold = 0.9
    numOfKeywords = 3
    custom_kw_extractor = yake.KeywordExtractor(lan=language, n=max_ngram_size, dedupLim=deduplication_threshold, top=numOfKeywords, features=None)
    keywords = custom_kw_extractor.extract_keywords(post)
    keywords = [kw for kw in keywords]
    print('keywords', keywords)
    
    diary = Diary.add_diary(
        user_id,
        title,
        date,
        post,
        mood,
        keywords
    )
    return {'success': True, 'status': 201, 'diaryData': diary.to_json()}

@app.route('/api/random-quote', methods=['GET'])
def random_quote():
    req = requests.get('https://zenquotes.io/api/random')
    return {'success': True, 'status': 201, "quote": req.json()[0]}

@app.route('/api/diaries', methods=['GET'])
def show_diaries():
    diaries = Diary.query.filter_by(user_id=g.user.id).all()
    return {'success': True, 'status': 201, 'diaryData': [diaryData.to_json() for diaryData in diaries]}

@app.route('/api/diary/<diary_id>', methods=['GET'])
def show_diary(diary_id):
    diary = Diary.query.filter_by(id=diary_id).first()
    return {'success': True, 'status': 201, 'diaryData': diary.to_json()}

#GOAL
@app.route('/api/goals/add-goal', methods=['POST'])
def add_goal():
    """adds goal entry"""
    if not g.user:
        flash("You need to be logged in to do that!", "Danger")
        return redirect('/')

@app.route('/api/goals/<user_id>', methods=['GET'])
def show_goals(user_id):
    goals = Goal.query.filter_by(user_id).all()
    return render_template('', goals=goals)

@app.route('/api/goal/<goal_id>', methods=['GET'])
def show_goal(goal_id):
    goal = Goal.query.filter_by(id=goal_id).first()
    return render_template('', goal=goal)


@app.route("/", defaults={"path": "index.html"})
@app.route("/<path:path>")
def getApp(path):
    if IS_DEV:
        return proxy(WEBPACK_DEV_SERVER_HOST, request.path)
    return app.send_static_file(path)


# if __name__ == '__main__':
#     app.run(use_reloader=True, port=5000, threaded=True)