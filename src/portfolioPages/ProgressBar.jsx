import React from "react";

export default function ProgressBar({ done, Color, name }) {
  const [Style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      transition: "1.1s",
    };
    setStyle(newStyle);
  }, 0);
  return (
    <div className="progressBar">
      <p style={{fontSize:'20px'}}>{name}</p>
      <div className="progress">
        <div
          className="progress-done"
          style={{
            opacity: Style.opacity,
            width: Style.width,
            background: Color,
            transition: "0.4s",
          }}
        >
          {done}%
        </div>
      </div>
    </div>
  );
}
