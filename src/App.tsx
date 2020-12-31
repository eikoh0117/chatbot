import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.scss";
import { AnswersList } from "./components";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
type State = {
  answers: [];
  chats: [];
  currentId: string;
  dataset: any;
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

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers,
    });
  };

  componentDidMount() {
    this.initAnswer();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList answers={this.state.answers}></AnswersList>
        </div>
      </section>
    );
  }
}
