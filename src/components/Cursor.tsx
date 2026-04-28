// Cursor.tsx - Create this component
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHover = () => {
      const hoveredElement = document.querySelector(":hover");
      const isInteractive = hoveredElement?.matches(
        "button, a, input, select, textarea, [role='button'], .interactive"
      );
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHover);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <style>
        {`
          * {
            cursor: none !important;
          }
          button, a, input, select, textarea, [role="button"] {
            cursor: none !important;
          }
        `}
      </style>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          width: isClicking ? "28px" : "32px",
          height: isClicking ? "28px" : "32px",
          border: `2px solid ${isHovering ? "#8b5cf6" : "#3b82f6"}`,
          background: `rgba(${isHovering ? "139, 92, 246" : "59, 130, 246"}, 0.1)`,
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "all 0.2s ease",
          backdropFilter: "blur(2px)",
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          width: isHovering ? "6px" : "8px",
          height: isHovering ? "6px" : "8px",
          background: `linear-gradient(135deg, ${isHovering ? "#8b5cf6" : "#3b82f6"}, ${
            isHovering ? "#a78bfa" : "#60a5fa"
          })`,
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 10000,
          transition: "all 0.1s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;