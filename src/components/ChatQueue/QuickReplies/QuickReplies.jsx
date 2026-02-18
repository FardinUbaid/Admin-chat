import { useState } from "react";
import "./QuickReplies.css";
import { Zap, Star, Shield, User } from "lucide-react"; 

export default function QuickReplies({ items, onPick }) {
  const [expandedOption, setExpandedOption] = useState(null);
  const [openCategory, setOpenCategory] = useState("Favorite");

  const categories = [
    { id: "Favorite", label: "Favorite", icon: <Star size={16} color="gold" /> },  
    { id: "Admin", label: "Admin", icon: <Shield size={16} color="blue" /> },        
    { id: "Mine", label: "Mine", icon: <User size={16} color="green" /> },     
  ];

  const options = {
    Favorite: [
      { id: "option1", label: "Greetings", replies: items.filter(item => item.category === "Favorite" && item.option === "Greetings") },
      { id: "option2", label: "Common", replies: items.filter(item => item.category === "Favorite" && item.option === "Common") },
    ],
    Admin: [
      { id: "option1", label: "Escalation", replies: items.filter(item => item.category === "Admin" && item.option === "Escalation") },
      { id: "option2", label: "Policies", replies: items.filter(item => item.category === "Admin" && item.option === "Policies") },
    ],
    Mine: [
      { id: "option1", label: "Custom Responses", replies: items.filter(item => item.category === "Mine" && item.option === "Custom Responses") },
      { id: "option2", label: "Closing", replies: items.filter(item => item.category === "Mine" && item.option === "Closing") },
    ],
  };

  const toggleCategory = (categoryId) => {
    setOpenCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const toggleOption = (optionId) => {
    setExpandedOption((prev) => (prev === optionId ? null : optionId));
  };

  return (
    <div className="quickWrap">
      <div className="quickTitle">
        <Zap size={16} color="orange" /> Quick Replies
      </div>

      <div className="categoryNavigation">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`categoryButton ${openCategory === category.id ? "active" : ""}`}
            onClick={() => toggleCategory(category.id)}
          >
            <span className="categoryIcon">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {openCategory && (
        <div className="categoryOptions">
          {options[openCategory].map((option) => (
            <div key={option.id}>
              <button
                className="optionTitle"
                onClick={() => toggleOption(option.id)}
              >
                {option.label}
              </button>
              {expandedOption === option.id && (
                <div className="quickReplies">
                  {option.replies.map((reply, idx) => (
                    <button
                      key={idx}
                      className="quickChip"
                      onClick={() => onPick(reply.label)}
                    >
                      <span className="quickText">{reply.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
