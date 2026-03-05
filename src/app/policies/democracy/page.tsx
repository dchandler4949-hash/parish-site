
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
  AreaChart,
  Area,
  LineChart,
  Line
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  Vote, 
  Users, 
  Scale, 
  Landmark, 
  TrendingDown, 
  MessageSquareOff, 
  ShieldAlert,
  ArrowRight,
  UserX,
  Wallet,
  AlertTriangle,
  FileWarning
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock Data: Voter Turnout (Local vs National)
const turnoutData = [
  { year: "2015", local: 32, national: 66 },
  { year: "2017", local: 34, national: 68 },
  { year: "2019", local: 31, national: 67 },
  { year: "2021", local: 28, national: 64 },
  { year: "2023", local: 26, national: 62 },
];

// Mock Data: Turnout by Income Decile (The Poverty Gap)
const incomeTurnoutData = [
  { decile: "Lowest 10%", turnout: 22 },
  { decile: "20%", turnout: 28 },
  { decile: "40%", turnout: 35 },
  { decile: "60%", turnout: 52 },
  { decile: "80%", turnout: 68 },
  { decile: "Top 10%", turnout: 78 },
];

const chartConfig = {
  local: { label: "Local Election Turnout (%)", color: "hsl(var(--primary))" },
  national: { label: "General Election Turnout (%)", color: "hsl(var(--muted-foreground))" },
  turnout: { label: "Voter Turnout (%)", color: "hsl(var(--primary))" },
  percentage: { label: "Uncontested Seats (%)", color: "hsl(var(--destructive))" },
  value: { label: "Percentage (%)" },
} satisfies ChartConfig;

export default function DemocracyPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Governance & Participation 2026</Badge>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary italic uppercase tracking-tighter">The Crisis of Representation</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes that when turnout drops below 30% and candidates are elected unopposed, the "disillusioned voter" is a rational response to party failure.
        </p>
        <div className="w-24 h-1 bg-[#FF0000] mx-auto" />
      </header>

      {/* Section 1: Poverty & Participation */}
      <section className="space-y-8">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">The Socio-Economic Participation Gap</h2>
          <p className="text-muted-foreground">David Chandler believes the evidence shows that financial insecurity is a direct barrier to democratic engagement.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Voter Turnout by Household Income Decile (%)</CardTitle>
              <CardDescription>The "poverty penalty" in the UK electoral system.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeTurnoutData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="decile" tick={{ fontSize: 12, fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="turnout" fill="var(--color-turnout)" radius={[0, 0, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold text-primary uppercase italic tracking-tighter">Survival Over Suffrage</h3>
            <p className="text-lg leading-relaxed font-medium">
              David Chandler believes that when a family in Mildenhall is struggling with the cost-of-living crisis, voting becomes a luxury of time they cannot afford. David Chandler notes that in lowest-income areas, turnout collapses to just **22%**.
            </p>
            <Alert className="bg-primary/5 border-2 border-primary rounded-none">
              <ShieldAlert className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-bold uppercase tracking-widest text-xs">Rational Disengagement</AlertTitle>
              <AlertDescription className="text-foreground italic">
                David Chandler believes voters are not "lazy" but rationally disengaged. If the system fails to improve their lives, the vote feels like a futile gesture.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Conclusion: Restoring the Mandate */}
      <section className="prose prose-lg dark:prose-invert max-w-none space-y-12">
        <h2 className="font-headline text-4xl text-primary underline decoration-[#FF0000] decoration-4 underline-offset-8 uppercase italic tracking-tighter">Restoring the Mandate: A New Democratic Contract</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="font-bold text-xl italic">
              David Chandler believes people must be given a reason to vote, not just a place to vote.
            </p>
            <p className="text-lg leading-relaxed">
              David Chandler believes that to re-engage the disillusioned, the candidate must prove the vote has direct impact. David Chandler's plan focuses on **direct empowerment**. David Chandler believes that if residents vote on a local budget, they should see the result in their village.
            </p>
          </div>
          <div className="bg-black text-white p-12 border-l-[16px] border-primary space-y-8 not-prose">
            <h3 className="font-headline text-3xl text-white m-0 uppercase tracking-tighter italic">The Restoration Plan</h3>
            <ul className="list-none p-0 m-0 space-y-8">
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">1</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Participatory Budgeting</p>
                  <p className="text-zinc-400">David Chandler proposes giving voters direct control over local infrastructure spending.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">2</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Mandatory Contestation Fund</p>
                  <p className="text-zinc-400">David Chandler proposes subsidising independent candidates to ensure no seat is left uncontested.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="h-12 w-12 bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 italic">3</div>
                <div>
                  <p className="font-bold text-xl uppercase tracking-tight">Proportional Localism</p>
                  <p className="text-zinc-400">David Chandler proposes reforming the local voting system so that every vote counts toward district-wide representation.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="text-center p-16 bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed space-y-8">
        <Vote className="w-16 h-16 mx-auto text-primary" />
        <p className="text-muted-foreground italic max-w-3xl mx-auto text-2xl font-headline font-bold">
          "David Chandler believes a representative elected by only 26% of the people is a warning sign, not a mandate. David Chandler believes democracy must be rebuilt from the doorstep up."
        </p>
      </div>
    </div>
  );
}
