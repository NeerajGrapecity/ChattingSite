function TextShow({ text, parent }) {
  const getAlignment = () => {
    const styles = {};
    if (text.sender === parent) {
      styles.justifyContent = "end";
      return styles;
    } else {
      return styles;
    }
  };

  const getColor = () => {
    const styles = {};
    if (text.sender === parent) {
      styles.backgroundColor = "rgb(255, 162, 176)";
      styles.borderColor = "rgb(255, 162, 176)";
      styles.borderBottomRightRadius = 0;
      return styles;
    } else {
      styles.backgroundColor = "white";
      styles.borderColor = "white";
      styles.color = "black";
      styles.borderBottomLeftRadius = 0;
      return styles;
    }
  };

  return (
    <div className="send-message-container" style={getAlignment()}>
      <div className="send-message" style={getColor()}>
        {text.text}
      </div>
    </div>
  );
}

export default TextShow;
