import React, { useState } from "react";
import "./add-button.scss";

export default function AddButton({ onClicked }) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <button
      type="button"
      className="add-button"
      onClick={() => {
        setIsToggled(!isToggled);
        onClicked(isToggled);
      }}
    >
      <img src="/assets/icons/plus.svg" alt="add a task" />
    </button>
  );
}
