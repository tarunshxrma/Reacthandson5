import React, {  PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
  render() {
    console.log("Pure component is called!");  
    return (
      <div>
        {this.state.count}<br></br>
        <button onClick={()=>this.setState({count:0})}>Increment</button>
      </div>
    )
  }
}