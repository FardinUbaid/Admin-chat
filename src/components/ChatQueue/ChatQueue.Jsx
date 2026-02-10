import { useState } from "react";
import "./ChatQueue.css";
import { ChevronDown, Users, MessageSquare } from "lucide-react";

export default function ChatQueue({ stats, incoming, chats, activeChatId, onSelectChat }) {
  const [isQueueOpen, setIsQueueOpen] = useState(true);
  const [showAllChats, setShowAllChats] = useState(false);

  return (
    <div className="sideWrap">
      <div className="statsRow">
        <StatCard value={stats.today} label="Today" />
        <StatCard value={stats.avgTime} label="Avg. Time" />
        <StatCard value={stats.csat} label="CSAT" />
      </div>

      <div className="sideCard">
        <div className="sideCardTop">
          <div className="sideCardTitle">
            <span className="sideIcon"><Users size={16} /></span> Chat Queue
          </div>
          <div className="sideCardSub">Incoming Requests</div>

          <button
            className={`collapseBtn ${isQueueOpen ? "collapseBtn--open" : ""}`}
            aria-label="Toggle queue"
            onClick={() => setIsQueueOpen((v) => !v)}
          >
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="queueMeta">{incoming.length} users waiting</div>

        {isQueueOpen && (
          <div className="queueList">
            {incoming.map((q) => (
              <div key={q.id} className="queueItem">
                <div className="queueItemLeft">
                  <div className={`prioDot prioDot--${q.priority}`} />
                  <div>
                    <div className="queueTitle">Visitor #{q.id}</div>
                    <div className="queueSub">{q.title}</div>
                  </div>
                </div>
                <div className="queueTime">{q.waiting}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sideCard">
        <div className="sideCardTop">
          <div className="sideCardTitle">
            <span className="sideIcon2"><MessageSquare size={16} /></span> My Chats
          </div>
          <div className="sideCardSub">1 active</div>
        </div>

        <div className="sectionLabel">CURRENT CHAT</div>
        <div className="chatList">
          {chats.current.map((c) => (
            <ChatItem
              key={c.id}
              chat={c}
              active={c.id === activeChatId}
              onClick={() => onSelectChat(c.id)}
            />
          ))}
        </div>

        <div className="sectionLabel">RECENT</div>
        <div className="chatList">
          {chats.recent.slice(0, showAllChats ? chats.recent.length : 3).map((c) => (
            <ChatItem key={c.id} chat={c} active={false} onClick={() => onSelectChat(c.id)} />
          ))}
        </div>

        {!showAllChats && chats.recent.length > 3 && (
          <button 
            className="seeMoreBtn"
            onClick={() => setShowAllChats(true)}
          >
            Show {chats.recent.length-3} More
          </button>
        )}
      </div>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="statCard">
      <div className="statValue">{value}</div>
      <div className="statLabel">{label}</div>
    </div>
  );
}

function ChatItem({ chat, active, onClick }) {
  return (
    <button className={`chatItem ${active ? "chatItem--active" : ""}`} onClick={onClick}>
      <div className="chatAvatar">{chat.id.slice(-2)}</div>
      <div className="chatInfo">
        <div className="chatTopLine">
          <div className="chatTitle">{chat.title}</div>
          {chat.isOnline ? <span className="onlineDot" /> : null}
        </div>
        <div className="chatSub">{chat.subtitle}</div>
        <div className="chatMeta">
          <span className={`pill2 ${chat.status === "Active" ? "pill2--on" : ""}`}>{chat.status}</span>
          <span className="metaDot">•</span>
          <span className="muted">{chat.duration}</span>
        </div>
      </div>
    </button>
  );
}
