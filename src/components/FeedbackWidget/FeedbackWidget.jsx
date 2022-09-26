import { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";

export default class FeedbackWidget extends Component {
    state = {
     good: 0,
     neutral: 0,
     bad: 0
    }

    leaveFeedback = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName];
            return {
                [propertyName]: value + 1
            }
      })  
    }

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                    <button onClick={() => this.leaveFeedback("good")}>Good</button>
                    <button onClick={() => this.leaveFeedback("neutral")}>Neutral</button>
                    <button onClick={() => this.leaveFeedback("bad")}>Bad</button>
                </div>
                <Section>
                    <Statistics good={good} neutral={neutral} bad={bad}/>
                </Section>
                
                
            </div>
        )
    }
                
}