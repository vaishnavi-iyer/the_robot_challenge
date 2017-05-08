import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createCLILogger from 'redux-cli-logger'
import rootReducer from './reducer'


export default function configureStore () {

  const middlewares = [thunk]

  if (process.env.NODE_ENV === 'development') {
    const loggerOptions = {
      predicate: (getState, action) => !action.MONITOR_ACTION
    }
    const logger = createCLILogger(loggerOptions)
    middlewares.push(logger)
  }

  const enhancer = compose(
      applyMiddleware(...middlewares)
  )
    return createStore(rootReducer, enhancer)
}
