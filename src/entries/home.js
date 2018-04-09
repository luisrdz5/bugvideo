import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
//import data from '../api.json'
import { Provider } from 'react-redux'
import { CreateStore, createStore } from 'redux'
import reducer from '../reducers/index'
import { Map as map } from 'immutable'
// import data from '../schemas/index'
// import Media from './src/playlist/components/media'
// import Playlist from './src/playlist/components/playlist.js'


// const initialState = {
//     data: {
//         //...data
//         entities: data.entities,
//         categories: data.result.categories,
//     },
//     search: [],
//     modal:{
//         visibility: false,
//         mediaId: null,
//     }
// }
const store = createStore(
    reducer,
    map(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')
render( 
<Provider store = {store}> 
    <Home />
</Provider> 
,homeContainer)