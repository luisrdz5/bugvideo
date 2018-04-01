import React from 'react'
import './video-player.controls.css'

function VideoPlayerOptions(props){
    return (
        <div className="VideoPlayerControls">
            {props.children}
        </div>
    )
}
export default VideoPlayerOptions