import TextShow from "./TextShow";
import ReactScrollableFeed from "react-scrollable-feed";

function TextList({ texts, parent }) {
  const renderTexts = texts.map((text) => {
    return <TextShow key={text.id} text={text} parent={parent} />;
  });

  return (
    <div className="text-container">
      <ReactScrollableFeed>{renderTexts}</ReactScrollableFeed>
    </div>
  );
}

export default TextList;
