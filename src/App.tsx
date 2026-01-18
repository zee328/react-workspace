import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0c29 0%, #302b63 25%, #24243e 50%, #8e2de2 75%, #4a00e0 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <Alert>Welcome to the Simple Counter App!</Alert>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            color: "#00ffff",
            textShadow:
              "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de",
            fontWeight: "bold",
            margin: "40px 0",
          }}
        >
          Counter: {count}
        </h2>

        <div style={{ marginTop: "15px" }}>
          <button
            onClick={decrement}
            style={{
              margin: "0 10px",
              padding: "15px 30px",
              fontSize: "18px",
              cursor: "pointer",
              background: "linear-gradient(135deg, #ff00de 0%, #7928ca 100%)",
              border: "2px solid #ff00de",
              borderRadius: "50px",
              color: "white",
              fontWeight: "bold",
              boxShadow: "0 0 20px #ff00de, 0 8px 15px rgba(255,0,222,0.4)",
              transition: "all 0.3s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(-5deg)";
              e.currentTarget.style.boxShadow =
                "0 0 30px #ff00de, 0 12px 20px rgba(255,0,222,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px #ff00de, 0 8px 15px rgba(255,0,222,0.4)";
            }}
          >
            - Decrement
          </button>

          <button
            onClick={reset}
            style={{
              margin: "0 10px",
              padding: "15px 30px",
              fontSize: "18px",
              cursor: "pointer",
              background: "linear-gradient(135deg, #ffd700 0%, #ff6b35 100%)",
              border: "2px solid #ffd700",
              borderRadius: "50px",
              color: "#1a1a2e",
              fontWeight: "bold",
              boxShadow: "0 0 20px #ffd700, 0 8px 15px rgba(255,215,0,0.4)",
              transition: "all 0.3s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.boxShadow =
                "0 0 30px #ffd700, 0 12px 20px rgba(255,215,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px #ffd700, 0 8px 15px rgba(255,215,0,0.4)";
            }}
          >
            Reset
          </button>

          <button
            onClick={increment}
            style={{
              margin: "0 10px",
              padding: "15px 30px",
              fontSize: "18px",
              cursor: "pointer",
              background: "linear-gradient(135deg, #00ffff 0%, #1e90ff 100%)",
              border: "2px solid #00ffff",
              borderRadius: "50px",
              color: "#0a0a0a",
              fontWeight: "bold",
              boxShadow: "0 0 20px #00ffff, 0 8px 15px rgba(0,255,255,0.4)",
              transition: "all 0.3s ease",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
              e.currentTarget.style.boxShadow =
                "0 0 30px #00ffff, 0 12px 20px rgba(0,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px #00ffff, 0 8px 15px rgba(0,255,255,0.4)";
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
