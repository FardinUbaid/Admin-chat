import "./Header.css";

export default function Header({ agent, onOpenProfile }) {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <div className="brand">
          <div className="brand__logo">C</div>
          <div className="brand__text">
            <div className="brand__title">ChatDesk</div>
            <div className="brand__sub">Agent Console</div>
          </div>
        </div>

        <div className="topbar__right">
          <div className="agentMeta">
            <div className="agentMeta__welcome">Welcome back, {agent.name}</div>
            <div className="agentMeta__shift">Shift: {agent.shift}</div>
          </div>

          <button className="agentAvatarBtn" onClick={onOpenProfile} aria-label="Open profile">
            <img className="agentAvatar" src={agent.avatarUrl} alt={`${agent.name} avatar`} />
            <span className={`presence ${agent.status === "online" ? "presence--on" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
