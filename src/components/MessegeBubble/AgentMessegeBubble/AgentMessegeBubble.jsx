import { Bot, CheckCheck } from "lucide-react";
import "./AgentMessegeBubble.css";

export default function AgentMessegeBubble({ text, time }) {
  return (
    <div className="row row--agent">
      <div className="content">
        <div className="bubble bubble--agent">
          <div className="bubbleText">{text}</div>
        </div>
        <div className="bubbleMeta"> <CheckCheck size={12} /> {time}</div>
      </div>

      <div className="bubbleAction" title="Tools">
        <Bot className="bubbleAction__icon" size={16} />
      </div>
    </div>
  );
}
