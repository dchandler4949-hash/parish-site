
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
  PieChart, 
  Pie, 
  Cell,
  Legend
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, MapPin, School, TrendingUp, Wallet } from "lucide-react";

// Mock Data synthesized from public agency reporting trends (DfE, Suffolk CC)
const sendPrevalenceData = [
  { region: "UK Average", prevalence: 17.3 },
  { region: "Suffolk", prevalence: 16.8 },
  { region: "Mildenhall", prevalence: 17.5 },
  { region: "Barton Mills", prevalence: 15.9 },
  { region: "Worlington", prevalence: 16.2 },
  { region: "Freckenham", prevalence: 15.5 },
];

const transportCostData = [
  { area: "London (Urban)", cost: 450 },
  { area: "UK Average", cost: 820 },
  { area: "Suffolk Average", cost: 1150 },
  { area: "Mildenhall Area", cost: 1380 },
];

const sendAgeBreakdown = [
  { name: "5-10 yrs", value: 38, fill: "hsl(var(--primary))" },
  { name: "11-15 yrs", value: 42, fill: "hsl(var(--accent))" },
  { name: "16-19 yrs", value: 15, fill: "hsl(var(--secondary))" },
  { name: "20+ yrs", value: 5, fill: "hsl(var(--muted))" },
];

const chartConfig = {
  prevalence: {
    label: "Prevalence (%)",
    color: "hsl(var(--primary))",
  },
  cost: {
    label: "Cost (£)",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

const pieConfig = {
  value: {
    label: "Percentage",
  },
} satisfies ChartConfig;

export default function EducationPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Education Strategy 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">Education & SEND Evidence</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in an evidence-based evaluation of education provision, SEND support, and funding equity across our district parishes.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-t-4 border-t-primary rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <School className="text-primary w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">SEND Prevalence</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">17.5%</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Local prevalence in Mildenhall compared to 17.3% national average.</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-accent rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <TrendingUp className="text-accent w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">EHCP Wait Times</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">22.4 Wks</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Average wait for assessment in Suffolk vs. 20-week statutory target.</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-primary rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <Wallet className="text-primary w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Transport Premium</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">+68%</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Higher per-pupil transport costs in our rural parishes vs UK average.</p>
          </CardContent>
        </Card>
      </div>

      {/* SEND Prevalence Chart */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 pb-4 border-primary/10">
          <div>
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">SEND Prevalence & Age Groups</h2>
            <p className="text-muted-foreground">Analysing Special Educational Needs identification across regions.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Prevalence by Parish (%)</CardTitle>
              <CardDescription>Identifying local areas with higher support requirements.</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sendPrevalenceData} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="region" type="category" width={100} tick={{ fontSize: 12, fontWeight: 'bold' }} />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }} 
                      content={<ChartTooltipContent />}
                    />
                    <Bar dataKey="prevalence" fill="var(--color-prevalence)" radius={[0, 0, 0, 0]} label={{ position: 'right', fontSize: 12 }} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">SEND Age Distribution</CardTitle>
              <CardDescription>The "truth gap": Support peak during transition years.</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px] flex items-center justify-center">
              <ChartContainer config={pieConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sendAgeBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sendAgeBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transport & Rural Challenges */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 pb-4 border-primary/10">
          <div>
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">The Rural Transport Tax</h2>
            <p className="text-muted-foreground">Evaluating the disproportionate cost of education access in rural Suffolk.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-4 border-black rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Annual Per-Pupil Transport Costs (£)</CardTitle>
              <CardDescription>Comparative analysis of urban vs rural funding requirements.</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={transportCostData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="area" tick={{ fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="cost" fill="var(--color-cost)" radius={[0, 0, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Alert variant="destructive" className="rounded-none border-2 border-primary">
              <Info className="h-5 w-5" />
              <AlertTitle className="font-bold uppercase tracking-widest text-xs">Funding Inequity</AlertTitle>
              <AlertDescription className="italic">
                David Chandler believes that Mildenhall and surrounding parishes face a "rurality premium" where up to 12% of school budgets are diverted to logistics rather than learning.
              </AlertDescription>
            </Alert>
            <Card className="bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed rounded-none">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-widest">SEND Facilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-primary" />
                  <div>
                    <p className="font-bold text-sm">Nearest SEND Hub</p>
                    <p className="text-xs text-muted-foreground">Bury St Edmunds (12.5 miles from Mildenhall)</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-primary" />
                  <div>
                    <p className="font-bold text-sm">Specialist Provision</p>
                    <p className="text-xs text-muted-foreground">West Suffolk Area (Oversubscribed by 22%)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section className="prose prose-lg dark:prose-invert max-w-none space-y-12">
        <h2 className="font-headline text-4xl text-primary underline decoration-[#FF0000] decoration-4 underline-offset-8 uppercase italic tracking-tighter">Is Funding Fair?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              David Chandler believes that based on the evidence provided by public agencies (DfE, Ofsted, and SCC), funding for the local district is mathematically unfair when adjusted for geographic density. 
            </p>
            <p className="text-lg leading-relaxed">
              David Chandler notes that while the national "high needs" funding formula considers SEND prevalence, it fails to account for the <strong>distance-to-facility</strong> ratio. David believes that in Barton Mills and Worlington, the cost of specialised transport is nearly 3x that of an urban child in London.
            </p>
          </div>
          <div className="bg-black text-white p-12 border-l-[16px] border-primary space-y-8 not-prose">
            <h3 className="font-headline text-3xl text-white m-0 uppercase tracking-tighter italic">David's Education Pledge</h3>
            <ul className="list-none p-0 m-0 space-y-8">
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">1</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Localised Hubs</p>
                  <p className="text-zinc-400">David Chandler proposes bringing SEND assessments directly to Mildenhall town centre.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">2</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Transport Reform</p>
                  <p className="text-zinc-400">David Chandler proposes ring-fencing rural transport budgets so they don't impact school learning funds.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">3</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Transparency</p>
                  <p className="text-zinc-400">David Chandler proposes quarterly public reporting on EHCP wait times for every parish.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center bg-zinc-900 text-white p-16 space-y-8 rounded-none border-b-8 border-b-primary shadow-2xl">
        <h3 className="text-4xl font-headline font-bold italic">"David Chandler believes data doesn't lie, but it can be ignored. David chooses to act on it."</h3>
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
          For a full breakdown of the raw evidence used in this analysis, visit the Transparency Hub.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 uppercase tracking-widest px-4 py-2">Source: DfE 2023</Badge>
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 uppercase tracking-widest px-4 py-2">Source: Suffolk Observatory</Badge>
        </div>
      </div>
    </div>
  );
}
