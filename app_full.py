from flask import Flask, render_template, request
from airtable import airtable



app = Flask(__name__)
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True

@app.route('/', methods=['GET', 'POST'])
def index():
    
    at = airtable.Airtable('appG0JiXjmaxZgcQ7', 'key1GfTb9F6DsLhys')
    allItems = at.get('Items')
    cat = []

    for category in at.get('Category').get('records'):
        catItems = []

        # add the items which are in this category to the item-list
        for i in allItems.get('records'):
            if i['fields'].get('Category')[0] == category['id']:
                time = i['fields'].get('TimeID')[0]
                catItems.append({'id': i['fields'].get('ID'), 'name': i['fields'].get('Name'),
                              'weight': i['fields'].get('Weight'), 'time': i['fields'].get('TimeID')[0]})

        # add id, name and all items of this category to the cat-list
        cat.append({'id': category['fields'].get('ID'), 'name': category['fields'].get('Name'), 'catItems': catItems})

    return render_template('calculator.html', categories=cat)


if __name__ == '__main__':
    #app.run()