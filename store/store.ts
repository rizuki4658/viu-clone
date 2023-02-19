import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import  { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers'
import { StoreState } from '@/types/store'

// initial state
const initialState: StoreState = {}

// middleware
const middleware = [thunk]

// creating store
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

const makeStore = () => store

export const wrapper = createWrapper(makeStore)