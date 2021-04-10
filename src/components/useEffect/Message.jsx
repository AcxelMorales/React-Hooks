import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coors, setCoors] = useState({
    x: 0,
    y: 0,
  });

  const { x, y } = coors;

  useEffect(() => {
    const mouseMove = ({ x, y }) => {
      const coors = { x: x, y: y };
      setCoors(coors);

      console.log("🤪");
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div className="mt-3">
      <h3>Message !</h3>
      <p>
        x: {x}, y: {y}
      </p>
    </div>
  );
};
