import React from 'react'

export default function Statistics({good, neutral, bad}) {
  return (
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
  )
}
