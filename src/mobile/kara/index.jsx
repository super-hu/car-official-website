import React from 'react'
import Header from "../components/Header/index.jsx";
import "./index.less";

export default class HomeIndex extends React.Component {
    componentDidMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

   render(){
        return (
            <div className='kara'>
                <Header type="search" />
                <img src="http://chelianwang.baidu.com/static/chelianwang-homepage/images/julyversion/home/sec4-4.43c38.jpg" />
                <div className='kara-tabs'>
                    <div className='tab'>第一期</div>
                    <div className='tab'>第二期</div>
                    <div className='tab'>第三期</div>
                    <div className='tab'>第三期</div>
                    <div className='tab'>>></div>
                </div>
                <div className="kara-content">
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                    <div className='item'></div>
                </div>
            </div>
        )
    }
}
