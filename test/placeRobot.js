import test from 'tape'
import placeRobot from '../utils/placeRobot'

test('placeRobot', function (t) {

  const robot = {"positionX":2,"positionY":2,"direction":90}
  const pos = '3,2,SOUTH'
  const clonedRobot = placeRobot(robot, pos)

  t.equal(3, clonedRobot.positionX, 'Returns the Value of the x position of the robot')
  t.equal(2, clonedRobot.positionY, 'Returns the Value of the y position of the robot')
  t.equal(180, clonedRobot.direction, 'Returns the direction of the robot')

  t.end()
})
