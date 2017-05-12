import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


class Title extends Component {
 render(){
    return (
      <h1>React 小书</h1>
    )
 }
}

class Header extends Component {
  render() {
    const className = 'header'
    const isGoodWord = false
    return (
     <Title />
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)