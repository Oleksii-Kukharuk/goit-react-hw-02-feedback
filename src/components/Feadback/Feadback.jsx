import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonGood = event => {
    console.log(this.state);
    this.setState(prevState => {
      console.log(prevState);
      return {
        bad: prevState.value + 1,
      };
    });
  };
  buttonNeutural = event => {
    console.log('Neutural');
    console.log(event);
  };
  buttonBad = event => {
    console.log('Bad');
    console.log(event);
  };

  render() {
    return (
      <div>
        <p className="Feedback-title">Please leave feedback</p>
        <div className="Fedback-buttons">
          <button type="button" onClick={this.buttonGood}>
            Good
          </button>
          <button type="button" onClick={this.buttonNeutural}>
            Neutural
          </button>
          <button type="button" onClick={this.buttonBad}>
            Bad
          </button>
        </div>
      </div>
    );
  }
}

export default Feedback;
