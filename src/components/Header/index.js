import React, { Component } from 'react'
import {Row,Col} from 'antd';
import Util from '../../utils/utils.js';
import './index.less';
import axios from '../../axios/index';
export default class Header extends Component {
    state={

    }
    componentWillMount(){
        this.setState({
            userName:'Darker'
        })
        setInterval(()=>{
           let sysTime=Util.formateDate(new Date().getTime());//调用utils模块的时间函数，动态显示时间
         this.setState({
             sysTime
         })
        //  this.getWeatherAPIData();
        },1000)
        this.getWeatherAPIData();
    }
    //调用百度天气API，pomise()封装，调用axios模块
    getWeatherAPIData(){
              let city='北京';   
     axios.jsonp({

        url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
     }).then((res)=>{
         if(res.status=='success'){
        let data=res.results[0].weather_data[0];
        this.setState({
            dayPictureUrl:data.dayPictureUrl,
            weather:data.weather
        })
         }
     })
    }
    render() {
        return (
            <div className="header">
               <Row className="header-top">
                   <Col span="24">
                   <span>欢迎，{this.state.userName}</span>
                  <a href="#">退出</a>
                   </Col>
               </Row>
               <Row className="breadcrumb">
                   <Col span="4" className="breadcrumb-title">
                  首页
                   </Col>
                   <Col span="20" className="weather">
                   <span className="date">{this.state.sysTime}</span>
                   <span className="weather-img">
                   <img src={this.state.dayPictureUrl}/>
                   </span>
                   <span className="weather-detail">                   
                   {this.state.weather}
                   </span>
                   </Col>
               </Row>
            </div>
        )
    }
}
