import "./FooterInput.css";

export default function FooterInput({ value, onChange, onSend }) {
  return (
    <div className="inputWrap">
      <div className="inputRow">
        <button className="miniBtn" title="Attach">📎</button>

        <input
          className="textInput"
          placeholder="Type your message..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <button className="miniBtn" title="Emoji">😊</button>
        <button className="sendBtn" onClick={onSend} disabled={!value.trim()}>
          ➤
        </button>
      </div>
    </div>
  );
}
