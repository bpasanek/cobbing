pieces = open('words.txt').read().strip().split()

###########################################################################



path = '{}.jsx'
template = open(path.format('word_template')).read()
for piece in pieces:
    print(piece)
    print(template.replace('Replace',piece).replace('REPLACE',piece.upper()), file=open(path.format(piece.strip('\'')),'w'))




#########################################################################3


board_template = open('Board_template.jsx').read()

imports_template = "import WORD from './WORD';"

render_template = '''function renderWORD(x, y, [pieceX, pieceY]) {
  if (pieceX === x && pieceY === y) {
    return <WORD />
  }
  return null
}

'''

export_template = '''  WORD: 'word',\n'''

render_square = "        {renderWORD(x, y, [pieceX, pieceY])}\n"


imports = ''
renders = ''
exports = ''
render_square_list = ''
for word in pieces:
    imports += imports_template.replace('WORD', word) + '\n'
    renders += render_template.replace('WORD', word)
    exports += export_template.replace('WORD', word.upper()).replace('word', word)
    render_square_list += render_square.replace('WORD', word)
    
#print(imports)
#print(renders)
#print(exports)

board_template = board_template.replace('PIECE_IMPORTS', imports)
board_template = board_template.replace('EXPORTS', exports)
board_template = board_template.replace('RENDER_FUNCTIONS', renders)
board_template = board_template.replace('RENDER_SQUARE', render_square_list )

print(board_template, file=open('Board.jsx', 'w'))




