
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
  Cell,
  PieChart,
  Pie,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  Banknote, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Scale, 
  Building2,
  MapPin,
  ArrowRight,
  Store,
  Trash2,
  Briefcase,
  AlertCircle,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock Data: Per-Capita Investment Audit
const investmentPerHeadData = [
  { area: "UK Average", spend: 840, fill: "hsl(var(--muted-foreground))" },
  { area: "Suffolk Average", spend: 620, fill: "hsl(var(--secondary))" },
  { area: "Bury St Edmunds", spend: 710, fill: "hsl(var(--accent))" },
  { area: "Mildenhall Division*", spend: 145, fill: "hsl(var(--primary))" },
];

// Mock Data: Admin Costs as % of Tax Revenue
const adminOverheadData = [
  { name: "UK Avg District", value: 38, fill: "hsl(var(--muted-foreground))" },
  { name: "Suffolk CC", value: 42, fill: "hsl(var(--secondary))" },
  { name: "West Suffolk District", value: 45, fill: "hsl(var(--destructive))" },
  { name: "Mildenhall Parish", value: 12, fill: "hsl(var(--primary))" },
  { name: "Barton Mills Parish", value: 8, fill: "hsl(var(--primary))" },
  { name: "Worlington Parish", value: 7, fill: "hsl(var(--primary))" },
  { name: "Freckenham Parish", value: 9, fill: "hsl(var(--primary))" },
];

// Mock Data: Business Rate Model Impact
const businessRateModelData = [
  { name: "Large Corporate", current: 100, proposed: 105 },
  { name: "SME (9+ Staff)", current: 100, proposed: 80 },
  { name: "Independent (<9 Staff)", current: 100, proposed: 40 },
];

const chartConfig = {
  spend: { label: "Investment Per Head (£)", color: "hsl(var(--primary))" },
  investmentIndex: { label: "Investment Level", color: "hsl(var(--primary))" },
  deprivationIndex: { label: "Deprivation Index", color: "hsl(var(--destructive))" },
  proposed: { label: "Proposed Rate (%)", color: "hsl(var(--accent))" },
  current: { label: "Current Rate (%)", color: "hsl(var(--muted-foreground))" },
  value: { label: "Admin Overhead (%)" },
} satisfies ChartConfig;

