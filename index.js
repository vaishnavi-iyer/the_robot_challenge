import dotenv from 'dotenv'

import configureStore from './reducer/configureStore'
import * as actions from './reducer/action'

const config = dotenv.config()

const store = configureStore()
store.subscribe(() =>
  store.getState()
)

store.dispatch(actions.createAction(actions.START_GAME))
store.dispatch(actions.runCommands())
