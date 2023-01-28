import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: 1600, minWidth: 500 }} id="home">
                <img className="w3-image" src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Hamburger Catering" width={1600} height={800} />
                <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                    <h1 className="w3-xxlarge" style={{ color: 'white' }}>Le Catering</h1>
                </div>
            </header>

        )
    }
}

export default Home