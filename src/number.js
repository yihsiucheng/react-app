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
    if(this.state.fromZero < 9) {
      this.setState(prevState => ({
        fromZero: prevState.fromZero + 1,
      }));
    }else if(this.state.fromZero === 9 ) {
      this.setState(prevState => ({
        fromZero: prevState.fromZero + 1,
        showMessage: true,
      }));
    }else{
      this.setState({
        showMessage: false,
        fromZero: 0,
      })
    }
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

