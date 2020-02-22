import React, {Fragment} from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/containers/home'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers/index'
import { Map as map } from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import Header from '../pages/components/header';

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
    <BrowserRouter>
        <Provider store = {store}> 
            <Fragment>
                <Header />
                <Home />
            </Fragment>
        </Provider> 
    </BrowserRouter>
,homeContainer)