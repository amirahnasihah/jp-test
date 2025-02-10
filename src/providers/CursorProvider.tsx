"use client";
import useCustomCursor from "@/hooks/useCustomCursor";
export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useCustomCursor();
  return <>{children}</>;
}
