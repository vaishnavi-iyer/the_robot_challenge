import test from 'tape'
import reducer from '../reducer/reducer'

const actions = require('../reducer/action')
const cloneState = require('../reducer/reducer').cloneState

// import actions from '../reducer/action'
// import cloneState from '../reducer/reducer'

const initialState = cloneState(reducer(undefined, {}))
initialState.running = true
initialState.commandQueue.push('LEFT')

test('command dispatches queued action when running and has a command queued', function (t) {
  const thunk = actions.runCommands()
  thunk(
    function (action) {
      // 'HAS_FINISHED' is dispatched from action.js'
      if (action.type !== actions.HAS_FINISHED) {
        t.deepEqual(action, {type: 'NEXT'})
        initialState.running = false
        t.end()
      }
    },
    function () {
      return initialState
    }
  )
})