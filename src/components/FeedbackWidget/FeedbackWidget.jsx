import { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";


export default class FeedbackWidget extends Component {
    state = {
     good: 0,
     neutral: 0,
     bad: 0
    }

    onLeaveFeedback = (propertyName) => {
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
                <Section>
                    <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
                </Section>
                <Section>
                    <Statistics good={good} neutral={neutral} bad={bad}/>
                </Section>
                
                
            </div>
        )
    }
                
}