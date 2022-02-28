import React from "react"

export function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  )
}
