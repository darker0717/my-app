import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './page/login';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import Nomatch from './page/nomatch';
import Loadings from './page/ui/loadings';
import Notice from './page/ui/notice';
import Messages from './page/ui/messages';
import Tabs from './page/ui/tabs';
import Gallery from './page/ui/gallery';
import Carousel from './page/ui/carousel';
import FormLogin from './page/form/login';
import FormRegister from './page/form/register';
import BasicTable from './page/table/basicTable';
import HighTable from './page/table/highTable';
import City from './page/city/index';
import Order from './page/order/index';
import Common from './common';
export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route path="/admin/ui/modals" component={Modals}></Route>
                            <Route path="/admin/ui/loadings" component={Loadings}></Route>
                            <Route path="/admin/ui/notification" component={Notice}></Route>
                            <Route path="/admin/ui/messages" component={Messages}></Route>
                            <Route path="/admin/ui/tabs" component={Tabs}></Route>
                            <Route path="/admin/ui/gallery" component={Gallery}></Route>
                            <Route path="/admin/ui/carousel" component={Carousel}></Route>
                            <Route path="/admin/form/login" component={FormLogin}></Route>
                            <Route path="/admin/form/reg" component={FormRegister}></Route>
                            <Route path="/admin/table/basic" component={BasicTable}></Route>
                            <Route path="/admin/table/high" component={HighTable}></Route>
                            <Route path="/admin/city" component={City}></Route>
                            <Route path="/admin/order" component={Order}></Route>
                            <Route path="/common" component={Common}/>
                            <Route component={Nomatch}/>
                            </Switch>
                        </Admin>
                     }/>
                    <Route path="/common" render={()=>{
                      <Common>
                          <Route path="/common/order/detail/:orderId" component={Login}/>
                      </Common>                      
                    }}
                    />
                </App>
            </HashRouter>
        )
    }
}
