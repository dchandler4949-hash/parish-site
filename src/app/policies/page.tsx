import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
  ShieldCheck
} from 'lucide-react';

const policies = [
  { slug: 'defence', title: 'Defence', icon: ShieldCheck, desc: 'Military procurement, waste audits, and personnel support.' },
  { slug: 'education', title: 'Education', icon: BookOpen, desc: 'Schools, higher education, and rural SEND provision.' },
  { slug: 'policing', title: 'Policing', icon: Shield, desc: 'Crime prevention and community-led safety hubs.' },
  { slug: 'environment', title: 'Environment', icon: Leaf, desc: 'Rooftop solar, land protection, and climate action.' },
  { slug: 'housing', title: 'Housing', icon: Home, desc: 'Feltwell on-base housing and proximity rights.' },
  { slug: 'transport', title: 'Transport', icon: Bus, desc: 'Bus station restoration and village connectivity.' },
  { slug: 'poverty', title: 'Poverty & Welfare', icon: HeartHandshake, desc: 'Cost of living support and LHA reform.' },
  { slug: 'tax', title: 'Council Tax & Rates', icon: Banknote, desc: 'Investment parity and small business rate relief.' },
  { slug: 'health', title: 'Health & Care', icon: Stethoscope, desc: 'Nationalized care homes and GP integration.' },
  { slug: 'democracy', title: 'Democracy', icon: Vote, desc: 'Participatory budgeting and voting reform.' },
  { slug: 'devolution', title: 'Devolution', icon: GitMerge, desc: 'Regional models and localized unitary power.' },
];

export default function PoliciesPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary uppercase tracking-tighter italic">Policy Positions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic font-medium">
          Detailed research and actionable plans to restore our parishes through evidence-based leadership.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {policies.map((p) => {
          const Icon = p.icon;
          return (
            <Link key={p.slug} href={`/policies/${p.slug}`}>
              <Card className="h-full border-4 border-black hover:border-primary transition-all cursor-pointer group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] rounded-none">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 bg-primary text-white flex items-center justify-center group-hover:bg-black transition-colors border-2 border-black">
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-headline text-2xl uppercase tracking-tight">{p.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed italic">{p.desc}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="bg-zinc-50 dark:bg-zinc-900 p-8 border-4 border-dashed border-black text-center mt-12">
        <p className="text-muted-foreground italic max-w-2xl mx-auto">
          "Every policy we propose is backed by localized data and statutory reports. We don't guess; we evidence."
        </p>
      </div>
    </div>
  );
}
