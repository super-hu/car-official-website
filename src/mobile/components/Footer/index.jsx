import React from 'react'
import logo from "../../../assets/img/home_logo_white.jpg";
import './index.less'


export default class HomeIndex extends React.Component {
   render(){
        return (
            <div className="m-footer">
                <div className='m-footer-left'><img src={logo} className="logo" /></div>
                <div className='m-footer-right'>
                    <div className='mt'>联系我们</div>
                    <div className='mt'>
                        全国统一热线：400 877 1055
                    </div>
                    <div className='mt'>
                        微信：13670106169
                    </div>
                    <div className='mt'>
                        邮箱：400 877 1055
                    </div>
                </div>
            </div>
        )
    }
}
