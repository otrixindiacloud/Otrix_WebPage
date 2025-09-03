"use client";

import Link from "next/link";

export default function GTStoreButton() {
  return (
    <div className="bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-md rounded-xl px-4 py-2.5 border-2 border-white/30 shadow-xl hover:scale-105 transition-transform duration-500">
      <Link href="/" className="flex items-center space-x-2.5">
        <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-black">GT</span>
        </div>
        <span className="text-white font-black text-sm tracking-wider">STORE</span>
      </Link>
    </div>
  );
}
