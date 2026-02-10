import "./QuickReplies.css";
import { Zap } from "lucide-react";

export default function QuickReplies({ items, onPick }) {
  return (
    <div className="quickWrap">
      <div className="quickTitle"><Zap size={16} color="orange"/> Quick Replies</div>

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
