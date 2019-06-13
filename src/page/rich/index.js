import React, { Component } from 'react'

export default class Add extends Component {
  constructor(){
    super();
  }

  state={
    list:1
  }
  componentWillMount(){
     this.setState({
       list:2
     },()=>{
      //  console.log(this.state.list)
     })
  }
  
   componentDidMount(){
    this.setState({
      list:3
    },()=>{
      // console.log(this.state.list)
    })
   }

  render() {
    console.log('1')
    return (
      <div>
        {this.state.list}
      </div>
    )
  }
}
