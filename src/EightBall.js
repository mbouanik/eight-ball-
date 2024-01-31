import React, { useState } from "react";

const EightBall = ({ data }) => {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");
  const shakeTheBall = () => {
    const idx = Math.floor(Math.random() * data.length);
    setMsg(data[idx].msg);
    setColor(data[idx].color);
    setTimeout(() => {
      setMsg("Think of a Question");
      setColor("black");
    }, 3000);
  };
  return (
    <div
      onClick={shakeTheBall}
      style={{ backgroundColor: color }}
      className="EightBall-circle"
    >
      {msg}
    </div>
  );
};

export default EightBall;
