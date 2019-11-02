from app import app
from flask import render_template


@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Salome'}
    return render_template('hello.html', title='HOME', user=user)
