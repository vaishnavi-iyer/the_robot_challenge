const INITIAL_STATE = {
  robot: {
    direction: 0,
    positionX: 0,
    positionY: 0,
    isPlaced: false
  },
  board: [[0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,0,0,0,0]],
  commandQueue: [], // commands are the same as the action types. e.g. MOVE_FORWARD
  running: false,
  executeCommandIndex: 0,
  hasFinished: false, // Has the command queue finished running? i.e. executed all commands
}
export default INITIAL_STATE