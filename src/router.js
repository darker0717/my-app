import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Login from './page/login'
import Admin from './admin'
import Home from './page/home';
import Buttons from './page/ui/buttons'
import Modals from './page/ui/modals'
import NoMatch from './page/nomatch'
import Loadings from './page/ui/loadings'
import Notice from './page/ui/notice'
import Messages from './page/ui/messages'
import Tabs from './page/ui/tabs'
import Gallery from './page/ui/gallery'
import Carousel from './page/ui/carousel'
import FormLogin from './page/form/login'
import FormRegister from './page/form/register'
import BasicTable from './page/table/basicTable'
import HighTable from './page/table/highTable'
import Rich from './page/rich'
import City from './page/city/index'
import Order from './page/order/index'
import Common from './common'
// import OrderDetail from './page/order/detail'
import BikeMap from './page/map/bikeMap'
import User from './page/user/index'
import Bar from './page/echarts/bar/index'
// import Pie from './page/echarts/pie/index'
// import Line from './page/echarts/line/index'
import Permission from './page/permission'
// import Demo from './page/home/aaa'

export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/common" render={() =>
                            <Common>
                                {/* <Route path="/common/order/detail/:orderId" component={OrderDetail} /> */}
                            </Common>
                        }
                        />
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tabs} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path='/rich' component={Rich} />
                                    <Route path="/city" component={City} />
                                    <Route path="/order" component={Order} />
                                    <Route path='/bikeMap' component={BikeMap} />
                                    <Route path='/user' component={User} />
                                    <Route path="/charts/bar" component={Bar} />
                                    {/* <Route path="/charts/pie" component={Pie} />
                                    <Route path="/charts/line" component={Line} /> */}
                                    <Route path="/permission" component={Permission} />
                                    <Redirect to="/home" />
                                    {/* <Route component={NoMatch} /> */}
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}