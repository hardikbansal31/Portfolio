import React from "react";
import logos from "../assets/react";

export default function FloatingLogos() {
  return (
    <div className="logoCloud fixed inset-0 -z-10 pointer-events-none">
      {logos.map((src, i) => (
        <img
          key={src}
          src={src}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "60px",
            "--dur": `${20 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
}
