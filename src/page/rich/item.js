import React, { Component } from 'react';
import {Button} from 'antd'
// 单项
class Item extends Component {
  state = {
  }

  constructor(props) {
    super(props);
  }
  
   componentWillMount(){
     console.log("子组件willMount")
   }

  render() {
    console.log("子组件render")
    return (
      <div>
      
      </div>
    )
  }

  componentDidMount(){
    console.log("子组件DidMount")
  }
}
export default Item;