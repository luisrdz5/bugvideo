import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Media from './src/playlist/components/media'

const app = document.getElementById('app')

render(<Media type="video" title="Laberinto 3D con javascript." autor="Luis Antonio Rodriguez Garcia" image="./images/covers/bitcoin.jpg" /> ,app)