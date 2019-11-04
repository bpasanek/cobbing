import sys



pieces = ['wan','do','eat','elephan\'','fear', 
        'fife', 'neighing', 'seeks', 'siphon',
        'tree', 'twirl', 'den']
print('number of pieces:', len(pieces))
path = 'components/words/{}.jsx'
template = open(path.format('template')).read()
for piece in pieces:
    print(template.replace('REPLACE',piece), file=open(path.format(piece.strip('\'')),'w'))
