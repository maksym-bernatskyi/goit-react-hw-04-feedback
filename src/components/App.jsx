import React, { Component } from 'react';
import TitleSection from './TitleSection';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notifications from './Notifications';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  leaveFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1,
    }));
};

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
};

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
};

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const objectKey = Object.keys(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="feedback__container">
        <TitleSection title="Please leave your feedback">
          <FeedbackOptions options={objectKey} leaveFeedback={this.leaveFeedback} />
        </TitleSection>

        <TitleSection title="Statistics">
          {total !== 0 ? (
            <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
              />
          ) : (
            <Notifications message="There's no feedback!" />
          )}
        </TitleSection>
      </div>
    );
  };
};
