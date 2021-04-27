import React, { Component } from 'react'

export default class GifListContainer extends Component {
    
    state = {
        baseUrl: 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=EnQYOEvFVLIQCMPNk1fMbON7Hs30trYI&rating=g',
        firstThreeGifs: []
    }

    render() {
        return (
            <div>
                <h1>Testing</h1>
            </div>
        )
    }

    componentDidMount() {
        fetch('')
    }
}
