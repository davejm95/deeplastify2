from flask import Flask, render_template, request


app = Flask(__name__)
class Item:
    def __init__(self,id,name,weight,time):
        self.id=id
        self.name=name
        self.weight=weight
        self.time=time

class Cat:
    def __init__(self,id,name,items):
        self.id=id
        self.name=name
        self.items=items
items1=[Item(1,'bottle',18,1),Item(2,'Fork',5,7)]
items2=[Item(1,'shirt',50,30),Item(2,'pulli',100,365)]
categories=[Cat(1,'Food',items1),Cat(2,'clothes',items2)]


@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'POST':
        noBottles=18*int(request.form['noBottles'])
    else:
        noBottles=0
    app.logger.warning('A warning occurred (%d apples)', 42)
    #formvar=request.args.get('formfield', '')
    
    return render_template('calculator.html',categories=categories)

if __name__ == '__main__':
    app.run()