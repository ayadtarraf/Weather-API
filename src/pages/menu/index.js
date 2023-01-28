import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import MenuItem from '../../components/menuItem'

export class Menu extends Component {

  state = {
    list: [],
    ali: {}
  };

  componentDidMount() {

    const getDataThen = async () => {

      await axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
          this.setState({ list: response.data });
        }).catch(error => {
          console.log({ error });
        })
    }

    const getDataTry = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)

        this.setState({ list: response.data });

      } catch (error) {
        console.log({ error });
      }
    }

    // getDataThen()
    getDataTry()

  }
  render() {
    console.log({ list: this.state.list });
    return (
      <div className="w3-row w3-padding-64" id="menu">
        <div className="w3-col l6 w3-padding-large">
          <h1 className="w3-center">Our Menu</h1><br />

          {this.state.list.map((item, index) => (

            <Link to={`/menu/${item.id}`} key={index}>

              <MenuItem title={item.name} body={item.company.catchPhrase} />

            </Link>
          ))}

        </div>
        <div className="w3-col l6 w3-padding-large">
          <img src="https://img.freepik.com/premium-photo/homemade-burger-with-beef-cheese-onion-marmalade-wooden-board-fast-food-concept-american-food_90258-3917.jpg?w=2000" className="w3-round w3-image w3-opacity-min" alt="Menu" style={{ width: '100%' }} />
        </div>
      </div>

    )
  }
}

export default Menu