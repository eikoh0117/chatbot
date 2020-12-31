import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.scss";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
type State = {
  answers: [];
  chats: [];
  currentId: string;
  dataset: unknown;
  open: boolean;
};
export default class App extends React.Component<Props, State> {
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
    return (
      <section className="c-section">
        <div className="c-box">{this.state.currentId}</div>
      </section>
    );
  }
}
