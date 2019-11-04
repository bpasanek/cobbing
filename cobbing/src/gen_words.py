import sys

'''
Generates a jsx file for each word in a list of words.
Defaults to the cobbing words if no command line input provided.
If words are given as command line arguments, it generates all those instead.
'''

if len(sys.argv) > 1:
    pieces = sys.argv[1:]
else:
    pieces = ['wan','do','eat','elephan\'','fear', 
        'fife', 'neighing', 'seeks', 'siphon',
        'tree', 'twirl', 'den']
print('number of pieces:', len(pieces))
path = 'components/words/{}.jsx'
template = open(path.format('template')).read()
for piece in pieces:
    print(template.replace('REPLACE',piece), file=open(path.format(piece.strip('\'')),'w'))
