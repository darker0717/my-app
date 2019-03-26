import React, { Component } from 'react'

export default class componentName extends Component {
   constructor(){
       super();
       this.state={
           count:0
       };
   }
   componentWillMount(){
       
   }
    render() {
        return (
            <div>
            <p>{this.props.name}</p>    
            </div>
        )
    }
}
