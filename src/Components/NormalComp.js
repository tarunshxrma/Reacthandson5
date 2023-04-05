import React, { Component } from 'react'

export default class NormalComp extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
  render() {
    console.log("Normal component is called!");  
    return (
      <div>
        {this.state.count}<br></br>
        <button onClick={()=>this.setState({count:0})}>Increment</button>
      </div>
    )
  }
}