import { useMemo, useState } from "react";
import "./ProfileModal.css";

export default function ProfileModal({ open, onClose, agent, stats }) {
  const [status, setStatus] = useState("available");

  const statusItems = useMemo(
    () => [
      { key: "available", label: "Available", icon: "○", accent: "blue" },
      { key: "in_chat", label: "In Chat", icon: "○", accent: "muted" },
      { key: "away", label: "Away", icon: "◌", accent: "orange" },
      { key: "break", label: "In Break", icon: "☕", accent: "muted" },
    ],
    []
  );

  if (!open) return null;

  return (
    <div className="profilePopover" role="dialog" aria-modal="false">
      <div className="profileTop">
        <div className="profileTopLeft">
          <div className="avatarWrap">
            <img className="profileAvatar" src={agent.avatarUrl} alt="Agent" />
            <span className="onlineDot" />
          </div>

          <div>
            <div className="profileName">{agent.name}</div>
            <div className="profileRole">
              <span className="lock">🔒</span> {agent.role || "Support Agent"}
            </div>
          </div>
        </div>

        <button className="profileClose" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>

      <div className="profileSectionTitle">Change Status</div>

      <div className="statusList">
        {statusItems.map((s) => (
          <button
            key={s.key}
            className={`statusItem ${status === s.key ? "statusItem--active" : ""}`}
            onClick={() => setStatus(s.key)}
          >
            <div className={`statusIcon statusIcon--${s.accent}`}>{s.icon}</div>
            <div className="statusLabel">{s.label}</div>
            {status === s.key ? <div className="statusCheck">✓</div> : <div className="statusCheck statusCheck--empty" />}
          </button>
        ))}
      </div>

      <div className="divider" />

      <div className="profileSectionTitle">Today's Performance</div>

      <div className="perfGrid">
        <div className="perfCard">
          <div className="perfValue">{stats?.today ?? 24}</div>
          <div className="perfLabel">Chats</div>
        </div>
        <div className="perfCard">
          <div className="perfValue">{stats?.avgTime ?? "32s"}</div>
          <div className="perfLabel">Avg. Time</div>
        </div>
        <div className="perfCard">
          <div className="perfValue">{stats?.csat ?? "98%"}</div>
          <div className="perfLabel">CSAT</div>
        </div>
      </div>
    </div>
  );
}
