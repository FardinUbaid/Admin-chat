import "./ProfileModal.css";

export default function ProfileModal({ open, onClose, agent }) {
  if (!open) return null;

  return (
    <div className="modalBackdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modalCard" onClick={(e) => e.stopPropagation()}>
        <div className="modalTop">
          <div className="modalTitle">Profile Information</div>
          <button className="closeBtn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modalBody">
          <div className="profileRow">
            <img className="profileAvatar" src={agent.avatarUrl} alt="Agent avatar" />
            <div>
              <div className="profileName">{agent.name}</div>
              <div className="profileSub">Shift: {agent.shift}</div>
              <div className="profileSub">
                Status: <span className="dot dot--on" /> Online
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="kv">
            <div className="k">Role</div>
            <div className="v">Support Agent</div>

            <div className="k">Department</div>
            <div className="v">Customer Success</div>

            <div className="k">Timezone</div>
            <div className="v">GMT +6</div>
          </div>
        </div>

        <div className="modalBottom">
          <button className="secondaryBtn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
