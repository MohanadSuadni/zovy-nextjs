"use client";

import dynamic from "next/dynamic";

// Dinamički uvoz Admin panela
const AdminPanel = dynamic(() => import("./AdminPanel"), { ssr: false });

export default function Page() {
  return <AdminPanel />;
}