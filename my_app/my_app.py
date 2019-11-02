from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'POST':
        noBottles=18*int(request.form['noBottles'])
    else:
        noBottles=0
    #formvar=request.args.get('formfield', '')
    return render_template('index.html',pagetitle=noBottles)

if __name__ == '__main__':
    app.run()