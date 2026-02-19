import { useEffect, useRef, useState } from "react";
import "./Header.css";
import ProfileModal from "../ProfileModal/ProfileModal.jsx";

export default function Header({ agent, stats }) {
  const [openProfile, setOpenProfile] = useState(false);
  const anchorRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!openProfile) return;
      if (!anchorRef.current) return;
      if (anchorRef.current.contains(e.target)) return;
      setOpenProfile(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openProfile]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenProfile(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar__inner">
        <div className="brand">
          {/* <div className="brand__logo">C</div> */}
          <div className="brand__text">
            <div className="brand__title">ChatDesk</div>
            <div className="brand__sub">Agent Console</div>
          </div>
        </div>

        <div className="topbar__right" ref={anchorRef}>
          <div className="agentMeta">
            <div className="agentMeta__welcome">Welcome back, {agent.name.split(" ")[0]}</div>
            <div className="agentMeta__shift">Shift: {agent.shift}</div>
          </div>

          <button
            className="agentAvatarBtn"
            onClick={() => setOpenProfile((v) => !v)}
            aria-label="Open profile"
          >
            <img className="agentAvatar" src={agent.avatarUrl} alt={`${agent.name} avatar`} />
            <span className={`presence ${agent.status === "online" ? "presence--on" : ""}`} />
          </button>

          <ProfileModal
            open={openProfile}
            agent={agent}
            stats={stats}
            onClose={() => setOpenProfile(false)}
          />
        </div>
      </div>
    </header>
  );
}
