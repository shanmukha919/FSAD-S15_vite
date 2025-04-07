import React, { Component } from 'react'

export default class Grettings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"pls subscribe"
      }
    }
    changemsg(){
        this.setState({
            message:"thank you for subscribing for my channel"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button on></button>
        <button onClick={()=>this.changemsg()}>subscribe</button>

      </div>
    )
  }
}