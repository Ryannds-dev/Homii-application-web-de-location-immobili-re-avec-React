import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      <button className="collapse__header" onClick={handleToggle}>
        <span className="collapse__title">{title}</span>
        <FiChevronUp className={`collapse__icon ${isOpen ? "open" : ""}`} />
      </button>

      <div className="collapse__content-wrapper">
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  );
}
