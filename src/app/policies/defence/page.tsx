
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
  AreaChart,
  Area,
  Line
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  ShieldCheck, 
  Hammer, 
  TrendingDown, 
  Banknote, 
  Users, 
  AlertTriangle, 
  Info,
  ShieldAlert,
  ArrowRight,
  Crosshair,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock Data: Frontline vs Administration Ratio
const personnelMixData = [
  { year: "2010", frontline: 180, admin: 85 },
  { year: "2013", frontline: 160, admin: 82 },
  { year: "2016", frontline: 150, admin: 88 },
  { year: "2019", frontline: 145, admin: 92 },
  { year: "2022", frontline: 138, admin: 95 },
  { year: "2024", frontline: 132, admin: 98 },
];

// Mock Data: Procurement Waste (Estimated overspend in £bn)
const procurementWasteData = [
  { project: "Ajax Armoured Vehicles", overspend: 4.2, delayYears: 10 },
  { project: "Type 45 Destroyers", overspend: 1.8, delayYears: 6 },
  { project: "Carrier Strike Capability", overspend: 3.5, delayYears: 8 },
  { project: "E-7 Wedgetail", overspend: 0.9, delayYears: 4 },
  { project: "Morpheus Comms", overspend: 1.2, delayYears: 7 },
];

const chartConfig = {
  frontline: { label: "Frontline Personnel (k)", color: "hsl(var(--primary))" },
  admin: { label: "Admin/Civil Service (k)", color: "hsl(var(--muted-foreground))" },
  overspend: { label: "Overspend (£bn)", color: "hsl(var(--destructive))" },
  delayYears: { label: "Delay (Years)", color: "hsl(var(--accent))" },
  actual: { label: "Recruitment % of Target", color: "hsl(var(--primary))" },
} satisfies ChartConfig;

