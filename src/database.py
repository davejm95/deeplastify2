from my_app.airtable import airtable

at = airtable.Airtable('appG0JiXjmaxZgcQ7', 'key1GfTb9F6DsLhys')

if __name__ == '__main__':
    allItems = at.get('Items')
    cat = []

    for category in at.get('Category').get('records'):
        items = []

        # add the items which are in this category to the item-list
        for i in allItems.get('records'):
            if i['fields'].get('Category')[0] == category['id']:
                items.append({'id': i['fields'].get('ID'), 'name': i['fields'].get('Name'),
                              'weight': i['fields'].get('Weight'), 'time': i['fields'].get('Time')})

        # add id, name and all items of this category to the cat-list
        cat.append({'id': category['fields'].get('ID'), 'name': category['fields'].get('Name'), 'items': items})

    pass
