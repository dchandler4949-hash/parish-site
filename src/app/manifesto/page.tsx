
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Shield, 
  Leaf, 
  Home, 
  Bus, 
  Banknote, 
  HeartHandshake, 
  Stethoscope, 
  Vote,
  GitMerge,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Landmark
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const policies = [
  { slug: 'defence', title: 'Defence & Procurement', icon: ShieldCheck, desc: 'Procurement audits and frontline support.', image: 'https://picsum.photos/seed/defence/600/400' },
  { slug: 'education', title: 'Education', icon: BookOpen, desc: 'SEND prevalence and rural transport reform.', image: 'https://picsum.photos/seed/edu/600/400' },
  { slug: 'policing', title: 'Policing', icon: Shield, desc: 'PCC audits and rural response hubs.', image: 'https://picsum.photos/seed/police/600/400' },
  { slug: 'environment', title: 'Environment', icon: Leaf, desc: 'Solar dividends and food security.', image: 'https://picsum.photos/seed/env/600/400' },
  { slug: 'housing', title: 'Housing', icon: Home, desc: 'RAF Feltwell and proximity rights.', image: 'https://picsum.photos/seed/house/600/400' },
  { slug: 'transport', title: 'Transport', icon: Bus, desc: 'Bus stations and connectivity.', image: 'https://picsum.photos/seed/bus/600/400' },
  { slug: 'poverty', title: 'Poverty & Welfare', icon: HeartHandshake, desc: 'Hidden poverty and LHA reform.', image: 'https://picsum.photos/seed/poverty/600/400' },
  { slug: 'tax', title: 'Council Tax & Rates', icon: Banknote, desc: 'Investment parity and rate reform.', image: 'https://picsum.photos/seed/tax/600/400' },
  { slug: 'health', title: 'Health & Care', icon: Stethoscope, desc: 'Nationalised care homes and GP integration.', image: 'https://picsum.photos/seed/health/600/400' },
  { slug: 'democracy', title: 'Democracy', icon: Vote, desc: 'Voter turnout and local mandates.', image: 'https://picsum.photos/seed/democracy/600/400' },
  { slug: 'devolution', title: 'Devolution', icon: GitMerge, desc: 'Regional models and unitary power.', image: 'https://picsum.photos/seed/dev/600/400' },
];

export default function ManifestoPage() {
  return (
    <article className="max-w-6xl mx-auto space-y-20 py-12">
      <header className="space-y-6 text-center">
        <h1 className="text-5xl md:text-8xl font-headline font-bold text-primary uppercase tracking-tighter italic">
          The 2026 Manifesto
        </h1>
        <p className="text-3xl font-headline italic text-muted-foreground">
          "Alternative ways for the many, not the few."
        </p>
        <div className="w-32 h-2 bg-primary mx-auto" />
      </header>

      {/* The Core Strategy Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight italic text-primary">Beyond the Blue: Reclaiming Our Identity</h2>
            <p className="text-xl text-foreground font-medium leading-relaxed italic">
              "For decades, our area has been defined by a single political colour. But look around our streets: high poverty, failing buses, and local businesses struggling to survive. David Chandler believes that loyalty to a party should never come at the expense of our own children's future."
            </p>
          </div>
          <div className="prose prose-lg dark:prose-invert">
            <p>
              David Chandler believes that in a "Hard Conservative" area, the greatest act of conservatism is <strong>conserving the community itself</strong>. We have been used as a revenue cell for distant planners, while our unique rural challenges are ignored.
            </p>
            <p>
              David Chandler's manifesto is not about national slogans; it is about <strong>Local Restoration</strong>. It is about bridging the divide between those who have always lived here and those who have recently arrived, united by a single goal: to build a district where every resident is valued.
            </p>
          </div>
        </div>
        <div className="bg-black text-white p-12 border-8 border-primary space-y-8 relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(255,0,0,1)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rotate-45 translate-x-16 -translate-y-16" />
          <h3 className="text-3xl font-headline font-bold italic uppercase border-b-4 border-primary pb-4">The People's Audit</h3>
          <ul className="space-y-6 list-none p-0">
            <li className="flex gap-4">
              <Zap className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-bold uppercase tracking-widest text-sm">Economic Reality</p>
                <p className="text-zinc-400 text-sm italic">"High poverty in a safe seat is a sign of neglect. David Chandler believes it is time to demand our share."</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Users className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-bold uppercase tracking-widest text-sm">Community Unity</p>
                <p className="text-zinc-400 text-sm italic">"Even if you disagree with national politics, we can agree that Mildenhall needs a bus station and affordable care."</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Landmark className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-bold uppercase tracking-widest text-sm">Local Sovereignty</p>
                <p className="text-zinc-400 text-sm italic">"Decisions about our villages should be made in our villages, not in Whitehall or Ipswich."</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-headline font-bold uppercase italic">The Blueprint for Restoration</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic font-medium">
            Explore the detailed evidence and actionable plans that form David Chandler's vision for our district.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((p) => {
            const Icon = p.icon;
            return (
              <Link key={p.slug} href={`/policies/${p.slug}`} className="group relative overflow-hidden block border-4 border-black hover:border-primary transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] bg-white dark:bg-zinc-900">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    data-ai-hint={`${p.title.toLowerCase()} policy`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="font-headline text-2xl font-bold uppercase tracking-tight">{p.title}</span>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{p.desc}</p>
                  <div className="flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all uppercase text-xs">
                    Read Evidence & Policy <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-black text-white p-12 md:p-24 border-8 border-primary text-center space-y-10 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/texture/1200/800')] bg-cover grayscale" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl md:text-6xl font-headline font-bold italic uppercase tracking-tighter">"A Future Built Together"</h2>
          <p className="text-2xl max-w-3xl mx-auto text-zinc-400 italic font-headline leading-relaxed">
            "David Chandler believes that change doesn't start in London; it starts at the end of your driveway. David invites you to join a campaign where your voice is the mandate, and your community is the priority."
          </p>
          <div className="w-32 h-1 bg-primary mx-auto" />
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link href="/contact" className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors italic">Contact David</Link>
            <Link href="/survey" className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-primary hover:border-primary transition-colors italic">Take the Audit</Link>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30 relative z-10">
          Promoted by the David Chandler Campaign Team. Printed Locally.
        </p>
      </section>
    </article>
  );
}
