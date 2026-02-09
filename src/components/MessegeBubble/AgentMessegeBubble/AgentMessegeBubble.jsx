import "./AgentMessegeBubble.css";

export default function AgentMessegeBubble({ text, time }) {
  return (
    <div className="row row--agent">
      <div className="bubble bubble--agent">
        <div className="bubbleText">{text}</div>
        <div className="bubbleMeta">{time}</div>
      </div>
      <div className="bubbleAction" title="Tools">🤖</div>
    </div>
  );
}
