import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.scss";

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
  }

  render() {
    return <div></div>;
  }
}
