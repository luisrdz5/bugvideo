import React from 'react'
import VolumenIcon from '../../icons/components/volume'
import './volume.css'

function Volumen(props){
    return (
        <button
            className="Volume"
        >
            <div
                onClick={props.handleMute}
            >
                <VolumenIcon 
                    color="white"
                    size={25}
            />
            </div>
            <div className="Volume-range">
                <input 
                    type="range" 
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volumen