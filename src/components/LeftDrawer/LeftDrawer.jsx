import React, { useState } from "react";
import "./LeftDrawer.css";
import {
  MessageSquare,
  BarChart3,
  Settings,
  Plus,
  History,
  FileText,
  LayoutDashboard,
  PieChart,
  User,
  Sliders,
  HelpCircle,
  Webhook,
  Menu,
  X
} from "lucide-react";

export default function LeftDrawer() {
  const [activeCategory, setActiveCategory] = useState("CharDesk");
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { id: "CharDesk", label: "CharDesk", icon: <MessageSquare size={18} /> },
    { id: "Analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
    { id: "Settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  const options = {
    CharDesk: [
      { label: "New Chat", icon: <Plus size={16} /> },
      { label: "Chat History", icon: <History size={16} /> },
      { label: "Templates", icon: <FileText size={16} /> },
    ],
    Analytics: [
      { label: "Dashboard", icon: <LayoutDashboard size={16} /> },
      { label: "Reports", icon: <BarChart3 size={16} /> },
      { label: "Statistics", icon: <PieChart size={16} /> },
    ],
    Settings: [
      { label: "Profile", icon: <User size={16} /> },
      { label: "Preferences", icon: <Sliders size={16} /> },
      { label: "Help & Support", icon: <HelpCircle size={16} /> },
    ],
  };

  return (
    <aside className={`left-drawer ${isOpen ? "open" : ""}`}>

      {/* HEADER */}
      <div className="drawer-header">
        <div className="logo">
          <Webhook />
        </div>

        {isOpen && <span className="app-name">App Name</span>}

      </div>

      {/* CATEGORIES */}
        <button
          className={`toggle-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

      <div className="drawer-section">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`drawer-btn ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            {isOpen && <span className="label">{category.label}</span>}
          </button>
        ))}
      </div>

      {/* OPTIONS */}
      {isOpen && (
        <div className="drawer-section options-section">
          {options[activeCategory].map((option, index) => (
            <button key={index} className="drawer-option">
              {option.icon}
              <span className="label">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
