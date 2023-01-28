import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import Footer from "./components/footer";
import Nav from "./components/nav";
import AllRoutes from "./components/routes";


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Nav />
          <AllRoutes />
          <Footer />
        </BrowserRouter>

      </div>
    );
  }
}
export default App;
