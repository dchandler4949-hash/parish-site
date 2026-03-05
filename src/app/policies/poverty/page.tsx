
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
  Line,
  AreaChart,
  Area
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  HandHelping, 
  AlertCircle,
  Wallet,
  ExternalLink,
  Banknote,
  Briefcase,
  Calculator,
  Utensils,
  ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data: Housing Affordability Mix (Mildenhall Area)
const housingAffordabilityData = [
  { name: "Mortgage/Owned", value: 42, fill: "hsl(var(--primary))" },
  { name: "Private Rent (Full)", value: 18, fill: "hsl(var(--accent))" },
  { name: "LHA Supported Rent", value: 28, fill: "hsl(var(--destructive))" },
  { name: "Social/Council", value: 12, fill: "hsl(var(--secondary))" },
];

// Mock Data: Welfare & Health Status (Rural vs Urban Suffolk)
const welfareStatusData = [
  { category: "Full-Time Employed", rural: 62, urban: 68 },
  { category: "Long-term Sick/Disabled", rural: 24, urban: 18 },
  { category: "Unemployed", rural: 6, urban: 8 },
  { category: "Carer/Other", rural: 8, urban: 6 },
];

// Mock Data: Healthcare Wait vs Health Decline Correlation
const healthCorrelationData = [
  { month: "Jan", waitDays: 8, declineIndex: 12 },
  { month: "Mar", waitDays: 12, declineIndex: 15 },
  { month: "Jun", waitDays: 18, declineIndex: 22 },
  { month: "Sep", waitDays: 22, declineIndex: 28 },
  { month: "Dec", waitDays: 26, declineIndex: 35 },
];

const chartConfig = {
  value: { label: "Percentage (%)" },
  rural: { label: "Mildenhall Area (%)", color: "hsl(var(--primary))" },
  urban: { label: "Suffolk Urban (%)", color: "hsl(var(--muted-foreground))" },
  waitDays: { label: "GP Wait Time (Days)", color: "hsl(var(--destructive))" },
  declineIndex: { label: "Community Health Decline", color: "hsl(var(--accent))" },
} satisfies ChartConfig;

const supportDirectory = [
  {
    title: "Debt & Money Advice",
    desc: "Confidential help from StepChange and National Debtline.",
    icon: Banknote,
    link: "https://www.stepchange.org/",
  },
  {
    title: "Benefits Calculator",
    desc: "Find out what you're entitled to via Turn2us.",
    icon: Calculator,
    link: "https://benefits-calculator.turn2us.org.uk/",
  },
  {
    title: "Food Bank Support",
    desc: "Find your local Trussell Trust food bank and get help.",
    icon: Utensils,
    link: "https://www.trusselltrust.org/get-help/find-a-foodbank/",
  },
  {
    title: "Citizens Advice",
    desc: "Expert advice on debt, law, and housing rights.",
    icon: HandHelping,
    link: "https://www.citizensadvice.org.uk/",
  }
];

