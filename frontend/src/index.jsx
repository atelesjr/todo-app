import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise' //midleware - para fazer esperar entre o action e reducer.
import multi from 'redux-multi' //middleware - 
import thunk from 'redux-thunk' //mideeleware

import App from './main/app'
import reducers from './main/reducers'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)
    (createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))