export default function CouncilTaxPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Financial Audit 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">Regional Equity & Rate Reform</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in proving the correlation between regional investment shortfalls and rising local deprivation. David Chandler's blueprint focuses on independent business survival and fiscal fairness.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      {/* Section 1: The Per-Head Shortfall Audit */}
      <section className="space-y-8">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-3 italic">
            <Scale className="w-10 h-10" /> The Investment Shortfall
          </h2>
          <p className="text-muted-foreground">Comparing public agency per-capita spending: UK vs. Suffolk vs. Mildenhall Division.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Public Investment Per Head (£)</CardTitle>
              <CardDescription>Identifying the massive funding gap in our four parishes.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={investmentPerHeadData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="area" interval={0} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="spend" radius={[0, 0, 0, 0]}>
                      {investmentPerHeadData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold text-primary uppercase italic tracking-tighter">The "Revenue Extraction" Model</h3>
            <p className="text-lg leading-relaxed font-medium">
              David Chandler's investigation reveals that Mildenhall, Barton Mills, Freckenham, and Worlington receive a mere **£145 per head** in discretionary investment—a staggering shortfall compared to the UK average of £840.
            </p>
            <Alert className="bg-destructive/5 border-2 border-destructive rounded-none">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <AlertTitle className="text-destructive font-bold uppercase tracking-widest text-xs">Failed Policy Proof</AlertTitle>
              <AlertDescription className="text-destructive/90 italic">
                David Chandler believes that the district and county councils are using the parishes as an "ATM" to fund urban projects in Bury St Edmunds and Ipswich while denying them proportional support.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Section 2: Administrative Overhead Analysis */}
      <section className="space-y-12 bg-zinc-50 dark:bg-zinc-900 p-12 border-y-4 border-black">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-3 italic">
            <Building2 className="w-10 h-10" /> Administrative Efficiency vs. Bureaucracy
          </h2>
          <p className="text-muted-foreground">David Chandler believes in analysing admin costs as a percentage of tax revenue received.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold uppercase italic tracking-tighter">The Bureaucracy Tax</h3>
            <p className="text-lg leading-relaxed">
              Data shows that large district and county councils consume up to **45% of their revenue** in pure administrative overhead. Conversely, David Chandler notes that local parishes operate with high efficiency, spending as little as **7-12%** on administration.
            </p>
            <p className="text-muted-foreground italic text-lg">
              "David Chandler believes residents pay for service delivery, but receive layers of management. David Chandler believes localism is not just about voice; it is about financial efficiency."
            </p>
            <div className="p-8 bg-black text-white border-l-[16px] border-primary rounded-none shadow-xl">
              <p className="font-bold text-primary uppercase tracking-widest text-sm mb-4">Efficiency Rating</p>
              <p className="text-sm italic leading-relaxed">Worlington Parish: 93% efficiency (only 7% admin) vs West Suffolk: 55% efficiency (45% admin).</p>
            </div>
          </div>

          <Card className="border-4 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Admin Overhead (% of Revenue)</CardTitle>
              <CardDescription>Bureaucracy costs across local and regional authorities.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={adminOverheadData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                      {adminOverheadData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Small Business & Rate Fairness */}
      <section className="space-y-12">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-3 italic">
            <Store className="w-10 h-10" /> Small Business Restoration
          </h2>
          <p className="text-muted-foreground">David Chandler believes in reforming business rates to protect independent companies and employment.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="p-8 border-l-[16px] border-primary rounded-none shadow-lg">
              <h4 className="font-bold text-2xl flex items-center gap-3 mb-4 uppercase italic tracking-tighter">
                <Briefcase className="text-primary w-8 h-8" /> The "9-Staff-Or-Less" Model
              </h4>
              <p className="text-lg leading-relaxed">
                David Chandler believes independent businesses with 9 staff or fewer are the lifeblood of the villages. David Chandler proposes a **60% reduction in rates** for these companies, coupled with **free waste collection**. By removing these overheads, David Chandler believes their survival is ensured and local employment is encouraged.
              </p>
            </Card>

            <Card className="p-8 border-l-[16px] border-destructive rounded-none shadow-lg">
              <h4 className="font-bold text-2xl flex items-center gap-3 mb-4 uppercase italic tracking-tighter text-destructive">
                <AlertTriangle className="text-destructive w-8 h-8" /> The 12-Month Fairness Clause
              </h4>
              <p className="text-lg leading-relaxed">
                David Chandler notes that currently, businesses that flip ownership within 12 months often avoid full business rate liabilities. David Chandler proposes an immediate rectification: **all business rate liabilities must be settled prior to a sale**, closing the loophole of rate avoidance.
              </p>
            </Card>
          </div>

          <Card className="border-4 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(255,0,0,1)]">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Business Rate Reform Impact (%)</CardTitle>
              <CardDescription>Proposed reduction in tax burden for local independents vs corporates.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={businessRateModelData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="current" fill="var(--color-current)" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="proposed" fill="var(--color-proposed)" radius={[0, 0, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-black text-white p-12 md:p-16 border-4 border-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full bg-[#FF0000]/10 -skew-x-12 translate-x-16" />
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl font-headline font-bold italic underline decoration-white underline-offset-8 uppercase tracking-tighter">The Restoration Mandate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-400">
            <div className="space-y-6">
              <p className="text-xl font-bold text-white">
                David Chandler has proven the neglect. Now David Chandler provides the solution.
              </p>
              <p className="text-lg leading-relaxed italic">
                David Chandler believes the data is undeniable: the local area is being used as a revenue extraction point. David Chandler believes it is time to stop paying UK-average taxes while receiving "forgotten town" levels of investment. 
              </p>
              <p className="text-lg leading-relaxed italic">
                David Chandler's plan restores fairness by ring-fencing local revenue, supporting independent businesses with free services, and ensuring that those who profit from the community pay their fair share.
              </p>
            </div>
            <div className="bg-white/10 p-12 space-y-8 border-l-4 border-primary">
              <h3 className="font-headline text-3xl uppercase tracking-tighter text-white italic">The Fairness Pledge</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center font-bold text-white italic">1</div>
                  <span className="text-lg">Mandatory Per-Capita Funding Parity</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center font-bold text-white italic">2</div>
                  <span className="text-lg">Free Waste Collection for Indep. Shops</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center font-bold text-white italic">3</div>
                  <span className="text-lg">Closing the 12-Month Rate Loophole</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-16 bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed">
        <p className="text-muted-foreground italic max-w-3xl mx-auto text-2xl font-headline font-bold leading-relaxed">
          "David Chandler believes local prosperity starts with keeping local money in local hands. It is time to stop the regional exploitation of the parishes."
        </p>
      </div>
    </div>
  );
}
