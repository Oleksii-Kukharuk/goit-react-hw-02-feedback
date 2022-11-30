import React from 'react';
import { FeedbackMurkup } from 'components/Feadback/Feadback';
import { Statistics, Total } from 'components/Statistics/Statistics';

class Feedback extends React.Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  buttonGood = () => {
    this.setState(prevState => {
      return { Good: prevState.Good + 1 };
    });
  };
  buttonNeutural = () => {
    this.setState(prevState => ({
      Neutral: prevState.Neutral + 1,
    }));
  };
  buttonBad = () => {
    this.setState(prevState => ({
      Bad: prevState.Bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.Bad + this.state.Good + this.state.Neutral;
    // console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const persent = this.state.Good / this.countTotalFeedback();
    return persent * 100;
  };

  render() {
    return (
      <>
        <FeedbackMurkup
          onButtonBad={this.buttonBad}
          onButtonGood={this.buttonGood}
          onButtonNeutural={this.buttonNeutural}
        />
        <Statistics
          Good={this.state.Good}
          Bad={this.state.Bad}
          Neutural={this.state.Neutral}
        />
        <Total
          Total={this.countTotalFeedback()}
          persentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
export const App = () => {
  return <Feedback />;
};
