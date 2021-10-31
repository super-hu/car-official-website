import React, { useRef, useEffect } from "react";
import Header from "../components/Header/index.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Tabs, { TabPane } from "rc-tabs";

import closeImg from "../../assets/img/close.png";
import downIcon from "../../assets/img/todown.png";

import "rc-tabs/assets/index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.less";

export const Anchor = (props) => {
  const { id } = props;
  return (
    <div id={id} style={{marginTop:'-80px',opacity:0, pointerEvents: 'none',position:'absolute'}}>1</div>
  );
};


export const Plan = (props) => {
  const { title, content } = props;
  return (
    <div className="content-item">
      <div>{title}</div>
      <div className="tag"></div>
      <div className="tagtitle">{content}</div>
    </div>
  );
};

export const List = (props) => {
  const { title, img } = props;
  return (
    <div className="list">
      <div className="list-title">{title}</div>
      <img src={require(`../../assets/img/${img}`).default} />
    </div>
  );
};

export const Modal = (props) => {
  const { playVideo, onClose } = props;

  const videoRef = useRef(null);

  useEffect(() => {
    if (playVideo && videoRef) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [playVideo]);

  const handleClose = () => {
    if (videoRef) {
      videoRef.current.pause();
    }
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className={`modal ${playVideo ? "modal-show" : ""}`}>
      <div className="btn-close-wrapper">
        <div className="btn-close-player-wrapper" onClick={handleClose}>
          <img className="img" src={closeImg} />
        </div>
      </div>
      <video
        ref={videoRef}
        playsInline
        controls
        width="100%"
        height="100%"
      >
        <source
          src="https://iov-www.cdn.bcebos.com/chelianwang/video/chelianwang-home.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default class Home extends React.Component {
  PLANS = [
    {
      title: "汽车K歌方案",
      content: "车智乐拥有智能网联汽车+传统汽车的K歌软硬件综合解决方案。",
    },
    {
      title: "wifi音频专利",
      content: "车智乐独家拥有基于WIFI超低延迟音频专利技术解决方案。",
    },
    {
      title: "车机K歌应用",
      content: "车智乐拥有专门基于汽车娱乐场景的卡拉OK应用”车智乐唱吧“。",
    },
    {
      title: "版权音乐",
      content: "车智乐拥有10万+首正版主流热门音乐版权歌曲，且实时更新。",
    },
  ];

  ktvBanner = [
    "swiper1.png",
    "swiper2.png",
    "swiper3.png",
    "swiper4.png",
    "swiper5.png",
    "swiper6.png",
  ];

  news = [
    {
      title: "车载智能卡拉OK备受巨头青睐，汽车智能娱乐新风口已来临。",
      img: "new1.png",
    },
    {
      title: "车智乐汽车K歌麦，让你的爱车秒变名爵同款汽车KTV！",
      img: "new2.png",
    },
    {
      title:
        "以汽车娱乐为切入点，「车智乐智能科技」以汽车神麦要做“物联网+车联网”入口 。",
      img: "new3.png",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      playVideo: false,
      mikeKey: "0",
    };
  }

  handlePlay = () => {
    this.setState({
      playVideo: true,
    });
  };

  handleClosePlay = () => {
    this.setState({
      playVideo: false,
    });
  };

  handleMore=()=>{
    //
  }

  render() {
    return (
      <div className="m-home">
        <Header type="menu" />
        <Modal
          onClose={this.handleClosePlay}
          playVideo={this.state.playVideo}
        />
        <div className="m-home-video">
          <div className="title">
            <div className="title-t1">
              车智乐<span>®</span>汽车K歌
            </div>
            <div className="title-t2">
              智 乐 出 行&nbsp;&nbsp;&nbsp;&nbsp;驰 骋 唱 哼
            </div>
          </div>
          <img src={downIcon} className="down" />
          <video
            className="sec-video"
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
          >
            <source src="../../../static/video/m_home_f.mp4" type="video/mp4" />
          </video>
          <div onClick={this.handlePlay} className="play" />
        </div>

        <div className="m-home-plan">
          <Anchor id="plan"/>
          <div className="title">车智乐智能科技</div>
          <div className="sub-title">
            致力于汽车智能新娱乐软硬件综合解决方案
          </div>
          <div className="content">
            {this.PLANS.map((item, index) => (
              <Plan key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>

        <div className="m-home-show">
          <Anchor id="show"/>
          <div className="text">
            <img src={require('../../assets/img/sec3.png').default} className=""  />
            <div className='text-sub'>娱乐新境界 用户新体验</div>
          </div>
          <div className="entry" onClick={()=>this.props.history.push('/kara-show')}>点击进入</div>
          <video
            className="show-video"
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
          >
            <source
              src="../../../static/video/m_home_kara.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="m-home-sing">
          <Anchor id="sing"/>
          <div className="title">/车智乐车载K歌系统/</div>
          <div className="sub-title">车智乐·唱吧+车智乐汽车K歌麦</div>
          <div className="content">
            <div className="title">车智乐·唱吧</div>
            <div className="sub-title">
              “车智乐·唱吧”是由车智乐联合唱吧专门根据车内娱乐场景、用户操作习惯和方式，以及汽车自身的影音娱乐软硬件系统定制开发的汽车卡拉OK软件。
            </div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
            >
              {this.ktvBanner.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={require(`../../assets/ksong/${item}`).default} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="m-home-karaoke">
          <div className="title">车智乐汽车K歌麦</div>
          <div className="sub-title">
            “汽车K歌麦”是专门结合“车智乐·唱吧”、汽车内影音系统定制开发的车载专用K歌智能设备，在车内较小的空间，解决延迟、啸叫、回音等问题，在音量、音质、音效等方面精心调校，完美匹配车内音响系统设备，为车主打造真正的移动KTV。
          </div>
          <Tabs
            className="tabs"
            activeKey={this.state.mikeKey}
            onChange={(key) => {
              this.setState(
                { mikeKey: key },
                () =>
                  this.swiper && this.swiper.slideTo(Number(this.state.mikeKey))
              );
            }}
          >
            <TabPane tab="超级神麦" key="0" />
            <TabPane tab="汽车K歌麦" key="1" />
            <TabPane tab="汽车神麦" key="2" />
          </Tabs>
          <Swiper
            className="swiper_container"
            slidesPerView="auto"
            centeredSlides={true}
            initialSlide={Number(this.state.mikeKey)}
            onSlideChange={(data) =>
              this.setState({ mikeKey: `${data.activeIndex}` })
            }
            onInit={(swiper) => (this.swiper = swiper)}
          >
            <SwiperSlide className="card">
              <img src={require("../../assets/img/mike_banner2.png").default} />
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={require("../../assets/img/mike_banner1.png").default} />
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={require("../../assets/img/mike_banner3.png").default} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="m-home-car">
          <Anchor id="car"/>
          <div className="title">落地车厂</div>
          <div className="sub-title">名企车载首发 开创行业先河</div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiperCar"
          >
            <SwiperSlide>
              <img
                src={require("../../assets/img/m-banner-car1.png").default}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../assets/img/m-banner-car2.png").default}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="m-home-news">
          <Anchor id="news"/>
          <div className="title">最新动态</div>
          {this.news.map((item, index) => (
            <List key={index} title={item.title} img={item.img} />
          ))}
          <div className="more" onClick={this.handleMore}>查看更多+</div>
        </div>
        <div className="m-home-partner">
          <div className="title">合作伙伴</div>
          <img src={require("../../assets/img/partner.png").default} />
        </div>
      </div>
    );
  }
}
