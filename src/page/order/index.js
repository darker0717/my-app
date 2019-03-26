import React, { Component } from 'react'
import {Card,Button,Table,Form,Select,Model,message,DatePicker} from 'antd';
import axios from './../../axios';
import Utils from '../../utils/utils';
const FormItem=Form.Item;
const Option = Select.Option;
export default class Order extends Component {
    state={
     
    }
    params={     //分页
        page:1
    }
    componentDidMount(){
        this.requestList()
    }
    //数据请求
    requestList=()=>{
        let _this = this;
        axios.ajax({
            url: '/order/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            let list = res.result.item_list.map((item, index) => {
                item.key = index;  //给数据添加一个key值，以免报错
                return item;//返回被遍历的数据
            });
            this.setState({
                list:list,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }
    render() {
        const columns=[
            {
                title:"订单编号",
                dataIndex:'order_sn'
            },
            {
                title:"车辆编号",
                dataIndex:'bike_sn'
            },{
                title:"用户名",
                dataIndex:'user_name'
            },{
                title:"手机号",
                dataIndex:'mobile'
            },{
                title:"里程",
                dataIndex:'distance'
            },{
                title:"行驶时长",
                dataIndex:'total_time'
            },{
                title:'状态',
                dataIndex:'status'
            },{
                title:"开始时间",
                dataIndex:'start_time'
            },{
                title:"结束时间",
                dataIndex:'end_time'
            },{
                title:"订单金额",
                dataIndex:'total_fee'
            },{
                title:"实付金额",
                dataIndex:'order_sn'
            },
        ]
        return (
            <div>
                <Card>
                    <FilterForm/>
                </Card>
                <Card style={{marginTop:10}}>
                 <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                 <Button type="primary" style={{marginLeft:10}}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                 <Table
                bordered
                columns={columns}
                dataSource={this.state.list}
                pagination={this.state.pagination}
                 />
                </div>
            </div>
        )
    }
}
class FilterForm extends React.Component{

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{width:100}}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                           <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>

                        )
                    }
                </FormItem>
                <FormItem label="~">
                    {
                        getFieldDecorator('end_time')(
                           <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>

                        )
                    }
                   
                </FormItem>
                <FormItem label="订单转态">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                style={{ width: 80 }}
                                placeholder="全部"
                            >
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        );
    }
}
FilterForm = Form.create({})(FilterForm);