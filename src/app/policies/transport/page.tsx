
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
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Bus, 
  Clock, 
  AlertTriangle, 
  Landmark, 
  TrendingUp,
  History,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock Data representing the local transport split
const modalSplitData = [
  { area: "UK Average", car: 60, bus: 15, active: 25 },
  { area: "Suffolk", car: 72, bus: 8, active: 20 },
  { area: "Mildenhall Div", car: 84, bus: 4, active: 12 },
];

const educationTransportPenalty = [
  { area: "London/Urban", cost: 0 },
  { area: "Suffolk Avg", cost: 680 },
  { area: "Barton Mills", cost: 940 },
  { area: "Worlington", cost: 980 },
  { area: "Freckenham", cost: 1020 },
];

const chartConfig = {
  car: { label: "Car Users (%)", color: "hsl(var(--primary))" },
  bus: { label: "Bus Users (%)", color: "hsl(var(--accent))" },
  active: { label: "Cycle/Walk (%)", color: "hsl(142.1 76.2% 36.3%)" },
  cost: { label: "Annual Transport Cost (£)", color: "hsl(var(--destructive))" },
} satisfies ChartConfig;

export default function TransportPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Infrastructure Review 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">Transport & Connectivity</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in reclaiming our services: a battle for reliable, people-first public transport across Mildenhall and our surrounding villages.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      {/* Section 1: The Car Trap */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 pb-4 border-primary/10">
          <div>
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">The Rural Car Trap</h2>
            <p className="text-muted-foreground italic">Why our parishes are forced into 84% car dependency.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Transport Modal Split (%)</CardTitle>
              <CardDescription>Comparing car use vs public transport across regions.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={modalSplitData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="area" tick={{ fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="car" stackId="a" fill="var(--color-car)" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="bus" stackId="a" fill="var(--color-bus)" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="active" stackId="a" fill="var(--color-active)" radius={[0, 0, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border-4 border-black text-center shadow-lg">
                <Clock className="w-10 h-10 mx-auto mb-3 text-destructive" />
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Evening Service</p>
                <p className="text-4xl font-bold italic">5%</p>
              </div>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border-4 border-black text-center shadow-lg">
                <AlertTriangle className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sunday Service</p>
                <p className="text-4xl font-bold italic">0%</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed font-medium">
              David Chandler notes that in Barton Mills, Worlington, and Freckenham, the lack of evening and Sunday schedules makes public transport a non-option. David Chandler believes this isn't a choice; it's a <strong>forced car dependency</strong>.
            </p>
            <Alert className="bg-primary/5 border-2 border-primary rounded-none">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-bold uppercase tracking-widest text-xs">The Mobility Gap</AlertTitle>
              <AlertDescription className="text-foreground italic">
                David Chandler believes that without evening buses, young people are excluded from post-16 opportunities unless they have access to a car.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Section 2: Education Transport Penalty */}
      <section className="space-y-12 bg-zinc-50 dark:bg-zinc-900 p-12 border-y-4 border-black">
        <h2 className="text-4xl font-headline font-bold text-center uppercase tracking-tighter italic">The Education Transport Penalty</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <Card className="lg:col-span-2 border-4 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(255,0,0,1)]">
            <CardHeader className="bg-zinc-900 text-white border-b-2 border-primary">
              <CardTitle className="text-lg uppercase font-bold italic">Annual Post-16 Transport Costs (£)</CardTitle>
              <CardDescription>Identifying the financial burden on rural Suffolk families.</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px] pt-8 bg-white dark:bg-zinc-950">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={educationTransportPenalty} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="area" type="category" width={100} tick={{ fontSize: 12, fontWeight: 'bold' }} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="cost" fill="var(--color-cost)" radius={[0, 0, 0, 0]} label={{ position: 'right', fontSize: 12, fontWeight: 'bold' }} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <h4 className="text-2xl font-headline font-bold uppercase tracking-tight italic">A "Financial Tax" on Learning</h4>
            <p className="text-lg leading-relaxed italic">
              David Chandler notes that while urban students enjoy subsidised transit, our local 16-18 year olds are penalised for their geography. David Chandler believes a family in Freckenham should not pay over £1,000 annually just for college access.
            </p>
            <Button className="w-full h-14 rounded-none font-bold uppercase tracking-tighter text-lg bg-black hover:bg-primary" asChild>
              <Link href="/contact">Report Your Transport Costs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: The Bus Station Debate */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Landmark className="w-12 h-12" />
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter italic">Mildenhall Bus Station</h2>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl italic font-medium">
              David Chandler believes the current state of Mildenhall Bus Station is an example of <strong>misaligned priorities</strong>. 
            </p>
            <ul className="list-none p-0 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1">✓</div>
                <span><strong>Building Costs:</strong> David Chandler notes significant public funds were used on a design that ignored current shifts.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1">✓</div>
                <span><strong>The Profit Gap:</strong> David Chandler believes prioritising small retail units over passenger services is a betrayal of investment.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1">✓</div>
                <span><strong>The "Forgotten Child" Mentality:</strong> David Chandler believes West Suffolk focuses on larger towns as a priority, leaving our villages as an afterthought.</span>
              </li>
            </ul>
          </div>
        </div>
        <Card className="bg-black text-white p-12 border-8 border-primary space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rotate-45 translate-x-16 -translate-y-16" />
          <CardHeader className="p-0 border-b-4 border-primary pb-4">
            <CardTitle className="text-3xl font-headline font-bold italic uppercase tracking-tight text-white">David's Demand: Reopen & Reclaim</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-primary p-3 shrink-0">
                <History className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-zinc-300 italic">David Chandler proposes reopening the station as a true multimodal hub.</p>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary p-3 shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-zinc-300 italic">David Chandler proposes shared accountability for village connectivity.</p>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-primary p-3 shrink-0">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-zinc-300 italic">David Chandler believes in investing in evening and Sunday schedules.</p>
            </div>
            <div className="pt-6 border-t border-zinc-800">
              <p className="italic text-zinc-400 font-headline text-xl">
                "David Chandler believes we should fight for our services before we support closing them down. Mildenhall is not a secondary town."
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 space-y-10 border-t-4 border-primary/10">
        <h3 className="text-5xl font-headline font-bold uppercase tracking-tight italic">Fight for Your Services</h3>
        <p className="text-2xl text-muted-foreground max-w-3xl mx-auto italic font-medium leading-relaxed">
          David Chandler believes you shouldn't let our district be the "child no one wants." Join David Chandler's campaign to restore connectivity.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Button size="lg" className="rounded-none h-16 px-12 text-xl font-bold uppercase tracking-tighter bg-primary hover:bg-black shadow-xl">
            Support Transport Reform
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-none h-16 px-12 text-xl font-bold uppercase tracking-tighter border-4 border-black hover:border-primary">
            <Link href="/manifesto">View Full Manifesto</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
