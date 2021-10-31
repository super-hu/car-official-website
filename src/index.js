import React from "react";
import ReactDom from "react-dom";
import Router from "./router";
import Mobie from "./mobile/index.jsx";

class App extends React.Component {
  isMobie = () => {
    const info = navigator.userAgent;
    const agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPod",
      "iPad",
    ];
    for (let i = 0; i < agents.length; i++) {
      if (info.indexOf(agents[i]) >= 0) return true;
    }
    return false;
  };

  render() {
    return <div>{this.isMobie() ? <Mobie /> : <Router />}</div>;
  }
}
ReactDom.render(<App />, document.getElementById("app"));
