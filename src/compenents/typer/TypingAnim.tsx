import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
  sequence={[
    "Chat With Your OWN AI",
    1000,
    "Built With Groq API 🤖",
    2000,
    "Your Own Customized Chatbot💻",
    1500,
  ]}
  speed={50}
  style={{
    fontSize: "clamp(1.95rem, 5vw, 3.75rem)", 
    padding: "20px",
    color: "white",
    display: "inline-block",
    textShadow: "1px 1px 20px #000",
  }}
  repeat={Infinity}
/>

  );
};

export default TypingAnim;