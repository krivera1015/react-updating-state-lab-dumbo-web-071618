// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'   
                }
            }  
        }
    }

    handleOnClickB = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate : 12,
            }
        })
    }

    handleOnClickR = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClickB} className='bitrate'>Change Bitrate</button>
                <button onClick={this.handleOnClickR} className='resolution'>Change Res</button>
            </div>
        )
    }
}
