import React, { Fragment } from 'react'
import Routers from "./router.js";
import Footer from "./components/Footer/index.jsx";


export default class index extends React.Component {


   render(){
        return (
            <Fragment>
                <Routers />
                <Footer />
            </Fragment>
        )
    }
}
