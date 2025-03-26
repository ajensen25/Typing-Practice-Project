import "./Content.css";

function Content() {
  return (
    <div className="content">
      <h1 className="timer">15</h1>
      <div className="word-list">
        <p>The tiny red fox jumped over the large black fence.</p>
      </div>
      <div className="typing-stats">
        <h2>WPM: 112</h2>
        <p>
          Characters per minute: <h2>520</h2>
        </p>
        <p>
          Completion time: <h2>8.6 seconds</h2>
        </p>
      </div>
    </div>
  );
}

export default Content;
