import React, { Component } from 'react'
import {Card} from 'antd'
//echarts主题色
import echartsTheme from './../echartTheme'
import echarts from 'echarts/lib/echarts'
//导入柱形图
import 'echarts/lib/chart/bar'
import "echarts/lib/component/tooltip"
import "echarts/lib/component/title"
import "echarts/lib/component/legend"
import "echarts/lib/component/markPoint"
import ReactEcharts from 'echarts-for-react'
export default class Bar extends Component {
 
    componentWillMount(){
        echarts.registerTheme('Imooc',echartsTheme);//主题色

    }
     
     getOption=()=>{
       let option={
          title:{
            text:'用户骑行订单'
          },
          xAxis:{
            data:['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis:{
            type:'value'
          },
          series:[
            {
              name:'订单量',
              type:'bar',
              data:[1000,2000,3000,2000,1000,5000,3000]
            }
          ]
          
       }
       return option
     }
     getOption2=()=>{
      let option={
         title:{
           text:'用户骑行订单'
         },
         xAxis:{
           data:['周一','周二','周三','周四','周五','周六','周日']
         },
         yAxis:{
           type:'value'
         },
         legend:{  //标题
           data:['OFO','摩拜','小蓝']  
         },
         series:[  //数据
           {
             name:'OFO',
             type:'bar',
             data:[2000,3000,5500,7000,8000,9000,10000]
           },
           {
            name:'摩拜',
            type:'bar',
            data:[1500,3000,4500,6000,8000,10000,15000]
          },
          {
            name:'小蓝',
            type:'bar',
            data:[1000,2000,3000,4000,5000,6000,7000]
          }
         ]
         
      }
      return option
    }
    render() {
    return (
      <div>
        <Card title="柱形图表">
            <ReactEcharts option={this.getOption()} theme="Imooc" style={{height:500}}/>
        </Card>
        <Card title="柱形图表">
        <ReactEcharts option={this.getOption2()} theme="Imooc" style={{height:500}}/>
        </Card>
      </div>
    )
  }
}
