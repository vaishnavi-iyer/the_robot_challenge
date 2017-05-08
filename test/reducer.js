import test from 'tape'
import freeze from 'deep-freeze'

import reducer from '../reducer/reducer'
const actions = require('../reducer/action')
const cloneState = require('../reducer/reducer').cloneState

test('cloneState clones the state without mutations', (t) => {
  const initialState = reducer(undefined, {})
  freeze(initialState)

  const clonedState = cloneState(initialState)

  t.deepEqual(clonedState, initialState, 'Cloned state is deeply equal to the initial state')
  t.notEqual(clonedState, initialState, 'Cloned state is not the same object as the inital state')
  t.end()
})

test('LEFT action turns the robot to left', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')

  const newState = reducer(initialState, {type: actions.LEFT})

  t.equal(newState.robot.direction, -90, 'the robot turned left')
  t.end()
})

test('RIGHT action turns the robot to right', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')

  const newState = reducer(initialState, {type: actions.RIGHT})

  t.equal(newState.robot.direction, 90, 'the robot turned right')
  t.end()
})

test('MOVE action moves the robot to the next position', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')

  const newState = reducer(initialState, {type: actions.MOVE})

  t.equal(newState.robot.positionY, 1, 'the robot moved one step forward in y direction')
  t.end()
})

test('PLACE action places the robot on the board', function (t) {
  const initialState = reducer(undefined, {})
  freeze(initialState)
  t.equal(initialState.commandQueue.length, 0, 'initial queue length is zero')
  t.equal(initialState.robot.positionY, 0, 'initial y position is 0')

  const newState = reducer(initialState, {type: actions.PLACE, payload: '2,3, NORTH'})

  t.equal(newState.robot.positionY, 3, 'the robot placed on x = 2 and y = 4')
  t.equal(newState.robot.isPlaced, true, 'Robot is placed on the board')
  t.end()
})
