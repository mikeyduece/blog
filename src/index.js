// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
// Components
import App from './components/App'

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.querySelector('#root')
)