
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Leaf, 
  Sun, 
  Train, 
  Wheat, 
  Trees, 
  Info,
  History,
} from "lucide-react";
import { cn } from "@/lib/utils";

const dividendData = [
  { name: "Bill Reduction (Direct)", value: 50, fill: "hsl(var(--primary))" },
  { name: "Gov Investment Refund", value: 25, fill: "hsl(var(--accent))" },
  { name: "Rural Transport", value: 10, fill: "hsl(var(--secondary))" },
  { name: "Nature & Trees (Local)", value: 5, fill: "hsl(34.9 98.6% 49.8%)" },
  { name: "Cycle Infrastructure", value: 5, fill: "hsl(142.1 76.2% 36.3%)" },
  { name: "16-18 Education Fund", value: 5, fill: "hsl(221.2 83.2% 53.3%)" },
];

const landUseComparison = [
  { category: "Current Solar (Agri Land)", value: 0.1, color: "hsl(var(--primary))" },
  { category: "Required Solar (Agri Land)", value: 0.5, color: "hsl(var(--accent))" },
  { category: "Proposed Solar (Rooftops)", value: 1.2, color: "hsl(142.1 76.2% 36.3%)" },
];

const chartConfig = {
  value: {
    label: "Allocation (%)",
  },
} satisfies ChartConfig;

export default function EnvironmentPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">Environment & Land Strategy 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">Protecting Land, Powering Homes</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in a blueprint for sustainable growth that prioritises food security and localised energy production.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      {/* Section 1: Food vs Solar */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <Wheat className="w-10 h-10" />
            <h2 className="text-4xl font-headline font-bold uppercase tracking-tight italic">Food Production First</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            David Chandler believes that solar farms on productive agricultural land are a sacrifice the district shouldn't have to make. David Chandler believes local farms are the backbone of food security. 
          </p>
          <p className="text-lg leading-relaxed font-medium">
            David Chandler proposes a <strong>universal rooftop mandate</strong>: shifting the focus from industrial solar parks to rooftops, funded by central government.
          </p>
          <Alert className="bg-primary/5 border-2 border-primary rounded-none">
            <Info className="h-5 w-5 text-primary" />
            <AlertTitle className="font-bold uppercase tracking-widest text-xs">The Goal</AlertTitle>
            <AlertDescription className="italic">
              David Chandler believes in increasing domestic energy production without sacrificing a single acre of high-yield agricultural soil.
            </AlertDescription>
          </Alert>
        </div>
        <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-none">
          <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2 border-black">
            <CardTitle className="text-lg uppercase font-bold italic">Renewable Energy Potential (GW Equivalent)</CardTitle>
            <CardDescription>Rooftops offer significantly higher capacity than current deployments.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-8">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={landUseComparison}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="category" hide />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-primary)" radius={[0, 0, 0, 0]}>
                    {landUseComparison.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: The Dividend Model */}
      <section className="space-y-12 bg-zinc-50 dark:bg-zinc-900 p-12 border-y-4 border-black">
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-2">
            <Sun className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-headline font-bold uppercase tracking-tighter italic">The 6-Way Solar Dividend</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
            David Chandler proposes distributing the energy created by rooftop solar back into the community and government.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px]">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dividendData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dividendData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend layout="vertical" align="right" verticalAlign="middle" />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Sun, title: "50% Bill Reduction", desc: "Directly credited to the property owner's supplier.", color: "text-primary" },
              { icon: History, title: "25% Gov Refund", desc: "Repaying the central fund for initial setup costs.", color: "text-accent" },
              { icon: Train, title: "10% Rural Transit", desc: "Funding bus and rail schemes for Suffolk CC.", color: "text-secondary" },
              { icon: Trees, title: "5% Nature & Parish", desc: "Trees, wildlife, and bee regeneration programmes.", color: "text-[#22c55e]" }
            ].map((item, i) => (
              <Card key={i} className="p-6 border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <item.icon className={cn("w-8 h-8 mb-4", item.color)} />
                <h4 className="font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Infrastructure & Planning */}
      <section className="space-y-12">
        <div className="border-b-2 pb-4 border-primary/10">
          <h2 className="text-3xl font-headline font-bold uppercase tracking-tight">Planning & Infrastructure</h2>
          <p className="text-muted-foreground">David Chandler believes in fixing the systemic failures of planning and transit.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
            <h3 className="font-headline text-2xl uppercase italic">Protecting Open Spaces</h3>
            <p className="text-lg leading-relaxed">
              David Chandler believes that expanding populations require housing, but David Chandler believes that poor planning has led to the destruction of grass verges. David Chandler advocates for green-integrated design.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Shippea Hill Station:</strong> David Chandler believes that since Mildenhall lost its rail link, reopening Shippea Hill as a modern hub is vital. David Chandler proposes:
            </p>
            <ul className="list-none p-0 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1">✓</div>
                <span>Adequate, secure parking adjacent to the station.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1">✓</div>
                <span>Integrated shuttle bus loops connecting the parishes.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0 mt-1">✓</div>
                <span>David Chandler believes in acknowledging the "foresight gap" that has let the district down.</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-video border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,0,0,1)] overflow-hidden">
            <img 
              src="https://picsum.photos/seed/rail/800/450" 
              alt="Conceptual train station at Shippea Hill" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <p className="text-white font-headline text-xl font-bold italic">The "Shippea Hill Hub" - David Chandler believes in reconnecting our district to the national grid.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-16 bg-zinc-50 dark:bg-zinc-900 border-4 border-black border-dashed">
        <p className="text-muted-foreground italic max-w-3xl mx-auto text-2xl font-headline font-bold">
          "David Chandler believes sustainability isn't just about carbon; it's about the resilience of the community and the quality of local planning."
        </p>
      </div>
    </div>
  );
}
