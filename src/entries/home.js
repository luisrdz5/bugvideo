import React from 'react'
import { render } from 'react-dom'
import Home from '../pages/components/containers/home'
import data from '../api.json'

// import Media from './src/playlist/components/media'
// import Playlist from './src/playlist/components/playlist.js'

const app = document.getElementById('app')

render(<Home data={data} /> ,app)