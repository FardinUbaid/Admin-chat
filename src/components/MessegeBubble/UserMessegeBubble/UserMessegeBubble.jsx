import "./UserMessegeBubble.css";
import { User } from "lucide-react";

export default function UserMessegeBubble({ text, time }) {
  return (
    <div className="row row--user">
      <div className="userAvatar" aria-hidden="true">
        <User size={16} />
      </div>

      <div className="content">
        <div className="bubble bubble--user">
          <div className="bubbleText">{text}</div>
        </div>
        <div className="bubbleMeta"> {time}</div>
      </div>
    </div>
  );
}
