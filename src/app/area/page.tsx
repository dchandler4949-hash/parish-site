
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const parishes = [
  {
    id: 'mildenhall',
    name: 'Mildenhall High Town',
    href: '/area/mildenhall-high-town',
    top: '10%',
    left: '23%',
    width: '32%',
    height: '45%',
  },
  {
    id: 'barton-mills',
    name: 'Barton Mills Parish',
    href: '/area/barton-mills',
    top: '25%',
    left: '60%',
    width: '30%',
    height: '40%',
  },
  {
    id: 'worlington',
    name: 'Worlington Parish',
    href: '/area/worlington',
    top: '55%',
    left: '38%',
    width: '25%',
    height: '35%',
  },
  {
    id: 'freckenham',
    name: 'Freckenham Parish',
    href: '/area/freckenham',
    top: '55%',
    left: '10%',
    width: '28%',
    height: '35%',
  }
];

export default function AreaPage() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'electoral-map');

  return (
    <div className="max-w-5xl mx-auto py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-headline font-bold">Our Local Parishes</h1>
        <p className="text-xl text-muted-foreground">
          Explore the community we serve. Click on an area to see specific local initiatives.
        </p>
        <div className="w-24 h-1 bg-[#FF0000] mx-auto" />
      </div>

      <TooltipProvider>
        <div className="relative aspect-video w-full border-4 border-primary rounded-lg overflow-hidden shadow-2xl bg-zinc-900">
          {mapImage && (
            <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              fill
              className="object-contain"
              priority
              data-ai-hint="electoral map"
            />
          )}

          {/* Interactive Overlays */}
          {parishes.map((parish) => (
            <Tooltip key={parish.id}>
              <TooltipTrigger asChild>
                <Link
                  href={parish.href}
                  className="absolute border-2 border-transparent hover:border-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center rounded-lg"
                  style={{
                    top: parish.top,
                    left: parish.left,
                    width: parish.width,
                    height: parish.height,
                  }}
                >
                  <span className="sr-only">{parish.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-primary text-primary-foreground font-bold">
                <p>{parish.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {parishes.map((parish) => (
          <Link key={parish.id} href={parish.href} className="group">
            <div className="p-6 bg-card border-2 hover:border-primary transition-all text-center h-full flex flex-col justify-center">
              <h3 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors">
                {parish.name.replace(' Parish', '')}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">View local priorities & updates</p>
            </div>
          </Link>
        ))}
      </section>

      <div className="bg-zinc-50 dark:bg-zinc-900 p-8 text-center rounded-lg italic">
        <p className="text-muted-foreground">
          "Every village has its own history, and every resident has their own story. Local governance starts with listening to each parish uniquely."
        </p>
      </div>
    </div>
  );
}
