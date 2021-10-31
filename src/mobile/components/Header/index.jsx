import React from "react";
import { MenuOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
import logo from "../../../assets/img/home_logo_white.jpg";
import "./index.less";

export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      fixedNav: false,
      input_value: "",
    };
  }

  handleMenu = () => {
    this.setState({ visible: true }, () => {
      document.body.style = "overflow:hidden";
    });
  };

  handleClose = () => {
    this.setState({ visible: false }, () => {
      document.body.removeAttribute("style");
    });
  };

  bindHandleScroll = () => {
    console.log('this.props.type',this.props.type)
    if(this.props.type === "menu"){
      const FIXEDHEIGHT = 100;
      if (document.documentElement.scrollTop > FIXEDHEIGHT) {
        this.setState({
          fixedNav: true,
        });
      } else {
        this.setState({
          fixedNav: false,
        });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.bindHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindHandleScroll);
  }

  handleMenuItem = (e) => {
    if (e.target.dataset.anchor) {
      this.handleClose();
      window.location.href = `#${e.target.dataset.anchor}`;
    }
  };

  handleClear = () => {
    this.setState({ input_value: "" });
  };

  handleInputChange = (e) => {
    this.setState({
      input_value: e.target.value,
    });
  };
  keyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      // 搜索
      console.log('111')
    }
  }

  render() {
    const { visible, fixedNav } = this.state;
    const { type = "menu" } = this.props;
    return (
      <div className={`header ${type !== "menu"?'top':''}`}>
        <div
          className={`wrap ${visible ? "active" : ""}  ${
            fixedNav ? "header-fixed" : ""
          }`}
        >
          <img src={logo} className="logo" />
          {type === "menu" ? (
            visible ? (
              <CloseOutlined onClick={this.handleClose} />
            ) : (
              <MenuOutlined onClick={this.handleMenu} />
            )
          ) : (
            ""
          )}
          {type === "search" && (
            <div className="search">
              <form action="">
                <input
                  className="input"
                  type="search"
                  autoComplete="off"
                  value={this.state.input_value}
                  onChange={this.handleInputChange}
                  onKeyDown={this.keyDown}
                />
                <SearchOutlined className="search-icon" />
              </form>
              <CloseOutlined
                className="close-icon"
                onClick={this.handleClear}
              />
            </div>
          )}
        </div>

        {type === "menu" && (
          <div className={visible ? "header-modal" : "header-modal-hide"}>
            <div className="content" onClick={this.handleMenuItem}>
              <div className="item" data-anchor="plan">
                公司简介
              </div>
              <div className="item" data-anchor="show">
                汽车卡拉show
              </div>
              <div className="item" data-anchor="sing">
                车载K歌系统
              </div>
              <div className="item" data-anchor="car">
                落地车厂
              </div>
              <div className="item" data-anchor="news">
                最新动态
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
