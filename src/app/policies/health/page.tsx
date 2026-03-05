
"use client";

import Image from 'next/image';
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
  Pie
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Stethoscope, 
  HeartPulse, 
  ShieldAlert, 
  Scale, 
  Wallet, 
  Clock, 
  Car, 
  CheckCircle2,
  MessageCircle,
  Users,
  Shield,
  Heart,
  AlertCircle,
  Activity,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Mock Data: The Care Cost Gap (Current vs Proposed)
const careCostComparison = [
  { category: "Current Private Pay (Avg/Mo)", cost: 3800 },
  { category: "Proposed 2% Tax (Avg/Mo)", cost: 85 },
];

// Mock Data: Travel Penalty for Rural Carers
const travelCostData = [
  { area: "London (Urban)", milesPerShift: 8, fuelCost: 120 },
  { area: "Suffolk Avg", milesPerShift: 24, fuelCost: 380 },
  { area: "Mildenhall Div", milesPerShift: 42, fuelCost: 640 },
];

const chartConfig = {
  cost: { label: "Monthly Cost (£)", color: "hsl(var(--primary))" },
  fuelCost: { label: "Monthly Fuel Cost (£)", color: "hsl(var(--destructive))" },
  value: { label: "Budget Allocation (%)" },
} satisfies ChartConfig;

const ToothIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M7.1 2C8.1 2 9.1 2.5 9.7 3.3l1.3 1.7c.6.8 1.6 1 2.5.5.9-.5 2-.4 2.8.3.8.7 1.1 1.7.9 2.7-.2 1-.8 1.8-1.7 2.2-.9.4-1.5 1.3-1.5 2.3V15c0 1.1-.9 2-2 2h-1c-1.1 0-2-.9-2-2v-2c0-1-.6-1.9-1.5-2.3-.9-.4-1.5-1.2-1.7-2.2-.2-1 .1-2 .9-2.7.8-.7 1.9-.8 2.8-.3.9.5 1.9.3 2.5-.5l1.3-1.7c.6-.8 1.6-1.3 2.6-1.3" />
    <path d="M7 21c.6 0 1.1-.2 1.5-.6l3.5-3.4 3.5 3.4c.4.4.9.6 1.5.6 1.1 0 2-.9 2-2 0-.6-.2-1.1-.6-1.5L15 14H9l-3.4 3.5c-.4.4-.6.9-.6 1.5 0 1.1.9 2 2 2z" />
  </svg>
);

const supportResources = [
  {
    title: "GP & Primary Care",
    desc: "Find your local GP surgery and book appointments.",
    icon: Stethoscope,
    link: "https://www.nhs.uk/service-search/find-a-gp",
  },
  {
    title: "Dental Services",
    desc: "Access local NHS and private dental practitioners.",
    icon: ToothIcon,
    link: "https://www.nhs.uk/service-search/find-a-dentist",
  },
  {
    title: "Mental Health & Isolation",
    desc: "Support for those feeling alone or struggling with low mood.",
    icon: MessageCircle,
    link: "https://www.mind.org.uk/",
  },
  {
    title: "Men's Mental Health",
    desc: "Dedicated resources for men's wellness and support networks.",
    icon: Users,
    link: "https://www.thecalmzone.net/",
  },
  {
    title: "Military Support",
    desc: "Specialised mental health care for veterans and active service members.",
    icon: Shield,
    link: "https://www.combatstress.org.uk/",
  },
  {
    title: "Women's Safety & Abuse",
    desc: "Support and sanctuary for victims of domestic abuse.",
    icon: Heart,
    link: "https://www.refuge.org.uk/",
  },
  {
    title: "Emergency & Social Care",
    desc: "Statutory support and emergency healthcare access.",
    icon: AlertCircle,
    link: "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/",
  }
];

