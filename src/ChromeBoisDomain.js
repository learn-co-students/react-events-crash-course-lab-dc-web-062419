import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    return drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  captureClick = () => {
    return toggleCycling()
  }
   
  captureKeyPress = (event) => {
    if(event.key === 'a') {
      return resize('+')
    } else if (event.key === 's') {
      return resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={this.captureClick}
        onKeyPress={this.captureKeyPress}
      >
      </canvas>
    )
  }
}
