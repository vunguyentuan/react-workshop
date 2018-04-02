import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTab from './data-tab.js'
const data = [
  {
    title: "home",
    content: <p>home page</p>
  },
  {
    title: "about us",
    content: <p>about us page</p>
  },
  {
    title: "contact",
    content: <p>contact page</p>
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataTab data={data} />
      </div>
    );
  }
}

export default App;
