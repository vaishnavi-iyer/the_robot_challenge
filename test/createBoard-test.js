import test from 'tape'

const createBoard = require('../utils/createBoard');

test('createBoard', function (t) {
  const length = 5
  const board = createBoard(length)
  t.equal(board.length, length, 'dimension 1 of the array is the length passed into the constructor')
  t.equal(board[0].length, length, 'dimension 2 of the array is the length passed into the constructor')
  t.end()
})
