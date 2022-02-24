from flask_migrate import Migrate
from datetime import datetime
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

bcrypt = Bcrypt()

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer(), primary_key = True, autoincrement=True)
    first_name = db.Column(db.Text(), nullable=False)
    last_name = db.Column(db.Text(), nullable=False)
    username = db.Column(db.Text(), nullable=False)
    email = db.Column(db.Text(), nullable=False)  
    password = db.Column(db.Text(), nullable=False)
    country = db.Column(db.Text(), nullable=False)
    image_url = db.Column(db.Text(), default="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg")
    bio = db.Column(db.Text(), nullable=False)

    @classmethod
    def signup(cls, first_name, last_name, username, email, password, country, image_url, bio):
        hashed_pwd = bcrypt.generate_password_hash(password).decode('UTF-8')
        user = User(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=hashed_pwd,
            country=country,
            image_url=image_url,
            bio=bio
        )
        db.session.add(user)
        db.session.commit()
        return user

    @classmethod
    def authenticate(cls, username, password):
        user = cls.query.filter_by(username=username).first()
        if user:
            is_auth = bcrypt.check_password_hash(user.password, password)
            if is_auth:
                return user
        return False

    def to_json(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'country': self.country,
            'image_url': self.image_url,
            'bio': self.bio,
        }


class Diary(db.Model):
    __tablename__ = 'diaries'

    id = db.Column(db.Integer(), primary_key = True, autoincrement=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id', ondelete='cascade'))
    title = db.Column(db.Text())
    date = db.Column(db.DateTime(), nullable=False, default=datetime.utcnow())
    post = db.Column(db.Text())
    mood = db.Column(db.Text())
    keywords = db.Column(db.JSON())

    @classmethod
    def add_diary(cls, user_id, title, date, post, mood, keywords):
        diary = Diary(
            user_id = user_id,
            title = title,
            date = date,
            post = post,
            mood = mood,
            keywords = keywords
        )
        db.session.add(diary)
        db.session.commit()
        return diary
    
    def to_json(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'date': self.date,
            'post': self.post,
            'mood': self.mood,
            'keywords': self.keywords
        }

