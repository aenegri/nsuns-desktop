import { applyMiddleware, createStore } from 'redux'

import  { createLogger } from 'redux-logger'

import reducer from './reducers/root-reducer'

const middleware = applyMiddleware(createLogger())

export default createStore(reducer, middleware)