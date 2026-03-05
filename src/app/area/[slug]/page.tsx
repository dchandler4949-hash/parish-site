
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Landmark, Users, TrendingUp } from 'lucide-react';

const parishData: Record<string, { name: string; description: string; issues: string[] }> = {
  'mildenhall-high-town': {
    name: 'Mildenhall High Town',
    description: 'The historic heart of our district, Mildenhall High Town is a vibrant center for commerce and community life.',
    issues: ['High street revitalization', 'Car parking infrastructure', 'Preserving market town heritage']
  },
  'barton-mills': {
    name: 'Barton Mills',
    description: 'A picturesque parish with a strong sense of community, Barton Mills balances rural charm with modern accessibility.',
    issues: ['A11 sound mitigation', 'Road safety improvements', 'Protection of green spaces']
  },
  'worlington': {
    name: 'Worlington',
    description: 'Worlington is a dedicated rural community committed to preserving its unique character and natural surroundings.',
    issues: ['Broadband connectivity', 'Sustainable local development', 'Public transport frequency']
  },
  'freckenham': {
    name: 'Freckenham',
    description: 'A small but active parish known for its community spirit and commitment to environmental stewardship.',
    issues: ['Water management & drainage', 'Community hall upgrades', 'Wildlife preservation']
  }
};

export default async function ParishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = parishData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/area" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Map
        </Link>
      </Button>

      <header className="space-y-4">
        <h1 className="text-5xl font-headline font-bold text-primary">{data.name}</h1>
        <div className="w-24 h-1 bg-[#FF0000]" />
        <p className="text-xl text-muted-foreground leading-relaxed">
          {data.description}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border space-y-4">
          <Landmark className="w-8 h-8 text-primary" />
          <h3 className="font-bold text-lg">Heritage</h3>
          <p className="text-sm text-muted-foreground">Protecting local landmarks and historical architecture within the parish.</p>
        </div>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border space-y-4">
          <Users className="w-8 h-8 text-primary" />
          <h3 className="font-bold text-lg">Community</h3>
          <p className="text-sm text-muted-foreground">Supporting local hubs, events, and volunteer organizations.</p>
        </div>
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border space-y-4">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h3 className="font-bold text-lg">Growth</h3>
          <p className="text-sm text-muted-foreground">Ensuring sustainable economic development and infrastructure readiness.</p>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-headline font-bold underline decoration-[#FF0000] decoration-4 underline-offset-8">
          Local Priorities
        </h2>
        <ul className="space-y-4 list-disc pl-5">
          {data.issues.map((issue, i) => (
            <li key={i} className="text-lg font-medium">{issue}</li>
          ))}
        </ul>
      </section>

      <div className="border-t pt-12 text-center space-y-6">
        <h3 className="text-2xl font-headline font-bold italic">Have something to say about {data.name}?</h3>
        <Button size="lg" asChild className="rounded-none h-14 px-10 text-lg font-bold">
          <Link href="/contact">Share Your Local Concerns</Link>
        </Button>
      </div>
    </div>
  );
}
