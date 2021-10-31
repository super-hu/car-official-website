import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from "swiper/react";
import closeImg from '../../assets/img/close.png'
import sec3 from '../../assets/img/sec3.png'
import swiper1 from '../../assets/ksong/swiper1.png'
import swiper2 from '../../assets/ksong/swiper2.png'
import swiper3 from '../../assets/ksong/swiper3.png'
import swiper4 from '../../assets/ksong/swiper4.png'
import swiper5 from '../../assets/ksong/swiper5.png'
import swiper6 from '../../assets/ksong/swiper6.png'
import swiper7 from '../../assets/sec5/swiper-5-1.jpg'
import swiper8 from '../../assets/sec5/swiper-5-2.jpg'
import swiper9 from '../../assets/sec5/swiper-5-3.jpg'
import left_car from '../../assets/img/left-car-2.png'
import right_car from '../../assets/img/right-car-2.png'
import cooperImg from '../../assets/sec6/sec-6.jpeg'

import './index.less'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default class HomeIndex extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isVideo: false,
            secactive: false,
            tabsActive:1,
            fixedHead: false,
        }
    }

    handleShowVideo = () =>{
        this.setState({
            isVideo: true
        })
    }
    handleHideVideo =()=>{
        this.setState({
            isVideo: false
        })
    }

    bindHandleScroll=()=>{
        const FIXEDHEIGHT = 300;
        if (document.documentElement.scrollTop > FIXEDHEIGHT) {
            this.setState({
                secactive: true
            })
        } else {
            this.setState({
                secactive: false
            })
        }
    }
    checkSec5Fixed = () => {
        var sec5HeadWrap = document.querySelector('.sec5-head-wrap');
        var toTop = sec5HeadWrap.getBoundingClientRect().top;
        console.log('toTop-----',toTop)
        if (toTop <= 68) {
            this.setState({
                fixedHead: true
            })
        } else {
            this.setState({
                fixedHead: false
            })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll)
        window.addEventListener('scroll', this.checkSec5Fixed)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
        window.removeEventListener('scroll', this.checkSec5Fixed)
    }
    render(){
       const {isVideo,secactive,tabsActive,fixedHead}=this.state
        return (
            <div id="fullpage">
                <div className="section sec-1 sec1">
                    <video className="sec1-video" autoPlay="autoplay" loop="loop" muted="muted" >
                      <source src="../../../static/video/home_one_video.mp4" type="video/mp4"/>
                    </video>
                    <div className="sec-1-wrap">
                        <div className="title sliderIn">车智乐®汽车K歌</div>
                        <div className="title2 sliderIn">智乐出行 驰骋唱哼</div>
                        <div onClick={this.handleShowVideo} className="play" data-src="https://iov-www.cdn.bcebos.com/chelianwang/video/chelianwang-home.mp4">
                            <div className="play-wrap"></div>
                        </div>
                        <div onClick={this.handleHideVideo} className={classNames({"video-player-wrapper":true, "display-block":isVideo})}>
                            <div className="btn-close-wrapper">
                                <div className="btn-close-player-wrapper">
                                    <img className="img" src={closeImg}/>
                                </div>
                            </div>
                            <video id="perception_video" autoPlay="autoplay" loop="loop" muted="muted" className="video-js vjs-default-skin vjs-big-play-centered" controls preload="auto" width="100%" height="100%">
                                <source src="../../../static/video/home_one_video.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className="section sec-2 sec2">
                    <div className="title">
                        <div className="left">
                            <div className='titleOne'>车智乐智能科技</div>
                            <div>致力于汽车智能新娱乐软硬件综合解决方案</div>
                        </div>
                        <div className="right">
                            <div>车智乐作为汽车卡拉OK软硬件系统方案商，依托汽车卡拉OK软、硬件优势，与车企合作，促进汽车娱乐系统升级、运营，打造车主娱乐社交生态圈</div>
                        </div>
                    </div>
                    <ul className="list-wrap" style={{
                            width: '68.51851852vh',
                            height: '62.59259259vh',
                            float:'right',
                            position: 'absolute',
                            right: '10vh',
                            top: '25vh'
                    }}>
                        <li className={classNames({'list-wrap-item':true,'active': secactive})}>
                            <div className="list-wrap-item-title">
                                汽车K歌方案
                            </div>
                            <ul className="list-wrap-item-desc">
                                <li className="list-wrap-item-desc-item">
                                <span className="blue-border"></span>
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    车智乐拥有智能网联汽车
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    +传统汽车的K歌软硬件
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    综合解决方案
                                </li>
                            </ul>
                        </li>
                        <li className={classNames({'list-wrap-item':true,'active': secactive})}>
                            <div className="list-wrap-item-title">
                                买车者
                            </div>
                            <ul className="list-wrap-item-desc">
                            <li className="list-wrap-item-desc-item">
                                <span className="blue-border"></span>
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    车智乐拥有智能网联汽车
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    +传统汽车的K歌软硬件
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    综合解决方案
                                </li>
                            </ul>
                        </li>
                        <li className={classNames({'list-wrap-item':true,'active': secactive})}>
                            <div className="list-wrap-item-title">
                                卖车者
                            </div>
                            <ul className="list-wrap-item-desc">
                            <li className="list-wrap-item-desc-item">
                                <span className="blue-border"></span>
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    车智乐拥有智能网联汽车
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    +传统汽车的K歌软硬件
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    综合解决方案
                                </li>
                            </ul>
                        </li>
                        <li className={classNames({'list-wrap-item':true,'active': secactive})}>
                            <div className="list-wrap-item-title">
                                开发者
                            </div>
                            <ul className="list-wrap-item-desc">
                            <li className="list-wrap-item-desc-item">
                                <span className="blue-border"></span>
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    车智乐拥有智能网联汽车
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    +传统汽车的K歌软硬件
                                </li>
                                <li className="list-wrap-item-desc-item">
                                    综合解决方案
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="section sec-3">
                    <video className="sec1-video" autoPlay="autoplay" loop="loop" muted="muted">
                      <source src="../../../static/video/home_two_video.mp4" type="video/mp4"/>
                    </video>
                    <div className="sec-3-wrap" >
                        <img src={sec3}/>
                        <div className="title3">娱乐新境界 用户新体验</div>
                        <div className="sec3-button">点击进入</div>
                    </div>
                </div>
                <div className="sec-4">
                    <div className="sec-4-header">/车智乐车载K歌系统 = 车智乐·唱吧 + 汽车K歌麦/</div>
                    <div className="sec-4-header2">
                        <div className="left">
                            <p>车智乐车载K歌系统</p>
                            <h2>车智乐·唱吧</h2>
                        </div>
                        <div className="right">
                            "车智乐·唱吧"是由车智乐联合唱吧专门根据车内娱乐场景、用户操作习惯和方式，以及汽车自身的影音娱乐硬件系统定制开发的汽车卡拉OK软件。
                        </div>
                    </div>
                    <div>
                    <Swiper
                        className="swiper_container"
                        slidesPerView="auto"
                        slidesPerView="1.5"
                        autoplay={true}
                        centeredSlides={true}
                        loop={true}
                        initialSlide={1}>
                        <SwiperSlide className="card"><img src={swiper1}/></SwiperSlide>
                        <SwiperSlide className="card"><img src={swiper2}/></SwiperSlide>
                        <SwiperSlide className="card"><img src={swiper3}/></SwiperSlide>
                        <SwiperSlide className="card"><img src={swiper4}/></SwiperSlide>
                        <SwiperSlide className="card"><img src={swiper5}/></SwiperSlide>
                        <SwiperSlide className="card"><img src={swiper6}/></SwiperSlide>
                    </Swiper>
                    </div>
                </div>
                <div className="sec-5">
                    <div className="sec-5-header">
                        <div className="left">
                            <p>车智乐车载K歌系统</p>
                            <h2>车智乐·唱吧</h2>
                        </div>
                        <div className="right">
                            "车智乐·唱吧"是由车智乐联合唱吧专门根据车内娱乐场景、用户操作习惯和方式，以及汽车自身的影音娱乐硬件系统定制开发的汽车卡拉OK软件。
                        </div>
                    </div>
                    
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={true}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        className="swiper_container">
                        <SwiperSlide className="card"><img src={swiper7}/></SwiperSlide>
                        <SwiperSlide className="card"><img src={swiper8}/></SwiperSlide>
                        <SwiperSlide className="card"><img src={swiper9}/></SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <div style={{textAlign:'center',padding:'10vh'}}>
                        <h2>落地车场</h2>
                        <div>名企车载首发 开创行业先河</div>
                    </div>
                    <div className="sec-car-content">
                        <div className="left">
                            <img src={left_car}/>
                        </div>
                        <div className="right">
                            <img src={right_car}/>
                        </div>
                    </div>
                </div>
                <div className="section sec-5 sec5" id="sec5">
                    <div className="sec5-head-wrap">
                        <ul className={classNames({
                            "sec5-head":true,
                            "fixed":fixedHead
                        })}>
                            <li 
                            onClick={()=>{this.setState({tabsActive:1})}}
                            className={classNames({"sec5-head-item":true,"sec5-head-item-active": tabsActive ===1})} data-target="sec5-content">
                                合作案例
                                <span className={classNames({"sec5-head-item-span":true,"sec5-head-item-span-active": tabsActive ===1})}></span>
                            </li>
                            <li 
                            onClick={()=>{this.setState({tabsActive:2})}}
                            className={classNames({"sec5-head-item":true,"sec5-head-item-active": tabsActive ===2})}  data-target=".sec5-content2">
                                合作品牌
                                <span className={classNames({"sec5-head-item-span":true,"sec5-head-item-span-active": tabsActive ===2})}></span>
                            </li>
                        </ul>
                    </div>
                    {
                        tabsActive === 1 && (
                        <ul className="sec5-content">
                        <li className="sec5-content-item">
                            <div className="img-01"></div>
                            <div className="sec5-content-item-title">福特中国</div>
                            <div className="sec5-content-item-desc">福特中国与Apollo于2018即战略合作，旨在为中国消费者提供智能化 个性化的车载信息娱乐系统和数字解决方案，运用创新方式提升用户
                                体验。目前， SYNC+智行信息娱乐系统已经在众多车型搭载，为福 特用户带来极致出行新体验。基于百度Apollo智能车联赋能，携手共 同推进汽车智能化进程。</div>
                        </li>
                        <li className="sec5-content-item">
                            <div className="img-02"></div>
                            <div className="sec5-content-item-title">奇瑞星途</div>
                            <div className="sec5-content-item-desc">2015年奇瑞与百度Apollo达成合作，共同研发的Lion雄狮智云4.0智能
                                车机系统。双方在自动驾驶、汽车智能化等多领域的合作频出硕果，整合了AR增强实景导航、深度人脸识别支付、智能语音语义识别等功能， 以“内外兼修”的科技感与智能化，进一步解锁了智能驾乘新体验。
                            </div>
                        </li>
                        <li className="sec5-content-item">
                            <div className="img-03"></div>
                            <div className="sec5-content-item-title">广汽丰田</div>
                            <div className="sec5-content-item-desc">广汽丰田与百度Apollo自2020年达成合作关系以来，双方首先就智能车联领域进行合作，并将合作产出快速落地于广汽丰田重要车型-全新
                                一代汉兰达上，未来将会有更多搭载百度AI智能车联核心能力的广汽丰田车型上市。</div>
                        </li>
                        <li className="sec5-content-item">
                            <div className="img-04"></div>
                            <div className="sec5-content-item-title">上汽通用</div>
                            <div className="sec5-content-item-desc">上汽通用汽车与百度于2018年开始正式建立了紧密的合作关系。依托 双方完整、成熟和先进的研发体系在智能车联领域开展了从产品设计、
                                工程开发、试验认证到交付的全链路能力，覆盖旗下凯迪拉克、别克、雪佛兰等一线品牌。未来双方还将在高精度地图、自动驾驶、智能出 行等领域进行进一步探索。</div>
                        </li>
                        <li className="sec5-content-item">
                            <div className="img-05"></div>
                            <div className="sec5-content-item-title">现代集团</div>
                            <div className="sec5-content-item-desc">从2014年至今，百度与现代起亚建立了紧密的战略合作关系。2018年7月签订的战略合作协议进一步加强了双方在汽车智能化方向上连接和
                                联合创新。目前，双方合作开发的最新智能网联3.0系统，已成功应用 于所有在中国市场上市的现代和起亚车型。</div>
                        </li>
                        <li className="sec5-content-item">
                            <div className="img-06"></div>
                            <div className="sec5-content-item-title">吉利领克&亿咖通科技</div>
                            <div className="sec5-content-item-desc">2019年7月，亿咖通科技与百度Apollo正式签署战略合作协议，接入百度地图汽车版、百度输入法以及音乐资源，涵盖语音、车载小程序
                                百度网盘等能力。亿咖通科技和百度Apollo的合作聚焦于“汽车+AI” 的未来探索，共同研究AI在汽车智能领域的多样应用，并将共同研发下一代人工智能车载系统。</div>
                        </li>
                    </ul>
                        )
                    }
                    {
                        tabsActive === 2 && (
                            <div><img style={{width:'60%',marginLeft:'20%'}} src={cooperImg}/></div>
                        )
                    }
                </div>
            </div>
        )
    }
}