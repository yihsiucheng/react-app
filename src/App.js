import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './number';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <main>
          <h1>第一題： 印出一個數字
            <p>第二題： 印出 Button</p>
            <p>第三題： Button Click 數字 + 1</p>
            <p>第四題： 當數字等於10，印出紅字「已達上限」，並重設數字為0</p>
          </h1>
          <Number />
        </main>
      </div>
    );
  }
}

export default App;
