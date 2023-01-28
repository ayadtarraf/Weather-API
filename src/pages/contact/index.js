import axios from 'axios';
import React, { Component } from 'react'
import './contact.css'

export class Contact extends Component {
    state = {
        message: '',
    };
    render() {


        const handlePostMessage = async () => {
            try {
                const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, { name: this.state.message })

                console.log({ response });

            } catch (error) {
                console.log({ error });
            }
        }
        return (
            <div className="w3-container w3-padding-64 Cnt-mainContainer" id="contact">
                <h1>Contact</h1><br />
                <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                <p className="w3-text-blue-grey w3-large"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
                <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

                <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"
                    onChange={(e) => {
                        this.setState({ message: e.target.value });
                    }} /></p>

                <p><button className="w3-button w3-light-grey w3-section" onClick={handlePostMessage} >SEND MESSAGE</button></p>
            </div>

        )
    }
}

export default Contact