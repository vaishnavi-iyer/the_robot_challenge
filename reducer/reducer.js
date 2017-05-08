import INITIAL_STATE from './defaultState'
import commandQueue from '../commandQueue'
import moveForward from '../utils/move.js'
import placeRobot from '../utils/placeRobot.js'
import report from '../utils/report.js'
import * as a from './action'

export function cloneState (state) {
  return {
    robot: {...state.robot},
    board: state.board.map(row => row.slice()),
    commandQueue: [...state.commandQueue],
    running: state.running,
    executeCommandIndex: state.executeCommandIndex,
    hasFinished: state.hasFinished,
  }
}

function resetGameState (state) {
  const newState = cloneState(state)

  newState.robot = INITIAL_STATE.robot
  newState.running = false
  newState.hasFinished = false
  newState.executeCommandIndex = 0

  return newState
}

const reducer = (state = INITIAL_STATE, action) => {
  const newState = cloneState(state)
  switch (action.type) {

    case a.START_GAME:
      newState.running = true
      newState.commandQueue = [...commandQueue[1].commands]
      newState.hasFinished = false
      return newState

    case a.PLACE:
      newState.robot = placeRobot(newState.robot, action.payload)
      newState.executeCommandIndex++
      return newState

    case a.MOVE:
      newState.robot = moveForward(newState.robot, newState.board)
      newState.executeCommandIndex++
      return newState

    case a.LEFT:
      newState.robot.direction = newState.robot.direction - 90
      newState.executeCommandIndex++
      return newState

    case a.RIGHT:
      newState.robot.direction = newState.robot.direction + 90
      newState.executeCommandIndex++
      return newState

    case a.REPORT:
      console.log(report(newState.robot))
      newState.executeCommandIndex++
      return newState

    case a.NEXT:
      newState.executeCommandIndex++
      return newState

    // Has the command queue finished running? i.e. executed all commands
    case a.HAS_FINISHED:
      newState.hasFinished = true
      newState.running = false
      newState.commandQueue = []
      return newState

    default:
      return state

  }
}

export default reducer