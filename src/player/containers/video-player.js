import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'


class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        unFormattedDuration: 0,
        unFormattedCurrentTime: 0,
        loading: false,
        volumen: 0

    }
    tooglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState ({
            pause: (!this.props.autoplay )
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: this.formattedTime(this.video.duration),
            unFormattedDuration: this.video.duration
        })
    }
    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.formattedTime(this.video.currentTime),
            unFormattedCurrentTime: this.video.currentTime
        })
    }
    leftPad(number){
        const pad = '00'
        return pad.substring(0,pad.length - number.length) + number
    }
    formattedTime(secs){
        const minutes = parseInt(secs / 60, 10)
        const seconds = parseInt(secs % 60, 10)
        return `${minutes}:${this.leftPad(seconds.toString())}`
    }
    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }
    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value
    }
    handleMute = event => {
        if(this.video.volume == 0){
            this.video.volume = this.state.volumen
            this.setState({
                volumen: 0
            })
        }else {
            this.setState({
                volumen: this.video.volume
            })
            this.video.volume = 0 
        }
    }
    handleFullScreenClick = event => {
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen()
        }else{
            document.webkitExitFullscreen()
        }
    }
    setRef = element => {
        this.player = element
    }
    render() {
        return (
            <VideoPlayerLayout
                setRef= {this.setRef}
            >
                <Title 
                    title={this.props.title}
                />
                <Controls>
                    <PlayPause 
                        pause = {this.state.pause}
                        handleClick={this.tooglePlay}
                    />
                    < Timer 
                        duration = {this.state.duration}
                        currentTime = {this.state.currentTime}
                    />
                    <ProgressBar 
                         duration = {this.state.unFormattedDuration}
                         value = {this.state.unFormattedCurrentTime}
                         handleProgressChange = {this.handleProgressChange}
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                        handleMute={this.handleMute}
                    />
                    <FullScreen 
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner
                    active = {this.state.loading}
                />
                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer