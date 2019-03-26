import { Pagination } from "antd";

//计时器
export default {
    formateDate(time){
        if(!time)return '';
        let date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    },

//分页显示
    pagination(data,callback){
    let page ={
    onChange:(current)=>{
    callback(current)
    },
    current:data.result.page,   //这三条数据是从moke数据取出来的
    pageSize:data.result.page_size,//每页有几条数据
    total:data.result.total,     //总共有几条数据
    showTotal:()=>{
      return `共${data.result.total}条` //从moke数据中读取数据总数
    },
    showQuickJumper:true //设置分页中goto是否跳转
}
    return page;
    }

}

