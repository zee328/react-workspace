import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Alert>Welcome to the Simple Counter App!</Alert>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Counter: {count}</h2>

        <div style={{ marginTop: "15px" }}>
          <button
            onClick={decrement}
            style={{
              margin: "0 5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            - Decrement
          </button>

          <button
            onClick={reset}
            style={{
              margin: "0 5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Reset
          </button>

          <button
            onClick={increment}
            style={{
              margin: "0 5px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
