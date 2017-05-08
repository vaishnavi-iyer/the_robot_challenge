export default function (robot) {
  const clonedRobot = {...robot}
  var str
  switch (robot.direction % 360) {
    case 0:
      // 0 is North Direction
      str = "Output: " + robot.positionX + ", " + robot.positionY + ", " +  "North"
      break

    case 90:
    case -270:
      //East
      str = "Output: " + robot.positionX + ", " + robot.positionY + ", " +  "East"
      break

    case 180:
    case -180: 
      // South
      str = "Output: " + robot.positionX + ", " +  robot.positionY + ", " +  "South"
      break

    case 270:
    case -90:
      // West
      str = "Output: " + robot.positionX + ", " +  robot.positionY + ", " +  "West"
      break
  }

  return str
}