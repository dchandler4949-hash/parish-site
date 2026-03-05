
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Home, 
  FileText, 
  User, 
  ShieldCheck, 
  ClipboardList, 
  LibraryBig, 
  Mail,
  Map as MapIcon,
  GitMerge
} from 'lucide-react';

const links = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Manifesto', href: '/manifesto', icon: FileText },
  { name: 'Policies', href: '/policies', icon: ShieldCheck },
  { name: 'Devolution', href: '/policies/devolution', icon: GitMerge },
  { name: 'Our Area', href: '/area', icon: MapIcon },
  { name: 'About David', href: '/about', icon: User },
  { name: 'Survey', href: '/survey', icon: ClipboardList },
  { name: 'Evidence', href: '/resources', icon: LibraryBig },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            )}
          >
            <Icon className="w-4 h-4" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
