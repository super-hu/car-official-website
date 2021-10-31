import React from "react"
import { Route,BrowserRouter,Switch,IndexRoute } from "react-router-dom"
// import { IndexRoute } from 'react-router'
import HomeIndex from "./pc/home/index.jsx"
import HeadIndex from "./pc/head/index.jsx"
import FooterIndex from "./pc/footer"
import UserIndex from "./pc/user"
class AppRouter extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <HeadIndex/>
                    {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                    <Switch>
                        <Route exact path="/" component={HomeIndex}/>
                        <Route path="/home" component={HomeIndex} />
                        <Route exact path="/user" component={UserIndex}/>
                    </Switch>
                    <FooterIndex />
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;