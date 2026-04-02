"use client";

import { Home, ListChecks, User } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-3 left-1/2 w-[92%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur md:hidden">
      <ul className="grid grid-cols-3 text-center text-xs">
        <li className="py-2"><Home className="mx-auto mb-1" size={16}/>Home</li>
        <li className="py-2"><ListChecks className="mx-auto mb-1" size={16}/>Tasks</li>
        <li className="py-2"><User className="mx-auto mb-1" size={16}/>Profile</li>
      </ul>
    </nav>
  );
}