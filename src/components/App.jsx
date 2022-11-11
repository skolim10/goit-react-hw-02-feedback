import React, { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          {/* <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.handleFeedback}
        />{' '} */}
        </Section>
      </div>
    );
  }
}
