import React,{ PureComponent } from 'react'
import classNames from 'classnames';
import logo from '../../assets/img/home_logo_white.jpg'
import './index.less'

class HeadIndex extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fixedNav: false
        };
    }

    bindHandleScroll = () => {
        const FIXEDHEIGHT = 100;
        if (document.documentElement.scrollTop > FIXEDHEIGHT) {
            this.setState({
                fixedNav: true
            })
        } else {
            this.setState({
                fixedNav: false
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }

    render(){
        return (
            <nav className={classNames({"navbar":true,"fixedNav":this.state.fixedNav})}>
                <div className="inner">
                    <a href="/homepage" className="logoA">
                        <img src={logo} className="logo" />
                    </a>
                    <ul className="menu">
                        <li>
                            <a target="_blank" href="/homepage/."
                                aria-label="公司简介"
                            >公司简介
                                <span className="icon"></span>
                            </a>
                        </li>
                        <li>
                            <a  href="/homepage/#sec4"
                                aria-label="汽车K歌系统">
                                汽车K歌系统
                                <span className="icon"></span>
                            </a>
                            </li>
                        <li>
                            <a target="_blank" href="/homepage/cooperativePartner.html"
                                aria-label="落地车厂"
                                
                            >落地车厂
                                <span className="icon"></span>
                            </a>
                            <ul className="mobile">
                            </ul>
                        </li>
                        <li>
                            <a  href=""
                                aria-label="合作伙伴"
                            >合作伙伴
                                <span className="icon"></span>
                            </a>
                        </li>
                        <li>
                            <a  href="mailto:iov-hezuo@baidu.com"
                                aria-label="最新动态"
                            >最新动态
                                <span className="icon"></span>
                            </a>
                            <ul className="mobile">
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default HeadIndex;