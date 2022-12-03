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
    const { Bad, Good, Neutral } = this.state;
    const total = Bad + Good + Neutral;
    // console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const persent = this.state.Good / this.countTotalFeedback();
    return persent ? Math.round(persent * 100) : 0;
  };

  render() {
    return (
      <>
        <Section title={'Please leave feed and back'}>
          <FeedbackMurkup
            onButtonBad={this.buttonBad}
            onButtonGood={this.buttonGood}
            onButtonNeutural={this.buttonNeutural}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section>
            <Statistics
              Good={this.state.Good}
              Bad={this.state.Bad}
              Neutural={this.state.Neutral}
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
