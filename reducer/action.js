export const MOVE = 'MOVE'
export const LEFT = 'LEFT'
export const RIGHT = 'RIGHT'
export const HAS_FINISHED = 'HAS_FINISHED'
export const PLACE = 'PLACE'
export const NEXT = 'NEXT'
export const REPORT = 'REPORT'
export const START_GAME = 'START_GAME'

export const runCommands = () => {
  return (dispatch, getState) => {
    var interval = setInterval(() => {
      var state = getState()

      if (!state.running) {
        clearInterval(interval)
      }
      else if (state.executeCommandIndex === state.commandQueue.length) {
        dispatch(createAction(HAS_FINISHED))
        clearInterval(interval)
      }
      else {
        var command = state.commandQueue[state.executeCommandIndex].split(" ") // to split the place command text into array
        if(command[0] === 'PLACE'){
          dispatch(place(command[1])) 
        }
        else if (state.robot.isPlaced === true){
          dispatch(createAction(command[0]))
        } else {
          dispatch(createAction(NEXT)) 
        
        }
      }
    }, 200)
  }
}

//To take input from user
// export const queueAction = (payload) => {
//   return {
//     type: QUEUE_ACTION,
//     payload: payload
//   }
// }

export const place = (payload) => {
  return {
    type: PLACE,
    payload: payload
  }
}

export const createAction = (type) => ({
  type
})

