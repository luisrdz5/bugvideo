import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/containers/home'
import data from '../api.json'

// import Media from './src/playlist/components/media'
// import Playlist from './src/playlist/components/playlist.js'

const homeContainer = document.getElementById('home-container')

render(<Home data={data} /> ,homeContainer)