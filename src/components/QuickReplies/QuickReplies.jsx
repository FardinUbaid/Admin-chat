import "./QuickReplies.css";

export default function QuickReplies({ items, onPick }) {
  return (
    <div className="quickWrap">
      <div className="quickTitle">⚡ Quick Replies</div>

      <div className="quickList">
        {items.map((q) => (
          <button key={q.id} className="quickChip" onClick={() => onPick(q.label)}>
            <span className="quickIcon">{q.icon}</span>
            <span className="quickText">{q.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
