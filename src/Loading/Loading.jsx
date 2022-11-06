import React from "react";

export default function Loading({ Color, Color1, Toggle }) {
  return (
    <div
      style={{
        backgroundColor: Color1 ? Color1 : "#00bcd4",
        background: Toggle ? "rgba(255, 255, 255, 0.08)" : Color1,
        transition: "0.4s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          color: Color ? Color : "#fff",
          transition: "0.4s",
        }}
      >
        loading...
      </h1>
    </div>
  );
}
