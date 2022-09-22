import { Component } from "react";

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
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        {/* <li>Total:</li>
                        <li>Positive feedback:</li> */}
                    </ul>
                </div>
            </div>
        )
    }
}