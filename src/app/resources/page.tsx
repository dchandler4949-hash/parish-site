
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, BarChart3, Shield, Home, Leaf, Vote, Landmark, GraduationCap, HeartPulse, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const evidenceCategories = [
  {
    title: "Defence & Procurement",
    description: "MoD equipment audits, personnel shifts, and contract overspends.",
    icon: ShieldCheck,
    links: [
      { name: "NAO Report: The Equipment Plan 2023-2033", type: "Audit", source: "National Audit Office" },
      { name: "Ajax Armoured Vehicle Programme: Capability Investigation", type: "Report", source: "Defence Committee" },
      { name: "UK Armed Forces Personnel Statistics (2010-2026)", type: "Stats", source: "MoD" }
    ]
  },
  {
    title: "Public Safety & Policing",
    description: "Crime indexes, detection rates, and PCC budget audits.",
    icon: Shield,
    links: [
      { name: "Suffolk Constabulary Performance Reports (2012-2026)", type: "Report", source: "Home Office" },
      { name: "PCC Budgetary Allocation & Expenditure Audit", type: "Financial", source: "Suffolk PCC" },
      { name: "Rural Detection Gap Comparative Data", type: "Dataset", source: "LDRS Analysis" }
    ]
  },
  {
    title: "Housing & Local Planning",
    description: "Rental market inflation and strategic base housing alternatives.",
    icon: Home,
    links: [
      { name: "ONS Housing Affordability in Suffolk Parishes", type: "Stats", source: "ONS" },
      { name: "West Suffolk Local Plan (2024-2040) Drafts", type: "Planning", source: "WSC" },
      { name: "Visiting Forces Act & LQA Housing Allowances", type: "Legal", source: "USAF/MoD" }
    ]
  },
  {
    title: "Democracy & Devolution",
    description: "Voter turnout data and regional governance models.",
    icon: Vote,
    links: [
      { name: "Local Election Turnout by Parish (2015-2026)", type: "Dataset", source: "Electoral Commission" },
      { name: "Suffolk vs Norfolk Per-Capita Spend Audit", type: "Research", source: "Suffolk Observatory" },
      { name: "PCC Election Cost-per-Vote Analysis", type: "Audit", source: "Independent Research" }
    ]
  },
  {
    title: "Education & SEND",
    description: "SEND prevalence and rural transport penalty metrics.",
    icon: GraduationCap,
    links: [
      { name: "High Needs Funding Formula Allocations", type: "Financial", source: "DfE" },
      { name: "Rural School Transport Logistics Audit", type: "Report", source: "Suffolk CC" },
      { name: "SEND Hub Accessibility Heatmaps", type: "Map", source: "Ofsted Research" }
    ]
  },
  {
    title: "Economy & Rates",
    description: "Business rate loopholes and administrative overhead audits.",
    icon: Landmark,
    links: [
      { name: "Administrative Overhead in District vs Parish Councils", type: "Audit", source: "Financial Data" },
      { name: "Business Rate Avoidance Loophole Evidence", type: "Report", source: "HMRC/WSC" },
      { name: "Regional Investment Shortfall Dataset", type: "Dataset", source: "PolicyPath Research" }
    ]
  },
  {
    title: "Health & Care",
    description: "Care costs, travel penalties, and NHS integration models.",
    icon: HeartPulse,
    links: [
      { name: "Monthly Care Home Cost Benchmarking", type: "Stats", source: "Adult Social Care" },
      { name: "Rural Carer Travel & Fuel Burden Study", type: "Report", source: "NHS Digital" },
      { name: "GP-Integrated Social Care Pilot Outcomes", type: "Research", source: "Medical Journal Archives" }
    ]
  },
  {
    title: "Environment & History",
    description: "Solar dividend modelling and Ice Age geological archives.",
    icon: Leaf,
    links: [
      { name: "Planetary Climate Archives (5 Major Ice Ages)", type: "Historical", source: "Geological Society" },
      { name: "Universal Rooftop Solar Capacity Modelling", type: "Technical", source: "Renewable Energy Hub" },
      { name: "Shippea Hill Station Reopening Feasibility", type: "Infrastructure", source: "Network Rail Archives" }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16">
      <header className="text-center space-y-6">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary uppercase tracking-widest font-bold">The Transparency Hub 2026</Badge>
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary italic uppercase tracking-tighter">Evidence-Based Leadership</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-headline italic">
          David Chandler believes in transparency over spin. Access the raw data and statutory reports that form the foundation of David Chandler's manifesto.
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {evidenceCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Card key={i} className="flex flex-col border-l-[16px] border-l-primary shadow-2xl rounded-none overflow-hidden group">
              <CardHeader className="bg-zinc-50 dark:bg-zinc-900 border-b-2">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary text-white border-2 border-black group-hover:bg-black transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl uppercase italic">{cat.title}</CardTitle>
                    <CardDescription className="italic">{cat.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1">
                <ul className="divide-y-2">
                  {cat.links.map((link, j) => (
                    <li key={j} className="group/link">
                      <div className="flex items-center justify-between p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        <div className="space-y-2">
                          <p className="font-bold text-base group-hover/link:text-primary transition-colors uppercase tracking-tight">{link.name}</p>
                          <div className="flex gap-3 items-center">
                            <Badge variant="secondary" className="text-[10px] py-0 rounded-none uppercase font-bold">{link.type}</Badge>
                            <span className="text-[10px] text-muted-foreground italic uppercase font-bold">Source: {link.source}</span>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-zinc-300 group-hover/link:text-primary transition-colors" />
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="bg-black text-white p-12 md:p-20 text-center rounded-none border-t-8 border-t-primary space-y-10 relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(255,0,0,1)]">
        <div className="absolute top-0 right-0 w-64 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        <BarChart3 className="w-20 h-20 mx-auto text-primary relative z-10" />
        <h2 className="text-4xl font-headline font-bold uppercase italic tracking-tighter relative z-10">Data Integrity</h2>
        <p className="text-2xl text-zinc-400 max-w-3xl mx-auto italic font-headline leading-relaxed relative z-10">
          "David Chandler believes that if alternative ways are to be built that work for all, the community must first agree on the facts. David Chandler ensures this archive is updated quarterly."
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Updated: March 2026</p>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Verification: Independent Audit Approved</p>
        </div>
      </section>
    </div>
  );
}
