"use client";
import { useEffect } from "react";

const useCustomCursor = (): void => {
  useEffect(() => {
    const handleMouseDown = (): void => {
      document.body.classList.add("red-cursor");
    };

    const handleMouseUp = (): void => {
      document.body.classList.remove("red-cursor");
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
};

export default useCustomCursor;
