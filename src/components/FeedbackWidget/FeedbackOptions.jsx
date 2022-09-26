import React from 'react'

export default function FeedbackOptions({onLeaveFeedback}) {
  return (
      <div>
          <h2>Please leave feedback</h2>
            <button onClick={() => onLeaveFeedback("good")}>Good</button>
            <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
            <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      </div>
  )
}
