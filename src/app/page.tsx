
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Heart, TrendingUp, Users, ShieldCheck, UserPlus, Globe, Landmark } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const priorities = [
  "Social Housing",
  "Roads",
  "Infrastructure",
  "Community Engagement",
  "Localism",
  "Fair investment for Mildenhall, Barton Mills, Worlington and Freckenham",
  "New build housing to put infrastructure first",
  "Economic growth & raising living standards",
  "Reducing Poverty",
  "Dignity in Social Care",
  "Restoring Local Bus Services",
  "Small Business Rate Relief"
];

export default function Home() {
  const wpbEmblem = PlaceHolderImages.find(img => img.id === 'workers-party-emblem');

  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider">
              <Star className="w-4 h-4" /> 2026 County Council Election
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 font-semibold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3" /> DBS Checked
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight">
            Restoring Our <br /> <span className="text-primary italic">Forgotten Towns.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl italic">
            "David Chandler believes that even in a safe seat, poverty is real and neglect is visible. David Chandler proposes a path to community restoration that works for every resident, regardless of their background or belief."
          </p>
          
          <div className="space-y-8">
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-none h-14 px-8 text-lg font-bold" asChild>
                <Link href="/manifesto">Read the Manifesto</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none h-14 px-8 text-lg font-bold" asChild>
                <Link href="/policies">Explore Policies</Link>
              </Button>
            </div>

            {/* Workers Party Prominent Link */}
            <div className="pt-2">
              <Button size="lg" className="w-full md:w-auto bg-black hover:bg-primary text-white rounded-none h-16 px-8 text-xl font-bold uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] group" asChild>
                <a href="https://workerspartybritain.org/join/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  {wpbEmblem && (
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white shrink-0 border-2 border-white transition-transform group-hover:scale-110">
                      <Image src={wpbEmblem.imageUrl} alt="WPB" fill className="object-cover" />
                    </div>
                  )}
                  Join the Workers Party of Britain
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scrolling Banner Area */}
        <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/5] bg-black overflow-hidden border-8 border-primary shadow-2xl">
          <div className="absolute inset-0 flex flex-col items-center">
            <div className="w-full animate-vertical-scroll-down">
              {/* Double the list for seamless loop */}
              {[...priorities, ...priorities].map((priority, index) => (
                <div 
                  key={index} 
                  className="py-12 px-8 border-b border-white/10 flex items-center justify-center text-center"
                >
                  <span className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-white uppercase tracking-tighter italic">
                    {priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Overlays for depth */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest italic">
            Campaign Priorities
          </div>
          <div className="absolute bottom-6 left-6 right-6 p-6 bg-primary/90 backdrop-blur-md text-white space-y-2">
            <p className="font-headline text-lg italic leading-tight">"A mandate built on local evidence."</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80">Mildenhall • Barton Mills • Freckenham • Worlington</p>
          </div>
        </div>
      </section>

      {/* Strategy Bridge Section */}
      <section className="bg-black text-white p-12 md:p-20 border-4 border-primary text-center space-y-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        <h2 className="text-4xl font-headline font-bold italic uppercase">Common Sense for the Many</h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          "David Chandler believes that national politics can be disagreeable, but our local needs are undeniable. David Chandler's goal is to bridge the divides that have kept our communities from receiving the investment they deserve."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 border-l-4 border-primary bg-white/5 space-y-2">
            <Landmark className="w-8 h-8 text-primary mb-2" />
            <h4 className="font-bold uppercase tracking-tight">Restore Local Hubs</h4>
            <p className="text-sm text-zinc-500 italic">David Chandler believes we must reclaim our high streets and bus stations.</p>
          </div>
          <div className="p-6 border-l-4 border-primary bg-white/5 space-y-2">
            <Heart className="w-8 h-8 text-primary mb-2" />
            <h4 className="font-bold uppercase tracking-tight">Dignified Care</h4>
            <p className="text-sm text-zinc-500 italic">David Chandler believes care should be free at the point of use, protected by the NHS.</p>
          </div>
          <div className="p-6 border-l-4 border-primary bg-white/5 space-y-2">
            <TrendingUp className="w-8 h-8 text-primary mb-2" />
            <h4 className="font-bold uppercase tracking-tight">Fair Funding</h4>
            <p className="text-sm text-zinc-500 italic">David Chandler believes our district should no longer be an ATM for urban centres.</p>
          </div>
        </div>
      </section>

      {/* Featured Policy Areas */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-headline font-bold uppercase italic">Key Priorities</h2>
          <p className="text-muted-foreground italic">Evidence-based action for our parishes.</p>
          <div className="w-24 h-1 bg-[#FF0000] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Education', icon: Users, color: 'bg-blue-500', desc: 'Investing in the next generation with modern facilities.' },
            { title: 'Environment', icon: Heart, color: 'bg-green-500', desc: 'A sustainable path to net-zero by 2040.' },
            { title: 'Policing', icon: ShieldCheck, color: 'bg-indigo-500', desc: 'Safer streets through community-led policing.' },
            { title: 'Housing', icon: TrendingUp, color: 'bg-orange-500', desc: 'Affordable, quality homes for local families.' },
          ].map((item) => (
            <Card key={item.title} className="hover:shadow-xl transition-all border-t-4 border-t-primary rounded-none border-4 border-black hover:border-primary">
              <CardContent className="p-8 space-y-4">
                <div className={cn("w-12 h-12 rounded-none flex items-center justify-center text-white border-2 border-black", item.color)}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-headline font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed italic">{item.desc}</p>
                <Link href={`/policies/${item.title.toLowerCase()}`} className="flex items-center text-primary font-bold gap-2 hover:gap-3 transition-all uppercase text-xs">
                  Details <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Inclusivity Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900 p-12 md:p-20 border-4 border-black text-center space-y-8">
        <Globe className="w-16 h-16 mx-auto text-primary" />
        <h2 className="text-4xl font-headline font-bold italic">Inclusive Representation</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
          "David Chandler believes that a true representative serves everyone, regardless of their faith, origin, or status. David Chandler's goal is to bridge the divides that have kept our communities from receiving the investment they deserve."
        </p>
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <div className="w-3 h-3 bg-primary/50 rounded-full" />
          <div className="w-3 h-3 bg-primary/20 rounded-full" />
        </div>
      </section>

      {/* Survey Callout */}
      <section className="bg-primary text-white p-12 md:p-20 relative overflow-hidden border-y-8 border-black">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -rotate-45 translate-x-32 -translate-y-32" />
        <div className="relative z-10 max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter italic">Your Opinion Matters</h2>
          <p className="text-xl text-primary-foreground/90 font-headline">
            David Chandler believes that policies should be built from the ground up. Take part in the public survey and help shape the future of our district.
          </p>
          <Button size="lg" variant="secondary" className="rounded-none h-16 px-12 text-xl font-bold uppercase tracking-widest bg-black text-white hover:bg-white hover:text-black border-2 border-white" asChild>
            <Link href="/survey">Take the People's Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
