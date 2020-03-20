// Dependencies
import React                            from 'react'
import ReactDOM                         from 'react-dom'
import { Provider }                     from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers                         from './reducers'
import thunk                            from 'redux-thunk'
// Components
import App                              from './components/App'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#root')
)