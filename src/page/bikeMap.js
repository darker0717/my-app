import React, { Component } from 'react'

export default class componentName extends Component {

    constructor(){
        super();
    }
     
    state={
        a:1
    }
    componentDidMount(){
       this.setState({
           a:5
       },function (){
           console.log(this.state.a);
       })
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
