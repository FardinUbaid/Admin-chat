import "./FooterInput.css";
import { Paperclip, Smile, SendHorizonal } from "lucide-react";

export default function FooterInput({ value, onChange, onSend }) {
  return (
    <div className="inputWrap">
      <div className="inputRow">
        <button className="miniBtn" title="Attach"><Paperclip size={16} /></button>

        <input
          className="textInput"
          placeholder="Type your message..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <button className="miniBtn" title="Emoji"><Smile size={16} color="Orange"/></button>
        <button className="sendBtn" onClick={onSend} disabled={!value.trim()}>
          <SendHorizonal size={16}/>
        </button>
      </div>
    </div>
  );
}
