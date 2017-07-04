import React, { Component } from 'react';
import router from "../routes"

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="routes">
          { router }
        </div>
      </div>
    );
  }
}

export default App;
