# Setup

### In one terminal, you'll need to run the backend.

Install pyenv
`brew install pyenv`

Install python 3.9
`pyenv install 3.9`

Install pipenv
`brew install pipenv`

Change directory into the backend folder
`cd flask-mood-diary`

Install requirements
`pipenv install && pipenv shell`

Run the server
`FLASK_ENV='development' flask run`


### In another tab, run the front-end
- Install node

Install yarn
`npm install -g yarn`

Install requirements
`yarn`

Run front-end
`BROWSER=0 yarn build && BROWSER=0 yarn start`

## View website

You can now access `localhost:5000` (or whatever port you ran the backend on) and view the app