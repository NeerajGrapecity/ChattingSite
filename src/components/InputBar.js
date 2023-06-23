import { useState } from "react";

function InputBar({ sendText, sender, parent }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(Math.floor(Math.random() * 9999));
    sendText({ id: Math.floor(Math.random() * 9999), text, sender, parent });
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="input-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          placeholder="Send a Message"
        />
        <button className="send-btn">Send</button>
      </form>
    </div>
  );
}

export default InputBar;
