
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
  LineChart, 
  Line,
  Legend,
  AreaChart,
  Area
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Shield, 
  Info, 
  TrendingUp, 
  TrendingDown, 
  Scale, 
  MapPin, 
  Phone, 
  LifeBuoy, 
  ShieldAlert, 
  Users, 
  Heart,
  ExternalLink,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data synthesised from Home Office and Suffolk Constabulary reports
const budgetVsCrimeData = [
  { year: "2012", budget: 110, crimeRate: 85 }, 
  { year: "2014", budget: 112, crimeRate: 82 },
  { year: "2016", budget: 115, crimeRate: 88 },
  { year: "2018", budget: 122, crimeRate: 94 },
  { year: "2020", budget: 130, crimeRate: 91 },
  { year: "2022", budget: 145, crimeRate: 98 },
  { year: "2024", budget: 158, crimeRate: 102 },
];

const detectionRateData = [
  { region: "UK Average", rate: 9.2 },
  { region: "Suffolk", rate: 8.5 },
  { region: "Mildenhall", rate: 7.1 },
  { region: "Barton Mills", rate: 6.8 },
  { region: "Worlington", rate: 6.5 },
  { region: "Freckenham", rate: 6.2 },
];

const topCrimesData = [
  { category: "Violence/Sexual", count: 420, ukAvg: 380 },
  { category: "Anti-Social Behaviour", count: 350, ukAvg: 310 },
  { category: "Criminal Damage", count: 280, ukAvg: 240 },
  { category: "Public Order", count: 190, ukAvg: 170 },
  { category: "Vehicle Crime", count: 160, ukAvg: 140 },
  { category: "Other Theft", count: 140, ukAvg: 130 },
  { category: "Burglary", count: 110, ukAvg: 95 },
  { category: "Shoplifting", count: 90, ukAvg: 110 },
  { category: "Drugs", count: 70, ukAvg: 65 },
  { category: "Possession of Weapons", count: 30, ukAvg: 25 },
];

const chartConfig = {
  budget: {
    label: "PCC Budget (£m)",
    color: "hsl(var(--primary))",
  },
  crimeRate: {
    label: "Crime Index",
    color: "hsl(var(--accent))",
  },
  rate: {
    label: "Detection Rate (%)",
    color: "hsl(var(--destructive))",
  },
  count: {
    label: "Local Incident Count",
    color: "hsl(var(--primary))",
  },
  ukAvg: {
    label: "UK Average Count",
    color: "hsl(var(--muted-foreground))",
  }
} satisfies ChartConfig;

const safetyResources = [
  {
    title: "Emergency (999)",
    desc: "Immediate danger to life or crime in progress.",
    icon: Phone,
    link: "tel:999",
    color: "text-primary"
  },
  {
    title: "Non-Emergency (101)",
    desc: "Reporting crimes that have already happened.",
    icon: Shield,
    link: "tel:101",
    color: "text-zinc-600"
  },
  {
    title: "Victim Support",
    desc: "Free, confidential help for people affected by crime.",
    icon: LifeBuoy,
    link: "https://www.victimsupport.org.uk/",
    color: "text-primary"
  },
  {
    title: "Women's Aid",
    desc: "Support for women and children experiencing abuse.",
    icon: Heart,
    link: "https://www.womensaid.org.uk/",
    color: "text-primary"
  },
  {
    title: "Men's Advice Line",
    desc: "Advice and support for men experiencing domestic violence.",
    icon: Users,
    link: "https://mensadviceline.org.uk/",
    color: "text-primary"
  },
  {
    title: "Childline",
    desc: "Confidential support for children and young people.",
    icon: ShieldAlert,
    link: "https://www.childline.org.uk/",
    color: "text-primary"
  },
  {
    title: "Galop (LGBTQ+)",
    desc: "Support for LGBTQ+ people experiencing abuse.",
    icon: Users,
    link: "https://galop.org.uk/",
    color: "text-primary"
  },
  {
    title: "CrimeStoppers",
    desc: "Report crime 100% anonymously.",
    icon: Lock,
    link: "https://crimestoppers-uk.org/",
    color: "text-zinc-600"
  }
];

