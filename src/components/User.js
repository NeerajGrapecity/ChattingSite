import InputBar from "./InputBar";
import TextList from "./TextList";

function User({ children, texts, setTexts, parent }) {
  const sendText = (msg) => {
    setTexts([...texts, msg]);
  };

  return (
    <div className="user-container">
      <h1>{children}</h1>
      <div className="user-window">
        <TextList texts={texts} parent={parent} />
        <InputBar sendText={sendText} sender={children} parent={parent} />
      </div>
    </div>
  );
}

export default User;
