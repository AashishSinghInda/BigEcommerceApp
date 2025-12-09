"use client";
import { useState, useEffect } from "react";

export default function ClientWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // SSR ko client se match karwa deta hai

  return children;
}
