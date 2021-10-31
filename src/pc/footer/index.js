import React from 'react'
import './index.less'
import logo from '../../assets/img/home_logo_white.jpg'
export default class FooterIndex extends React.Component {
    render(){
        return (
            <div className="footer">
                <img src={logo} className="logo"/>
                <h3>联系我们</h3>
                <div className="footer-logo">
                    <div className="footer-logo-font">
                        <div>图标</div>
                        <div>邮箱：400 877 1055</div>
                    </div>
                    <div className="footer-logo-font">
                        <div>图标</div>
                        <div>全国统一热线：400 877 1005</div>
                    </div>
                    <div className="footer-logo-font">
                        <div>图标</div>
                        <div>微信：13670106169</div>
                    </div>
                </div>
            </div>
        )
    }
}