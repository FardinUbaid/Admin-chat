import "./UserMessegeBubble.css";

export default function UserMessegeBubble({ text, time }) {
  return (
    <div className="row row--user">
      <div className="userAvatar" aria-hidden="true">👤</div>
      <div className="bubble bubble--user">
        <div className="bubbleText">{text}</div>
        <div className="bubbleMeta">{time}</div>
      </div>
    </div>
  );
}