export default function HealthCarePolicyPage() {
  const healthHero = PlaceHolderImages.find(img => img.id === 'policy-health');

  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Healthcare Reform 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">A National Care Contract</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in abolishing the "postcode lottery" of care. David Chandler proposes nationalising care homes under the NHS, reforming social work, and ensuring dignity is free at the point of use.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[21/9] w-full border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,0,0,1)] overflow-hidden">
        <Image 
          src={healthHero?.imageUrl || "https://picsum.photos/seed/health/1200/600"} 
          alt="Healthcare and Support" 
          fill 
          className="object-cover"
          data-ai-hint="hospital healthcare"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center p-12">
          <div className="max-w-md space-y-4">
            <h2 className="text-4xl font-headline font-bold text-white uppercase italic">People-First Care</h2>
            <p className="text-zinc-300 italic">"David Chandler believes the health of the many should never be sacrificed for the profit of the few."</p>
          </div>
        </div>
      </div>

      {/* High-Level Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-t-4 border-t-primary shadow-lg rounded-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <Wallet className="text-primary w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Family Savings</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">£3,700/mo</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Average monthly saving for a family currently self-funding residential care.</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-accent shadow-lg rounded-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <Car className="text-accent w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Carer Travel</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">+5.3x</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Higher travel costs for frontline carers in the rural division vs London.</p>
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-destructive shadow-lg rounded-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <Scale className="text-destructive w-8 h-8" />
            <div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Council Tax Cut</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">-3%</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Immediate reduction in council tax by abolishing the care surcharge.</p>
          </CardContent>
        </Card>
      </div>

      {/* Directory Section */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter italic">Local Health & Support Directory</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            Immediate access to the resources residents need. If you are struggling with physical health, mental health, or safety, please use the links below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportResources.map((res, i) => (
            <a 
              key={i} 
              href={res.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block p-6 border-4 border-black hover:border-primary transition-all bg-white dark:bg-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,0,0,1)]"
            >
              <div className="space-y-4">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  {typeof res.icon === 'function' ? <res.icon /> : <res.icon className="w-8 h-8" />}
                </div>
                <h3 className="font-headline text-xl font-bold uppercase tracking-tighter">{res.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{res.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase pt-2">
                  Access Support <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Section 1: The Care Home Crisis & NHS Integration */}
      <section className="space-y-8">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">NHS Nationalised Care</h2>
          <p className="text-muted-foreground">Removing the profit motive from the end of life.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-headline font-bold text-primary uppercase italic tracking-tighter">Free at Point of Use</h3>
            <p className="text-lg leading-relaxed font-medium">
              David Chandler proposes a <strong>2% Income Tax hike</strong> to fund a fully nationalised care home organisation under the NHS. In return, all care—residential, nursing, and home care—becomes free at the point of need. 
            </p>
            <Alert className="bg-primary/5 border-2 border-primary rounded-none border-l-8">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <AlertTitle className="font-bold uppercase tracking-widest text-xs">Ending the "Asset Strip"</AlertTitle>
              <AlertDescription className="italic">
                David Chandler believes that families will no longer be forced to sell their homes to pay for care. The asset remains with the family, while the person receives professional NHS-standard dignity.
              </AlertDescription>
            </Alert>
          </div>

          <Card className="rounded-none border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Financial Realignment: Care Costs (£)</CardTitle>
              <CardDescription>Comparing current self-funding burdens vs the 2% tax model.</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={careCostComparison}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="category" hide />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="cost" fill="var(--color-cost)" radius={[0, 0, 0, 0]}>
                      {careCostComparison.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? "hsl(var(--destructive))" : "hsl(var(--primary))"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Rural Carer Travel Penalty */}
      <section className="space-y-8 bg-zinc-50 dark:bg-zinc-900 p-12 border-y-4 border-black">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter italic">Frontline Carers: The Travel Penalty</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
            David Chandler believes the current model where carers in the division spend more on fuel than their urban counterparts is unsustainable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="rounded-none border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,0,1)]">
            <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
              <CardTitle className="text-lg uppercase font-bold italic">Monthly Carer Fuel Costs (£)</CardTitle>
              <CardDescription>The financial cost of delivering rural home care.</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px] pt-8">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={travelCostData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="area" tick={{ fontWeight: 'bold' }} />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="fuelCost" fill="var(--color-fuelCost)" radius={[0, 0, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h4 className="font-headline text-2xl uppercase tracking-tighter italic flex items-center gap-3">
              <Clock className="text-primary w-8 h-8" /> Professional Alignment
            </h4>
            <p className="text-lg leading-relaxed">
              David Chandler proposes moving care workers under the NHS umbrella to align their pay, pensions, and conditions with the wider health service. David Chandler believes this ends "travel time" deductions or zero-hour exploitation. 
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion & Pledge */}
      <section className="bg-black text-white p-12 md:p-16 rounded-none border-4 border-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full bg-[#FF0000]/10 -skew-x-12 translate-x-16" />
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl font-headline font-bold italic underline decoration-white underline-offset-8 uppercase tracking-tighter">Conclusion: The Mandate for Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl font-bold">David Chandler believes the current system is a slow-motion failure.</p>
              <p className="text-zinc-400 leading-relaxed italic">
                David Chandler proposes nationalising care homes to remove the £5bn-a-year private profit leak. David Chandler believes that relocating social workers to GPs restores local trust and that his plan provides true structural integrity.
              </p>
            </div>
            <div className="bg-white/10 p-8 space-y-6 border-l-4 border-primary">
              <h3 className="font-headline text-2xl uppercase tracking-tighter text-white">The Care Pledge</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center font-bold italic text-white">1</div>
                  <span className="text-sm">Care Home Nationalisation (NHS)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center font-bold italic text-white">2</div>
                  <span className="text-sm">2% Income Tax for Free Care</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center font-bold italic text-white">3</div>
                  <span className="text-sm">Safeguarding Relocated to Police</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
