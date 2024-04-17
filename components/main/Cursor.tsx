"use client";
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const cursor = document.getElementById("cursor-custom");

    const updateCursorPosition = (e: any) => {
      setCursorPosition({ x: e.clientX - radius, y: e.clientY - radius });
    };

    const updateRadius = () => {
      const cursorElement = document.getElementById("cursor-custom");
      if (cursorElement) {
        const newRadius = cursorElement.offsetHeight / 2;
        setRadius(newRadius);
      }
    };

    document.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("resize", updateRadius);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("resize", updateRadius);
    };
  }, [radius]);

  return (
    <div
      id="cursor-custom"
      style={{ top: cursorPosition.y, left: cursorPosition.x }}
    ></div>
  );
};

export default CustomCursor;
