import React from 'react';
import { FeedbackMurkup } from 'components/Feadback/Feadback';
import {
  DefaultText,
  Statistics,
  Total,
} from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    const total = bad + good + neutral;
    // console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const persent = this.state.good / this.countTotalFeedback();
    return persent ? Math.round(persent * 100) : 0;
  };

  render() {
    return (
      <>
        <Section title={'Please leave feed and back'}>
          <FeedbackMurkup onClick={this.clickHandler} />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section>
            <Statistics
              Good={this.state.good}
              Bad={this.state.bad}
              Neutural={this.state.neutral}
            />
            <Total
              Total={this.countTotalFeedback()}
              persentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <DefaultText />
        )}
      </>
    );
  }
}
export const App = () => {
  return <Feedback />;
};
