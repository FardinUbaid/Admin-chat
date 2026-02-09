import { useMemo, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";
import ChatQueue from "./components/ChatQueue/ChatQueue.jsx";
import QuickReplies from "./components/QuickReplies/QuickReplies.jsx";
import FooterInput from "./components/FooterInput/FooterInput.jsx";

export default function App() {
  const [activeChatId, setActiveChatId] = useState("1019");
  const [draft, setDraft] = useState("");

  const agent = useMemo(
    () => ({
      name: "Sarah Mitchell",
      role: "Senior Support Agent",
      shift: "9:00 AM - 5:00 PM",
      status: "online",
      avatarUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=60",
    }),
    []
  );

  const stats = useMemo(
    () => ({
      today: 24,
      avgTime: "32s",
      csat: "98%",
    }),
    []
  );

  const incomingQueue = useMemo(
    () => [
      { id: "1020", title: "Payment issue", waiting: "2m", priority: "normal" },
      { id: "1021", title: "Login problem", waiting: "4m", priority: "high" },
      { id: "1022", title: "Refund request", waiting: "6m", priority: "normal" },
      { id: "1023", title: "Invoice missing", waiting: "8m", priority: "low" },
      { id: "1024", title: "Delivery status", waiting: "10m", priority: "normal" },
    ],
    []
  );

  const chatList = useMemo(
    () => ({
      current: [
        {
          id: "1019",
          title: "Visitor #1019",
          subtitle: "I need help with my subscription...",
          status: "Active",
          duration: "8m",
          isOnline: true,
        },
      ],
      recent: [
        { id: "1015", title: "Visitor #1015", subtitle: "Thank you so much!", status: "Ended", duration: "12m" },
        { id: "1012", title: "Visitor #1012", subtitle: "Got it, thanks!", status: "Ended", duration: "5m" },
        { id: "1008", title: "Visitor #1008", subtitle: "Perfect, that resolved my issue.", status: "Ended", duration: "18m" },
        { id: "1005", title: "Visitor #1005", subtitle: "All set, appreciate the help!", status: "Ended", duration: "7m" },
      ],
    }),
    []
  );

  const conversation = useMemo(
    () => ({
      visitor: {
        id: "1019",
        label: "Visitor #1019",
        state: "Active",
        started: "Started 8m ago",
      },
      messages: [
        { id: "m1", from: "user", text: "Hi there! I'm having trouble with my subscription.", time: "2:34 PM" },
        {
          id: "m2",
          from: "agent",
          text: "Hello! I'd be happy to help you with your subscription. Can you tell me more about the issue you're experiencing?",
          time: "2:35 PM",
        },
        { id: "m3", from: "user", text: "I was charged twice this month for the same plan. I can see two transactions on my bank statement.", time: "2:36 PM" },
        {
          id: "m4",
          from: "agent",
          text: "I understand how frustrating that must be. Let me look into this for you right away.\nCould you please confirm the email address associated with your account?",
          time: "2:37 PM",
        },
        { id: "m5", from: "user", text: "Sure, it's john.smith@email.com", time: "2:37 PM" },
        {
          id: "m6",
          from: "agent",
          text: "Thank you, John. I can see your account and I'm checking the billing history now. Please give me just a moment.",
          time: "2:38 PM",
        },
      ],
    }),
    []
  );

  const quickReplies = useMemo(
    () => [
      { id: "q1", icon: "👋", label: "Hello! How can I help you today?" },
      { id: "q2", icon: "📝", label: "Can you please share more details?" },
      { id: "q3", icon: "🔎", label: "Our team is checking this for you..." },
      { id: "q4", icon: "🙏", label: "Thank you for your patience!" },
      { id: "q5", icon: "✨", label: "Is there anything else I can help with?" },
    ],
    []
  );

  const handlePickQuickReply = (text) => setDraft(text);

  const handleSend = () => {
    setDraft("");
  };

  const handleEndChat = () => {
    alert("End Chat clicked (static UI).");
  };

  return (
    <div className="appRoot">
      <Header agent={agent} stats={stats} />

      <main className="layout">
        <section className="leftPane">
          <ChatWindow conversation={conversation} onEndChat={handleEndChat} />
          <QuickReplies items={quickReplies} onPick={handlePickQuickReply} />
          <FooterInput value={draft} onChange={setDraft} onSend={handleSend} />
        </section>

        <aside className="rightPane">
          <ChatQueue
            stats={stats}
            incoming={incomingQueue}
            chats={chatList}
            activeChatId={activeChatId}
            onSelectChat={setActiveChatId}
          />
        </aside>
      </main>
    </div>
  );
}
