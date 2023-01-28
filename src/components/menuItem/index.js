import React, { Component } from 'react'

export class MenuItem extends Component {
    render() {
        const { title, body } = this.props
        return (
            <div>
                <h4>{title}</h4>
                <p className="w3-text-grey">{body}</p>
            </div>
        )
    }
}

export default MenuItem