
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
  Building,
  GitCompare,
  ShieldAlert,
} from "lucide-react";

// Mock Data: Devolution Model Efficiency
const modelEfficiencyData = [
  { model: "3-District Model (Current)", efficiency: 55, representation: 40 },
  { model: "Suffolk Unitary", efficiency: 72, representation: 30 },
  { model: "Norfolk & Suffolk Combined", efficiency: 85, representation: 15 },
  { model: "Localised Unitary (Our Area)", efficiency: 90, representation: 95 },
];

// Mock Data: Norfolk vs Suffolk Investment Metrics
const regionalComparisonData = [
  { metric: "Per-Capita Spend (£)", norfolk: 780, suffolk: 620 },
  { metric: "Transport Subsidy (%)", norfolk: 12, suffolk: 8 },
  { metric: "Health Access Score", norfolk: 68, suffolk: 61 },
  { metric: "PCC Election Cost/Vote (£)", norfolk: 2.10, suffolk: 2.45 },
];

const chartConfig = {
  efficiency: { label: "Efficiency Score", color: "hsl(var(--primary))" },
  representation: { label: "Local Representation Score", color: "hsl(var(--accent))" },
  norfolk: { label: "Norfolk", color: "hsl(var(--muted-foreground))" },
  suffolk: { label: "Suffolk", color: "hsl(var(--primary))" },
} satisfies ChartConfig;

export default function DevolutionPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Governance & Devolution 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">The Devolution Debate</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in evaluating the evidence: does a single authority for Norfolk and Suffolk serve the people, or is localised self-determination the only way to escape "forgotten town" status?
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      {/* Section 1: Norfolk vs Suffolk - The Regional Divide */}
      <section className="space-y-8">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-3 italic uppercase tracking-tight">
            <GitCompare className="w-10 h-10" /> Norfolk & Suffolk Comparison
          </h2>
          <p className="text-muted-foreground italic">David Chandler believes in analysing the comparative evidence of investment between neighbouring counties.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Regional Metric Comparison</CardTitle>
              <CardDescription>David Chandler notes that Norfolk often outperforms Suffolk in per-capita investment.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="metric" tick={{ fontSize: 11, fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="norfolk" fill="var(--color-norfolk)" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="suffolk" fill="var(--color-suffolk)" radius={[0, 0, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold text-primary uppercase italic tracking-tighter">The Unitary Trap</h3>
            <p className="text-lg leading-relaxed font-medium">
              David Chandler notes that advocates for a **combined Norfolk & Suffolk authority** promise efficiency, but at the cost of local representation. For Mildenhall and its villages, David Chandler believes this would mean decisions made in Norwich or Ipswich.
            </p>
            <Alert className="bg-primary/5 border-2 border-primary rounded-none">
              <ShieldAlert className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-bold uppercase tracking-widest text-xs">Evidence of Neglect</AlertTitle>
              <AlertDescription className="text-foreground italic">
                David Chandler believes that Suffolk's current model is already failing our area. Moving to a larger, more distant authority is an admission that local voices don't matter to central planners.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Section 2: Evaluating the Models */}
      <section className="space-y-12 bg-zinc-50 dark:bg-zinc-900 p-12 border-y-4 border-black">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter italic">Governance Model Evaluation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
            David Chandler believes in comparing efficiency vs. representation. Which model actually works for the taxpayer?
          </p>
        </div>

        <Card className="border-4 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(255,0,0,1)] overflow-hidden">
          <CardHeader className="bg-zinc-900 text-white border-b-2 border-primary">
            <CardTitle className="text-lg uppercase font-bold italic">Efficiency vs. Representation Scores</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px] pt-8 bg-white dark:bg-zinc-950">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={modelEfficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="model" tick={{ fontSize: 10, fontWeight: 'bold' }} />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="efficiency" fill="var(--color-efficiency)" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="representation" fill="var(--color-representation)" radius={[0, 0, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 border-l-[16px] border-destructive rounded-none shadow-lg">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Combined Authority</h4>
            <p className="text-sm italic">David Chandler believes this offers zero accountability for rural parishes.</p>
          </Card>
          <Card className="p-6 border-l-[16px] border-accent rounded-none shadow-lg">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Suffolk Unitary</h4>
            <p className="text-sm italic">David Chandler believes this still favours urban corridors over our division.</p>
          </Card>
          <Card className="p-6 border-l-[16px] border-primary rounded-none shadow-lg">
            <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Localised Unitary</h4>
            <p className="text-sm italic">David Chandler proposes this model for high efficiency and representation.</p>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="prose prose-lg dark:prose-invert max-w-none space-y-12">
        <h2 className="font-headline text-4xl text-primary underline decoration-[#FF0000] decoration-8 underline-offset-8 uppercase italic tracking-tighter">Conclusion: The Case for Localist Devolution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="font-bold text-xl italic leading-relaxed">
              David Chandler believes that devolution should be about returning power to the people, not consolidating it in a new regional office.
            </p>
            <p className="text-lg">
              David Chandler believes the evidence is clear: the larger the authority, the more likely the "forgotten town" phenomenon becomes permanent. David Chandler believes a single Norfolk & Suffolk authority would be the final nail in the coffin for localised self-determination.
            </p>
            <p className="text-lg">
              David Chandler advocates for a **localised unitary model** that empowers the Mildenhall division to manage its own budgets, planning, and services.
            </p>
          </div>
          <div className="bg-black text-white p-12 border-l-[16px] border-primary space-y-8 not-prose shadow-xl">
            <h3 className="font-headline text-3xl text-white m-0 uppercase tracking-tighter italic">The Restoration Devolution Pledge</h3>
            <ul className="list-none p-0 m-0 space-y-8">
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">1</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Reject "Super-Counties"</p>
                  <p className="text-zinc-400 italic">David Chandler proposes blocking any move to merge Norfolk and Suffolk into a single bureaucracy.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">2</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Unitary Autonomy</p>
                  <p className="text-zinc-400 italic">David Chandler proposes fighting for a localised unitary model that brings services directly into Mildenhall.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">3</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Abolish the PCC</p>
                  <p className="text-zinc-400 italic">David Chandler proposes redirecting PCC election and admin funds back into frontline rural policing.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center p-16 bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed space-y-8">
        <Building className="w-16 h-16 mx-auto text-primary" />
        <p className="text-muted-foreground italic max-w-3xl mx-auto text-2xl font-headline font-bold leading-relaxed">
          "David Chandler believes that efficiency without representation is just management. David Chandler believes our community wants to be represented, not managed."
        </p>
      </div>
    </div>
  );
}
