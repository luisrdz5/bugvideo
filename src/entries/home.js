import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers/index'
import { Map as map } from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(
    reducer,
    map(),
    composeWithDevTools (
        applyMiddleware(
            logger,
            thunk
        ),
    )
)

const homeContainer = document.getElementById('home-container')
render( 
<Provider store = {store}> 
    <Home />
</Provider> 
,homeContainer)