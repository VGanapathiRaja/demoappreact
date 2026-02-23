import React, { Component } from 'react'

export default class Rulesclass extends Component {

    // function name(params) {
        
    // }
    funcName1(){
        return  ;
    }
    funcName2 =()=>{
        return ;
    }
  render() {
    return (
      <div>
        Rulesclass
        <h1>Class Component</h1>
        {/* <button onClick={()=>{this.funcName2}}>btn</button> */}
        <button onClick={this.funcName1}>btn s</button>
      </div>
    )
  }
}
