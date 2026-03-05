
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  Cell
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Home, 
  Info, 
  TrendingUp, 
  Users, 
  ShieldAlert, 
  Wheat, 
  Building2,
  ArrowRight,
  Phone,
  LifeBuoy,
  ShieldCheck,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock Data representing the local rental market impact (LQA/OHA influence)
const rentComparisonData = [
  { area: "UK Average", rent: 1220, color: "hsl(var(--muted-foreground))" },
  { area: "Suffolk Avg", rent: 980, color: "hsl(var(--secondary))" },
  { area: "Mildenhall", rent: 1650, color: "hsl(var(--primary))" },
  { area: "Barton Mills", rent: 1720, color: "hsl(var(--accent))" },
  { area: "Worlington", rent: 1580, color: "hsl(var(--primary))" },
  { area: "Freckenham", rent: 1520, color: "hsl(var(--primary))" },
];

const chartConfig = {
  rent: {
    label: "Avg Monthly Rent (£)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function HousingPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Housing & Planning 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">Housing for the Community</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in addressing the "military premium" in the local rental market and protecting agricultural heritage through smarter planning.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto" />
      </header>

      {/* The Rental Reality Section */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 pb-4 border-primary/10">
          <div>
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">The "USAF Factor" in Local Rents</h2>
            <p className="text-muted-foreground">Visualising how OHA/LQA allowances impact the four villages compared to the UK.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Average Monthly Rent Comparison (£)</CardTitle>
              <CardDescription>Identifying the geographic inflation caused by military housing demand.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rentComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="area" interval={0} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="rent" fill="var(--color-rent)" radius={[0, 0, 0, 0]}>
                      {rentComparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold text-primary uppercase italic tracking-tighter">The Affordability Crisis</h3>
            <p className="text-lg leading-relaxed font-medium">
              David Chandler believes that for local families, the rental market is effectively "locked" at a price floor dictated by U.S. government housing allowances. 
            </p>
            <Alert className="bg-primary/5 border-2 border-primary rounded-none">
              <ShieldAlert className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-bold uppercase tracking-widest text-xs">Market Distortion</AlertTitle>
              <AlertDescription className="text-foreground italic">
                David Chandler believes that when a house in Barton Mills commands £1,700/mo due to LQA, it becomes impossible for a local teacher or nurse to compete.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Strategic Alternatives: Feltwell vs West Row */}
      <section className="bg-black text-white p-12 md:p-16 border-4 border-primary space-y-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-3">
            <Building2 className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-headline font-bold uppercase italic tracking-tighter">The Feltwell Solution</h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-3xl font-headline italic">
            David Chandler proposes a strategic shift in military housing: building 1,500 dedicated homes on-base at <strong>RAF Feltwell</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-6">
            <div className="p-8 bg-white/5 border-2 border-white/10 space-y-4 rounded-none">
              <h4 className="font-bold text-primary flex items-center gap-2 uppercase tracking-widest text-sm">
                <ShieldAlert className="w-5 h-5" /> Enhanced Security
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                David Chandler believes that consolidating visiting personnel within a secure perimeter at RAF Feltwell reduces logistical risks for the U.S. Government.
              </p>
            </div>
            <div className="p-8 bg-white/5 border-2 border-white/10 space-y-4 rounded-none">
              <h4 className="font-bold text-primary flex items-center gap-2 uppercase tracking-widest text-sm">
                <Wheat className="w-5 h-5" /> Eliminating West Row Sprawl
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                David Chandler believes that by housing military families on-base, the district eliminates the need for sprawl, preserving land for <strong>localised food production</strong>.
              </p>
            </div>
          </div>

          <Card className="bg-zinc-900 border-primary border-4 text-white rounded-none shadow-2xl">
            <CardHeader className="border-b border-primary/20">
              <CardTitle className="text-lg uppercase font-bold italic">Policy Outcome: Feltwell vs West Row</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span>Agricultural Land Preservation</span>
                  <span className="text-primary">100%</span>
                </div>
                <div className="h-3 bg-zinc-800 rounded-none border border-zinc-700">
                  <div className="h-full bg-primary w-full" />
                </div>
              </div>
              <Button className="w-full h-14 font-bold rounded-none uppercase tracking-tighter text-lg bg-primary hover:bg-white hover:text-black" asChild>
                <Link href="/contact">Support the Feltwell Initiative</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Localist Policy Pledges */}
      <section className="space-y-12">
        <h2 className="font-headline text-4xl md:text-5xl text-primary underline decoration-black decoration-8 underline-offset-8 uppercase italic tracking-tighter">A Localist Housing Manifesto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 prose prose-xl dark:prose-invert max-w-none">
            <p className="font-bold italic text-lg">
              David Chandler believes housing should serve the community, not just the market.
            </p>
            <p className="text-lg leading-relaxed">
              David Chandler's policy focuses on <strong>proximity rights</strong>: ensuring that those born and raised in the villages have a priority path to local rents and purchases. 
            </p>
            <p className="text-lg leading-relaxed">
              David Chandler believes that by decoupling military housing from the local private sector, the district restores the natural market balance.
            </p>
          </div>
          <div className="bg-black text-white p-12 border-l-[16px] border-primary space-y-8 not-prose">
            <h3 className="font-headline text-3xl text-white m-0 uppercase tracking-tighter italic">The Housing Restoration Pledge</h3>
            <ul className="list-none p-0 m-0 space-y-8">
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">1</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">The Feltwell Mandate</p>
                  <p className="text-zinc-400">David Chandler proposes lobbying for on-base construction to relieve local rental pressure.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">2</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Social/Affordable Ringfencing</p>
                  <p className="text-zinc-400">David Chandler proposes guaranteeing 50% of new social housing for those with local ties.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">3</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Agri-Land Veto</p>
                  <p className="text-zinc-400">David Chandler proposes blocking developments that threaten local food security.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center p-16 bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed space-y-8">
        <Home className="w-16 h-16 mx-auto text-primary" />
        <p className="text-muted-foreground italic max-w-3xl mx-auto text-2xl font-headline font-bold leading-relaxed">
          "David Chandler believes that a community without its young people is a community without a future. David Chandler believes it must be possible for our children to live next door to their parents."
        </p>
      </div>
    </div>
  );
}
