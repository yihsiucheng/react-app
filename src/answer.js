import React, { Component } from 'react';
import './App.css';

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromZero: 0,
      showMessage: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let number = this.state.fromZero + 1 ;
    if(number > 10){
      return this.setState(prevState => ({
        fromZero: 0,
        showMessage: false,
      }));
    }else if(number > 9){
      this.setState(prevState => ({
        showMessage: true,
      }));
    }
    this.setState(prevState => ({
      fromZero: number,
    }));
  }

  render() {
    return(
      <div>
        <div className="plus-number">{this.state.fromZero}</div>
        <button className="plus-button" onClick={this.handleClick} >Click Me</button>
        {this.state.showMessage ? <div className="number-limited">已達上限</div> : ' '}
      </div>
    )
  }
}

export default Number;

