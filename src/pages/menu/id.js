import React, { Component } from 'react'
import axios from 'axios';
import './menu.css'

export class Id extends Component {

    state = {
        user: {},
    };

    componentDidMount() {
        const lisId = window.location.href.split('/').pop()

        const getDataTry = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${lisId}`)

                this.setState({ user: response.data });

            } catch (error) {
                console.log({ error });
            }
        }

        // getDataThen()
        getDataTry()

    }
    render() {
        console.log({ user: this.state.user });
        
        return (
            <div className='id-container'>
                <ul>
                    <li>{this.state.user.name}</li>
                    <li>{this.state.user.phone}</li>
                    <li>{this.state.user.email}</li>
                </ul>
                

            </div>
        )
    }
}

export default Id