export default function DefencePolicyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">National Security Audit 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">Defence & Procurement Audit</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes that investigating the "administrative bloat" in the military is vital: Why billions in procurement waste and decades of under-supporting the frontline have left the UK vulnerable.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      {/* High-Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-t-4 border-t-primary rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <Users className="text-primary w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Frontline Decline</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">-26%</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Reduction in active frontline personnel numbers since 2010.</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-destructive rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <Banknote className="text-destructive w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Procurement Waste</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">£15bn+</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Estimated cumulative overspend on failed or delayed MoD projects.</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-accent rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <Target className="text-accent w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Recruitment Gap</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">-22%</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Shortfall in Army recruitment targets for the current cycle.</p>
          </CardContent>
        </Card>
      </div>

      {/* Section 1: The Admin vs Frontline Imbalance */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 pb-4 border-primary/10">
          <div>
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">The Administrative Bloat</h2>
            <p className="text-muted-foreground">Evidence of personnel resources shifting from active duty to civil service management.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Personnel Mix Trends (Thousands)</CardTitle>
              <CardDescription>Frontline numbers are falling while management/civil service roles remain steady or rise.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={personnelMixData}>
                    <defs>
                      <linearGradient id="colorFrontline" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-frontline)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--color-frontline)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Area type="monotone" dataKey="frontline" name="Frontline Personnel" stroke="var(--color-frontline)" fillOpacity={1} fill="url(#colorFrontline)" />
                    <Line type="monotone" dataKey="admin" name="MoD Admin/Civil Service" stroke="var(--color-admin)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold text-primary flex items-center gap-2 uppercase italic tracking-tighter">
              <Hammer className="w-8 h-8" /> Hollowed-Out Forces
            </h3>
            <p className="text-lg leading-relaxed font-medium">
              David Chandler believes that the UK is increasingly a military of "managers over marksmen." Since 2010, active frontline strength has been sacrificed to preserve administrative layers in Whitehall. This shift directly correlates with the equipment failures that make joining the military less attractive to the next generation.
            </p>
            <Alert className="bg-primary/5 border-2 border-primary rounded-none">
              <ShieldAlert className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-bold uppercase tracking-widest text-xs">Capability Warning</AlertTitle>
              <AlertDescription className="text-foreground italic">
                David Chandler believes a military that cannot properly equip its personnel is a military that cannot retain them. The failure to support the frontline with the "right tools at the right time" is the single greatest threat to recruitment.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Section 2: Procurement Disasters */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter italic">The Procurement Profit Sink</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic font-medium">
            David Chandler believes that billions are being siphoned away into failed contracts and technical delays, leaving frontline personnel with obsolete or dangerous equipment.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Major Project Overspends (£bn)</CardTitle>
              <CardDescription>Identifying the massive financial leaks in current military infrastructure.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={procurementWasteData} margin={{ bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="project" angle={-15} textAnchor="end" height={60} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="overspend" name="Overspend (£bn)" fill="var(--color-overspend)" radius={[0, 0, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="bg-black text-white p-8 border-l-[16px] border-primary space-y-6">
              <h4 className="font-headline text-2xl uppercase tracking-tighter italic">The "Ajax" Warning</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                The Ajax armoured vehicle programme is a textbook case of procurement failure. Over **£4bn spent**, a decade of delays, and vehicles that initially caused hearing loss and vibration injuries to the very personnel they were meant to protect.
              </p>
              <Separator className="bg-zinc-800" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase font-bold text-primary">Status</p>
                  <p className="text-sm font-bold">10 Years Delayed</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-primary">Cost Leak</p>
                  <p className="text-sm font-bold">£4.2bn and counting</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "David Chandler believes the UK cannot ask its citizens to fight for their country when the government cannot even manage a basic vehicle contract without bankrupting the taxpayer and endangering the soldier."
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Capability Gap & The Enlistment Debate */}
      <section className="bg-zinc-50 dark:bg-zinc-900 p-12 border-4 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-32" />
        <div className="relative z-10 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-headline font-bold uppercase italic tracking-tighter">Defence of the UK vs. Foreign Wars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              David Chandler believes in analysing the capability to defend against aggression and the public's appetite for domestic vs. overseas mobilisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="font-bold text-xl flex items-center gap-2">
                <ShieldCheck className="text-primary w-6 h-6" /> Home Defence Capability
              </h4>
              <p className="text-sm leading-relaxed">
                David Chandler notes that while the UK maintains high-tech "tier 1" capabilities, our mass—the ability to sustain a domestic defence against a major aggressive nation—is at its lowest point in a century. 
              </p>
              <div className="p-6 border-2 border-primary bg-white dark:bg-black">
                <p className="font-bold text-sm uppercase tracking-widest mb-2">The Conscription Question</p>
                <p className="text-sm italic">
                  Polls indicate that **only 12% of people** would support mandatory enlistment for overseas conflicts. However, support for a **Domestic Defence Volunteer Force** rises to 64% if the threat is strictly to UK soil.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-xl flex items-center gap-2">
                <Crosshair className="text-primary w-6 h-6" /> Support the Troops, Audit the Cost
              </h4>
              <p className="text-sm leading-relaxed">
                David Chandler's position is clear: he is 100% supportive of armed forces personnel. David's fight is with the **contractors and bureaucrats** who profit from delays while soldiers live in substandard housing and use unreliable equipment.
              </p>
              <ul className="list-none p-0 m-0 space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center font-bold text-white">✓</div>
                  <span className="text-sm font-bold">Abolish the 12-month sale loophole for contractors.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center font-bold text-white">✓</div>
                  <span className="text-sm font-bold">Mandatory pay parity for frontline service.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center font-bold text-white">✓</div>
                  <span className="text-sm font-bold">Independent "Waste Auditor" for every MoD contract over £100m.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Pledge */}
      <section className="bg-black text-white p-12 md:p-16 border-4 border-primary relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF0000]/10 rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl font-headline font-bold italic underline decoration-white underline-offset-8 uppercase tracking-tighter">Conclusion: The Mandate for Defence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl font-bold">David Chandler believes the UK is over-stretched and under-supported.</p>
              <p className="text-zinc-400 leading-relaxed italic">
                "David Chandler believes that the armed forces are currently a revenue source for private contractors. David Chandler believes the UK must reclaim its security by auditing every penny, supporting every soldier, and focusing limited resources on the primary duty of any government: The Defence of the Home Soil."
              </p>
            </div>
            <div className="bg-white/10 p-8 space-y-6 border-l-4 border-primary">
              <h3 className="font-headline text-2xl uppercase tracking-tighter text-white">The Defence Restoration Pledge</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#FF0000] flex items-center justify-center font-bold text-white italic">1</div>
                  <span className="text-sm">Frontline First: Cut Whitehall Admin by 20%</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#FF0000] flex items-center justify-center font-bold text-white italic">2</div>
                  <span className="text-sm">Contractor Accountability: Fixed-price OR Termination</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#FF0000] flex items-center justify-center font-bold text-white italic">3</div>
                  <span className="text-sm">Personnel Dignity: Nationalise Base Housing maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-12 bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed">
        <ShieldCheck className="w-16 h-16 mx-auto text-primary mb-4" />
        <p className="text-muted-foreground italic max-w-2xl mx-auto text-xl font-headline">
          "David Chandler believes that a nation that cannot manage its own procurement cannot expect its citizens to trust its command. David Chandler believes in supporting the frontline by auditing the boardrooms."
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Badge variant="outline" className="border-black font-bold uppercase tracking-widest px-4 py-2">Source: NAO MoD Equipment Plan Audit</Badge>
          <Badge variant="outline" className="border-black font-bold uppercase tracking-widest px-4 py-2">Source: House of Commons Defence Committee</Badge>
        </div>
      </div>
    </div>
  );
}