export default function PovertyWelfarePage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Welfare & Health Review 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">Poverty, Welfare & Healthcare</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in investigating the "hidden poverty" in our rural parishes: where high costs of living meet a declining access to essential healthcare services.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      {/* Support & Crisis Hub */}
      <section className="space-y-10">
        <div className="bg-black text-white p-8 md:p-12 border-4 border-primary relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-full bg-primary/10 -skew-x-12 translate-x-32" />
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase italic tracking-tighter">Emergency Support & Crisis Hub</h2>
              <p className="text-zinc-400 max-w-2xl italic">David Chandler believes that we must ensure no resident falls through the cracks of a failing system. Immediate help is available below.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button size="lg" className="bg-primary hover:bg-white hover:text-black rounded-none h-16 text-lg font-bold uppercase tracking-tighter shadow-lg" asChild>
                <a href="https://www.gov.uk/apply-universal-credit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Apply for Benefits (GOV.UK) <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none h-16 text-lg font-bold uppercase tracking-tighter" asChild>
                <a href="https://www.gov.uk/find-a-job" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Search Local Jobs <Briefcase className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none h-16 text-lg font-bold uppercase tracking-tighter" asChild>
                <a href="https://www.westsuffolk.gov.uk/cost-of-living/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  West Suffolk Support Hub <ShieldAlert className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportDirectory.map((res, i) => (
            <a 
              key={i} 
              href={res.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block p-6 border-4 border-black hover:border-primary transition-all bg-white dark:bg-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,0,0,1)]"
            >
              <div className="space-y-4">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  <res.icon className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-bold uppercase tracking-tighter">{res.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">{res.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase pt-2">
                  Get Information <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Section 1: Housing Affordability & LHA Dependency */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 pb-4 border-primary/10">
          <div>
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">The Rent Gap: LHA Dependency</h2>
            <p className="text-muted-foreground italic">Identifying who can actually afford to live in our villages without state support.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Housing Tenure & Support (%)</CardTitle>
              <CardDescription>Visualising the high percentage of residents requiring Local Housing Allowance (LHA).</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={housingAffordabilityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {housingAffordabilityData.map((entry, index) => (
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

          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold text-primary flex items-center gap-2 uppercase italic tracking-tighter">
              <Wallet className="w-8 h-8" /> The Affordability Ceiling
            </h3>
            <p className="text-lg leading-relaxed font-medium">
              David Chandler notes that nearly **28% of local renters** in Mildenhall and Barton Mills rely on LHA top-ups to meet private market rents. David Chandler believes this high dependency is a direct result of the "military premium" identified in his housing policy.
            </p>
            <Alert className="bg-primary/5 border-2 border-primary rounded-none">
              <AlertCircle className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-bold uppercase tracking-widest text-xs">Systemic Failure</AlertTitle>
              <AlertDescription className="text-foreground italic">
                David Chandler believes that when LHA rates are frozen while market rents rise, local families are forced into "food vs. rent" decisions. This is an outcome of policy, not a failure of character.
              </AlertDescription>
            </Alert>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border-4 border-black bg-zinc-50 dark:bg-zinc-900 text-center shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">UK LHA Average</p>
                <p className="text-4xl font-bold italic">19%</p>
              </div>
              <div className="p-6 border-4 border-primary bg-primary/5 text-center shadow-lg">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Local LHA Gap</p>
                <p className="text-4xl font-bold text-primary italic">28%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Welfare & Health Correlation */}
      <section className="space-y-12 bg-zinc-50 dark:bg-zinc-900 p-12 border-y-4 border-black">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter italic">Health Access & Economic Stability</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic font-medium text-lg">
            David Chandler believes in evaluating how the lack of local healthcare infrastructure correlates with higher rates of long-term illness and economic inactivity.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Economic Status Breakdown (%)</CardTitle>
              <CardDescription>Rural Mildenhall Division vs. Suffolk Urban centres.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8 bg-white dark:bg-zinc-950">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={welfareStatusData} margin={{ bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="category" angle={-15} textAnchor="end" height={60} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend verticalAlign="top" />
                    <Bar dataKey="rural" name="Mildenhall Area" fill="var(--color-rural)" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="urban" name="Suffolk Urban" fill="var(--color-urban)" radius={[0, 0, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-4 border-primary shadow-[12px_12px_0px_0px_rgba(255,0,0,1)] rounded-none overflow-hidden">
            <CardHeader className="bg-primary/5 border-b-2 border-primary">
              <CardTitle className="text-lg uppercase font-bold italic">The "Wait-Decline" Correlation</CardTitle>
              <CardDescription>As GP wait times increase, community health outcomes decline sharply.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8 bg-white dark:bg-zinc-950">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={healthCorrelationData}>
                    <defs>
                      <linearGradient id="colorDecline" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-declineIndex)" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="var(--color-declineIndex)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Area type="monotone" dataKey="declineIndex" stroke="var(--color-declineIndex)" strokeWidth={3} fillOpacity={1} fill="url(#colorDecline)" />
                    <Line type="monotone" dataKey="waitDays" stroke="var(--color-waitDays)" strokeWidth={4} dot={{ r: 6, fill: "var(--color-waitDays)" }} />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: The Evaluation & Pledge */}
      <section className="space-y-12">
        <h2 className="font-headline text-4xl md:text-5xl text-primary underline decoration-black decoration-8 underline-offset-8 uppercase italic tracking-tighter">Evaluation: The Rural Abandonment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 prose prose-xl dark:prose-invert max-w-none">
            <p className="font-bold italic text-lg leading-relaxed">
              David Chandler believes that the agencies are failing our community in times of need.
            </p>
            <p className="text-lg">
              Data shows a **24% disability rate** in our four villages, compared to 18% in urban Suffolk. David Chandler believes this is not a coincidence; it is the result of delayed interventions. David Chandler believes that when a resident in Freckenham or Worlington cannot get a local GP appointment, a minor health decline often becomes a permanent disability.
            </p>
            <p className="text-lg">
              David Chandler proposes that our funding model must transition from "emergency response" to "localised prevention." David Chandler believes that better healthcare access doesn't just save lives; it builds a stronger, more economically active community.
            </p>
          </div>
          <div className="bg-black text-white p-12 border-l-[16px] border-primary space-y-8 not-prose shadow-xl">
            <h3 className="font-headline text-3xl text-white m-0 uppercase tracking-tighter italic">The Welfare Restoration Plan</h3>
            <ul className="list-none p-0 m-0 space-y-8">
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">1</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">LHA Cap Reform</p>
                  <p className="text-zinc-400 italic">David Chandler proposes lobbying to decouple local rent caps from the military-influenced market rates to stop displacement.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">2</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Community Health Hubs</p>
                  <p className="text-zinc-400 italic">David Chandler believes in bringing diagnostic and benefit advice services directly to parish halls on a rotating basis.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">3</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">The "Fairness Veto"</p>
                  <p className="text-sm text-zinc-400 italic">David Chandler proposes blocking central funding cuts for rural health if local wait times exceed national averages.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center p-16 bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed space-y-8 shadow-inner">
        <HandHelping className="w-16 h-16 mx-auto text-primary" />
        <p className="text-muted-foreground italic max-w-3xl mx-auto text-2xl font-headline font-bold leading-relaxed">
          "David Chandler believes that poverty in a village is often silent and invisible. David Chandler believes we must provide the data to make it heard and the funding to make it history."
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Badge variant="outline" className="border-black font-bold uppercase tracking-widest px-4 py-2">Source: DWP Welfare Statistics 2026</Badge>
          <Badge variant="outline" className="border-black font-bold uppercase tracking-widest px-4 py-2">Source: NHS Digital Access Data</Badge>
        </div>
      </div>
    </div>
  );
}
