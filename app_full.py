from flask import Flask, render_template, request
from airtable import airtable

app = Flask(__name__)
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True


@app.route('/', methods=['GET', 'POST'])
def index():
    # get the airtable-database
    at = airtable.Airtable('appG0JiXjmaxZgcQ7', 'key1GfTb9F6DsLhys')

    # for all categories add one thingy to the cat list
    allItems = at.get('Items').get('records')
    cat = []
    for category in at.get('Category').get('records'):
        catItems = []

        # add the items which are in this category to the item-list
        for i in allItems:
            if i['fields'].get('Category')[0] == category['id']:
                # if there is a blog for this item, then add it
                b = i['fields'].get('BlogText')
                if b is None:
                    b=''
                else:
                    b=b[0]
                catItems.append({'id': i['fields'].get('ID'), 'name': i['fields'].get('Name'),
                                 'weight': i['fields'].get('Weight'), 'time': i['fields'].get('TimeID')[0],
                                 'blog': b})

        # add id, name and all items of this category to the cat-list
        cat.append(
            {'id': category['fields'].get('ID'), 'name': category['fields'].get('Name'), 'catItems': catItems})
    return render_template('calculator.html', categories=cat)


if __name__ == '__main__':
     app.run(host="0.0.0.0",port=80)
