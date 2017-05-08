import test from 'tape'
import tileInFront from '../utils/tileInFront'

test('tileInFront', function (t) {
  const board = [[0,0,0,0,0],
  				 [0,0,0,0,0],
  				 [0,0,0,1,0],
  				 [0,0,0,0,2],
  				 [0,0,0,0,0]]
  var robot = {"positionX":2,"positionY":2,"direction":90}
  var tile = tileInFront(robot, board)
  t.equal(board[3][2], tile, 'Returns the Value of the tile in front')

  robot = {"positionX":4,"positionY":4,"direction":90}
  tile = tileInFront(robot, board)
  t.equal(null, tile, 'When at the edge and facing outward, it returns null')

  robot = {"positionX":4,"positionY":4,"direction":180}
  tile = tileInFront(robot, board)
  t.equal(board[4][3], tile, 'When at the edge and facing inward, it returns the value of tile in front')

  t.end()
})
