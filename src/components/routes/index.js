import React, { Component } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../../pages/about'
import Contact from '../../pages/contact'
import Home from '../../pages/home'
import Menu from '../../pages/menu'
import Id from '../../pages/menu/id'

export class AllRoutes extends Component {
  render() {
    return (
      <div>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Id />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/test" element={(
            <div>
              <h2>Test page</h2>
            </div>
          )} /> */}

          {/* <Route path="/redirect" element={<Navigate to="/about" />} /> */}

          {/* <Route 
            path="/checkout" 
            element={false ? <Navigate to="/products" /> : <p>checkout</p>}
          /> */}

        </Routes>
      </div>
    )
  }
}

export default AllRoutes