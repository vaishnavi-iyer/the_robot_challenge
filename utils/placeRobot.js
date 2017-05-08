export default function (robot, position) {
  const clonedRobot = {...robot}

  var pos = position.split(",")
  clonedRobot.isPlaced = true
  clonedRobot.positionX = parseInt(pos[0]) //first parameter is the x value
  clonedRobot.positionY = parseInt(pos[1]) // second parameter is y value

  // last parameter is the direction
  switch (pos[2]) {

    case 'NORTH':
      // north = 0
      clonedRobot.direction = 0
      break
    case 'EAST':
      // east = 90
      clonedRobot.direction = 90
      break
    case 'SOUTH':
      // south = 180
      clonedRobot.direction = 180
      break
    case 'WEST':
      // west = 270
      clonedRobot.direction = 270
      break
  }

  return clonedRobot
}