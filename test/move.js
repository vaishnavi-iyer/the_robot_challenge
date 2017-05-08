import test from 'tape'
import move from '../utils/move'

test('move', function (t) {
  const board = [[0,0,0,0,0],
  				 [0,0,0,0,0],
  				 [0,0,0,0,0],
  				 [0,0,0,0,0],
  				 [0,0,0,0,0]]
  var robot = {"positionX":2,"positionY":2,"direction":90}
  var tile = move(robot, board)
  t.equal(3, tile.positionX, 'x coordinate of robot')
  t.equal(2, tile.positionY, 'y coordinate of robot')
  t.equal(90, tile.direction, 'direction of robot')

  robot = {"positionX":4,"positionY":4,"direction":90} //when at teh edge
  tile = move(robot, board)
  t.equal(4, tile.positionX, 'x coordinate of robot')
  t.equal(4, tile.positionY, 'y coordinate of robot')
  t.equal(90, tile.direction, 'direction of robot')

  t.end()
})
