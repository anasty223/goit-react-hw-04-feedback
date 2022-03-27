import "./App.css";
import React, { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

export default function App(params) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const onLeaveFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;

      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          countTotal={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

// class OldApp extends Component {
//   state = { good: 0, neutral: 0, bad: 0 };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   countTotalFeedback = () => {
//     const values = Object.values(this.state);
//     return values.reduce((total, value) => total + value);
//   };
//   onLeaveFeedback = (event) => {
//     const nameButton = event.currentTarget.textContent;
//     this.setState((prevState) => ({
//       [nameButton]: (prevState[nameButton] += 1),
//     }));
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state);
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={keys}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             countTotal={this.countTotalFeedback()}
//             positiveFeedback={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
