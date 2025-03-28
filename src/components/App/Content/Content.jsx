import { useRef, useState } from "react";
import "./Content.css";

function Content() {
  const [userSentence, setUserSentence] = useState("");
  const typingInput = useRef(null);

  const onKeyPressed = (e) => {
    console.log(e.key);
  };

  return (
    <div className="content">
      <p className="title">Begin typing to start the timer.</p>
      <h1 className="timer">15</h1>
      <div className="word-list">
        <p>The tiny red fox jumped over the large black fence.</p>
      </div>
      <div className="typing-display">
        <input
          type="text"
          placeholder="Begin the test here"
          ref={typingInput}
          onKeyUp={onKeyPressed}
        />
      </div>
      <div className="typing-stats">
        <p>
          Characters per minute: <span>520</span>
        </p>
        <p>
          Words per minute: <span>112</span>
        </p>
        <p>
          Completion time: <span>8.6 sec</span>
        </p>
      </div>
    </div>
  );
}

export default Content;
