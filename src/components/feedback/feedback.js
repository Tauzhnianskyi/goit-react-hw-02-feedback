import React, { Component } from 'react';

import css from './feedBack.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  incrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  incrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div className={css.feedbackWrapper}>
        <h2 className={css.title}>Please leave Feedback</h2>
        <ul className={css.btnList}>
          <li className={css.btnItems}>
            <button className={css.btnGrade} onClick={this.incrementGood}>
              Good
            </button>
          </li>
          <li className={css.btnItems}>
            <button className={css.btnGrade} onClick={this.incrementNeutral}>
              Neutral
            </button>
          </li>
          <li className={css.btnItems}>
            <button className={css.btnGrade} onClick={this.incrementBad}>
              Bad
            </button>
          </li>
        </ul>

        <h2 className={css.title}>Statistic</h2>
        <ul className={css.statList}>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
        </ul>
        <p>
          Percentage of Good feedbacks:{' '}
          {(this.state.good * 100) /
            (this.state.good + this.state.neutral + this.state.bad)}
        </p>
      </div>
    );
  }
}
