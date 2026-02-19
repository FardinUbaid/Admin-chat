import { useState } from "react";
import "./ChatQueue.css";
import { ChevronDown, Users, MessageSquare, Clock4, MoveRight , Sparkles, CheckCheck } from "lucide-react";

export default function ChatQueue({ stats, incoming, chats, activeChatId, onSelectChat }) {
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [showAllChats, setShowAllChats] = useState(false);

  return (
    <div className="sideWrap">

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
                  <div className= "prioDot" />
                  <div>
                    <div className="queueTitle">Visitor #{q.id}</div>
                    <div className="queueSub"> <Clock4 size={12} /> Waiting {q.waiting}</div>
                  </div>
                </div>
                <button className="acceptBtn">Accept <MoveRight className="arrow" size={16} /></button>
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

        {showAllChats && (
          <div className="chatList">
            {chats.recent.map((c) => (
              <ChatItem
                key={c.id}
                chat={c}
                active={false}
                onClick={() => onSelectChat(c.id)}
              />
            ))}
          </div>
        )}

        {chats.recent.length > 0 && (
          <button
            className="seeMoreBtn"
            onClick={() => setShowAllChats((prev) => !prev)}
          >
            {showAllChats ? "Hide Recent" : `Show ${chats.recent.length} Recent`}
          </button>
        )}

      </div>
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
          <span
            className={`pill2 ${chat.status === "Active" ? "pill2--on" : ""}`}
          >
            {chat.status === "Active" ? (
              <Sparkles size={12} />
            ) : (
              <CheckCheck size={12} />
            )}
            {chat.status}
          </span>
          <span className="metaDot"><Clock4 size={12} /></span>
          <span className="muted">{chat.duration}</span>
        </div>
      </div>
    </button>
  );
}
