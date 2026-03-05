
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const policyLinks = [
  { name: 'Defence', href: '/policies/defence' },
  { name: 'Education', href: '/policies/education' },
  { name: 'Policing', href: '/policies/policing' },
  { name: 'Environment', href: '/policies/environment' },
  { name: 'Housing', href: '/policies/housing' },
  { name: 'Transport', href: '/policies/transport' },
  { name: 'Poverty', href: '/policies/poverty' },
  { name: 'Tax', href: '/policies/tax' },
  { name: 'Health', href: '/policies/health' },
  { name: 'Democracy', href: '/policies/democracy' },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-black text-white border-t-8 border-primary relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-12">
          {/* Top Section: Candidate Identity */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-block bg-primary text-white px-6 py-2 font-headline text-2xl font-bold uppercase tracking-tighter italic border-2 border-black">
                David Chandler
              </div>
              <h3 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tight leading-none">
                Candidate for Suffolk County Council <br />
                <span className="text-primary italic">Mildenhall Division 2026</span>
              </h3>
            </div>
            <div className="max-w-xs border-l-4 border-primary pl-6">
              <p className="text-zinc-400 text-sm italic font-headline leading-relaxed">
                "David Chandler believes in alternative ways for the many, not the few. David Chandler is reclaiming the forgotten towns through evidence-based leadership."
              </p>
            </div>
          </div>

          <Separator className="bg-zinc-800" />

          {/* Middle Section: Policy Navigation (Left to Right) */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">Manifesto & Policy Hub</h4>
            <nav className="flex flex-wrap gap-x-10 gap-y-4">
              {policyLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-zinc-400 hover:text-primary transition-colors text-sm uppercase font-bold tracking-widest italic"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Site Navigation Links */}
          <div className="flex flex-wrap gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500">
            <Link href="/manifesto" className="hover:text-white transition-colors">Manifesto</Link>
            <Link href="/resources" className="hover:text-white transition-colors">Evidence</Link>
            <Link href="/survey" className="hover:text-white transition-colors">The Audit</Link>
            <Link href="/area" className="hover:text-white transition-colors">Our Area</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>

          <Separator className="bg-zinc-800" />

          {/* Bottom Section: Electoral Imprint */}
          <div className="space-y-6 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-3">
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.3em]">Legal Imprint (PPERA 2000 Compliance)</p>
                <p className="text-[11px] text-zinc-400 leading-relaxed uppercase font-medium">
                  Promoted by David Chandler, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT. <br />
                  Published by David Chandler, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT.
                </p>
              </div>
              <div className="md:text-right space-y-3">
                <p className="text-[11px] text-zinc-500 uppercase font-bold tracking-[0.2em]">
                  &copy; {currentYear || 2026} DAVID CHANDLER CAMPAIGN. <br />
                  Digital Campaigning for the 2026 Suffolk County Council Election.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-full bg-primary/10 -skew-x-12 translate-x-32 pointer-events-none" />
    </footer>
  );
}
