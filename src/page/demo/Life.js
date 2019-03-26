import React, { Component } from 'react'
import {Button} from 'antd';
import  './index.less';

export default class Life extends Component {
    constructor(){
        super();
        this.state={
            count:0
        };
        
    }
    handeAdd=()=>{
     this.setState({
         count:this.state.count+1
     })
    }
    hanleClick(){
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        var style={
            padding:50
        }
        return (
            <div className="content">
                <p> React生命周期介绍</p>
                <Button onClick={this.handeAdd}>Antd点击一下</Button>
                <button onClick={this.handeAdd}>点击一下</button>
                <button onClick={this.hanleClick.bind(this)}>点击一下</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}
