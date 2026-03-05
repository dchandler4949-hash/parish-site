
"use client";

import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-black text-white w-full border-b border-zinc-800 py-6">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="inline-block group">
          <div className="border-4 border-[#FF0000] px-6 py-2 transition-colors hover:bg-[#FF0000]/10">
            <h1 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tight">
              David Chandler
            </h1>
          </div>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