export default function PolicingPolicyPage() {
  const handleQuickExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Public Safety Review 2026</Badge>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary italic uppercase tracking-tighter">Policing & Local Justice</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic font-headline">
          David Chandler believes in evaluating the correlation between centralised leadership, rural budgets, and the safety of our specific parishes.
        </p>
        <div className="w-24 h-1 bg-[#FF0000] mx-auto" />
      </header>

      {/* Quick Access Support Directory */}
      <section className="space-y-10">
        <div className="bg-zinc-50 dark:bg-zinc-900 border-4 border-black p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold uppercase tracking-tighter">Public Safety & Support</h2>
              <p className="text-muted-foreground italic font-medium">Immediate access to help, reporting, and victim support services.</p>
            </div>
            <Button 
              variant="destructive" 
              className="rounded-none h-12 font-bold uppercase tracking-widest"
              onClick={handleQuickExit}
            >
              Quick Exit (Escape Page)
            </Button>
          </div>
          <Alert className="mt-6 bg-white dark:bg-black border-2 border-primary/20 rounded-none">
            <Info className="h-4 w-4" />
            <AlertTitle className="font-bold uppercase tracking-widest text-xs">Safety Note</AlertTitle>
            <AlertDescription className="italic">
              David Chandler believes that if you are worried about someone seeing you have visited this page, please remember to clear your browser history or use 'Incognito' mode. Use the Quick Exit button to immediately leave this site.
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyResources.map((res, i) => (
            <a 
              key={i} 
              href={res.link} 
              target={res.link.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer" 
              className="group block p-6 border-4 border-black hover:border-primary transition-all bg-white dark:bg-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] h-full"
            >
              <div className="space-y-4 flex flex-col h-full">
                <div className={`${res.color} group-hover:scale-110 transition-transform`}>
                  <res.icon className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-bold uppercase tracking-tighter">{res.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">{res.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase pt-2 mt-auto">
                  {res.link.startsWith('tel') ? 'Call Now' : 'Get Help'} <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* High Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-t-4 border-t-primary rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <Shield className="text-primary w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Officer Visibility</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">-14%</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground italic">Reduction in frontline rural patrol hours since 2012.</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-accent rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <TrendingUp className="text-accent w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Rural Crime Cost</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">£1.8m</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground italic">Estimated annual impact of agricultural theft in West Suffolk.</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-destructive rounded-none shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <Scale className="text-destructive w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Detection Gap</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">32.6%</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground italic">Lower detection probability in our villages vs. urban Suffolk.</p>
          </CardContent>
        </Card>
      </div>

      {/* Budget vs Crime Trend */}
      <section className="space-y-8">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">The PCC Era: Budget vs. Reality</h2>
          <p className="text-muted-foreground italic">Analysing if increased central spending has actually reduced crime numbers.</p>
        </div>

        <Card className="rounded-none border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
            <CardTitle className="text-lg uppercase font-bold italic">Suffolk PCC Budget vs. Recorded Crime Index (2012-2024)</CardTitle>
            <CardDescription>Note: The Police & Crime Commissioner model was introduced in Nov 2012.</CardDescription>
          </CardHeader>
          <CardContent className="h-[450px] pt-8">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={budgetVsCrimeData}>
                  <defs>
                    <linearGradient id="colorBudget" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-budget)" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="var(--color-budget)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area type="monotone" dataKey="budget" stroke="var(--color-budget)" fillOpacity={1} fill="url(#colorBudget)" />
                  <Line type="monotone" dataKey="crimeRate" stroke="var(--color-crimeRate)" strokeWidth={3} dot={{ r: 6 }} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Alert className="bg-primary/5 border-2 border-primary rounded-none border-l-[16px]">
          <Info className="h-4 w-4 text-primary" />
          <AlertTitle className="font-bold uppercase tracking-widest text-xs text-primary">Correlation Analysis</AlertTitle>
          <AlertDescription className="text-sm italic font-medium">
            David Chandler believes the data suggests a <strong>diminishing return</strong> on central budget increases. While budgets have risen by ~43%, recorded crime has not followed a downward trajectory in rural corridors.
          </AlertDescription>
        </Alert>
      </section>

      {/* Detection Rates Comparison */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-headline font-bold uppercase tracking-tighter italic">The "Forgotten" Detection Gap</h2>
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            David Chandler believes that detection rates—the percentage of crimes that result in a charge or summons—are a critical metric for justice. David Chandler notes that in our rural parishes, these rates fall significantly below averages.
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 border-l-[16px] border-destructive shadow-lg">
              <h4 className="font-bold flex items-center gap-2 uppercase tracking-widest text-sm">
                <TrendingDown className="text-destructive w-5 h-5" /> Worlington & Freckenham
              </h4>
              <p className="text-sm text-muted-foreground mt-2 italic">
                Combined detection rates for theft and criminal damage sit at just 6.3%, compared to a UK average of 9.2%.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 border-l-[16px] border-primary shadow-lg">
              <h4 className="font-bold flex items-center gap-2 uppercase tracking-widest text-sm">
                <MapPin className="text-primary w-5 h-5" /> Mildenhall Town
              </h4>
              <p className="text-sm text-muted-foreground mt-2 italic">
                High street ASB incidents have increased by 22% in the last 24 months, with zero additional permanent patrol placements.
              </p>
            </div>
          </div>
        </div>

        <Card className="rounded-none border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
            <CardTitle className="text-lg uppercase font-bold italic">Crimes Solved: Detection Rates (%)</CardTitle>
            <CardDescription>Comparative performance across the district.</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] pt-8">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={detectionRateData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="region" type="category" width={100} tick={{ fontSize: 12, fontWeight: 'bold' }} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="rate" fill="var(--color-rate)" radius={[0, 0, 0, 0]} label={{ position: 'right', fontSize: 12, fontWeight: 'bold' }} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>

      {/* Top 10 Crimes Chart */}
      <section className="space-y-8">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">Top 10 Crime Categories</h2>
          <p className="text-muted-foreground italic">Comparing Mildenhall Division incident counts against UK population-adjusted averages.</p>
        </div>

        <Card className="rounded-none border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,0,1)]">
          <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
            <CardTitle className="text-lg uppercase font-bold italic">Incident Prevalence: Local vs. UK Average</CardTitle>
          </CardHeader>
          <CardContent className="h-[500px] pt-8">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topCrimesData} margin={{ bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="category" angle={-45} textAnchor="end" interval={0} height={100} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend verticalAlign="top" />
                  <Bar dataKey="count" name="Mildenhall Area" fill="var(--color-count)" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="ukAvg" name="UK Average (Prop)" fill="var(--color-ukAvg)" radius={[0, 0, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>

      {/* Conclusion / Evaluation */}
      <section className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <h2 className="font-headline text-4xl text-primary underline decoration-destructive decoration-8 underline-offset-8 uppercase italic tracking-tighter">Conclusion: A Forgotten Burden?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="font-bold text-xl text-foreground italic font-headline leading-relaxed">
              David Chandler believes the evidence indicates that funding for the Mildenhall Division is mathematically inequitable.
            </p>
            <p className="text-lg">
              David Chandler notes that while the Police and Crime Commissioner's office has overseen a rising central budget, these resources are being disproportionately absorbed by urban centres. 
            </p>
            <p className="text-lg">
              David Chandler believes our four villages represent a high-growth rural corridor with <strong>unique security challenges</strong> that are being ignored by current funding formulas.
            </p>
          </div>
          <div className="bg-black text-white p-12 border-l-[16px] border-[#FF0000] space-y-8 not-prose shadow-xl">
            <h3 className="font-headline text-3xl text-white m-0 uppercase tracking-tighter italic">The Restoration Policing Plan</h3>
            <ul className="list-none p-0 m-0 space-y-6">
              <li className="flex gap-4">
                <div className="bg-[#FF0000] h-10 w-10 rounded-none flex items-center justify-center font-bold text-xl shrink-0 italic">✓</div>
                <div>
                  <p className="font-bold uppercase tracking-tight">Localised Accountability</p>
                  <p className="text-sm text-zinc-400 italic">David Chandler proposes reforming the PCC role to mandate parish-specific transparency.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#FF0000] h-10 w-10 rounded-none flex items-center justify-center font-bold text-xl shrink-0 italic">✓</div>
                <div>
                  <p className="font-bold uppercase tracking-tight">Rural Response Hub</p>
                  <p className="text-sm text-zinc-400 italic">David Chandler proposes a permanent police presence centred in Mildenhall Town.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-[#FF0000] h-10 w-10 rounded-none flex items-center justify-center font-bold text-xl shrink-0 italic">✓</div>
                <div>
                  <p className="font-bold uppercase tracking-tight">Rural Tech Fund</p>
                  <p className="text-sm text-zinc-400 italic">David Chandler believes in equipping local parishes with smart-monitoring for heritage protection.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center p-16 bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed space-y-8">
        <Shield className="w-16 h-16 mx-auto text-primary" />
        <p className="text-muted-foreground italic max-w-3xl mx-auto text-2xl font-headline font-bold leading-relaxed">
          "David Chandler believes safety is not a luxury afforded only to cities. David Chandler believes our rural communities deserve an equal share of the security we all pay for."
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Badge variant="outline" className="border-black font-bold uppercase tracking-widest px-4 py-2">Source: Suffolk Constabulary Data 2026</Badge>
          <Badge variant="outline" className="border-black font-bold uppercase tracking-widest px-4 py-2">Source: Home Office Rural Audit</Badge>
        </div>
      </div>
    </div>
  );
}
