import { Component } from "react";

export default class FeedbackWidget extends Component {
    state = {
     good: 0,
     neutral: 0,
     bad: 0
    }
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <div>
                    <h2>Please leave feedback</h2>
                    <button>Good</button>
                    <button>Neutral</button>
                    <button type="submit">Bad</button>
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