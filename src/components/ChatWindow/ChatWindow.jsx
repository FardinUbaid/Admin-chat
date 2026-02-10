import "./ChatWindow.css";
import AgentMessegeBubble from "../MessegeBubble/AgentMessegeBubble/AgentMessegeBubble";
import UserMessegeBubble from "../MessegeBubble/UserMessegeBubble/UserMessegeBubble";
import { Ellipsis, Phone, Video, X } from "lucide-react";

export default function ChatWindow({ conversation, onEndChat }) {
  const { visitor, messages } = conversation;

  return (
    <div className="chatCard">
      <div className="chatHeader">
        <div className="chatHeader__left">
          <div className="visitorBadge">{visitor.id.slice(-2)}</div>
          <div>
            <div className="visitorLine">
              <span className="visitorTitle">{visitor.label}</span>
              <span className="pill pill--success">{visitor.state}</span>
            </div>
            <div className="visitorSub">{visitor.started}</div>
          </div>
        </div>

        <div className="chatHeader__right">
          <button className="iconBtn" aria-label="Call"><Phone className="iconBtn__icon" size={16} /></button>
          <button className="iconBtn" aria-label="Video"><Video className="iconBtn__icon" size={16} /></button>
          <button className="iconBtn" aria-label="More"><Ellipsis className="iconBtn__icon" size={16} /></button>

          <button className="endBtn" onClick={onEndChat}>
            <span className="endBtn__x"><X className="endBtn__x-icon" size={16} /></span>
            End Chat
          </button>
        </div>
      </div>

      <div className="chatBody">
        {messages.map((m) =>
          m.from === "agent" ? (
            <AgentMessegeBubble key={m.id} text={m.text} time={m.time} />
          ) : (
            <UserMessegeBubble key={m.id} text={m.text} time={m.time} />
          )
        )}
      </div>
    </div>
  );
}
