import tileInFront from './tileInFront'

export default function (robot, board) {

  const clonedRobot = {...robot}
  const nextTileCode = tileInFront(clonedRobot, board)

  if (nextTileCode === 0) {
    switch (Math.abs(clonedRobot.direction % 360)) {
      case 0:
        // 0 is forwards along Y axis
        clonedRobot.positionY++
        break
      case 90:
        // 90 is forwards along X axis
        clonedRobot.positionX = clonedRobot.positionX + (Math.sign(clonedRobot.direction))
        break
      case 180:
        // 180 is backwards along Y axis
        clonedRobot.positionY--
        break
      case 270:
        // 270 is backwards along X axis
        clonedRobot.positionX = clonedRobot.positionX - (Math.sign(clonedRobot.direction))
        break
    }
  } 
  return clonedRobot
}