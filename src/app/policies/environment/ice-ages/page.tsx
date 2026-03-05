"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, ThermometerSnowflake, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iceAges = [
  {
    title: "Huronian Glaciation",
    time: "2.4 – 2.1 Billion Years Ago",
    desc: "One of the earliest and longest known ice ages. Likely caused by the 'Great Oxidation Event' which removed methane from the atmosphere.",
    significance: "May have been a 'Snowball Earth' event where the entire planet was covered in ice."
  },
  {
    title: "Cryogenian Glaciation",
    time: "720 – 635 Million Years Ago",
    desc: "Comprised of two major glaciations (Sturtian and Marinoan). This era represents the most extreme climate events in Earth's history.",
    significance: "Essential for understanding the evolution of complex multicellular life."
  },
  {
    title: "Andean-Saharan Glaciation",
    time: "450 – 420 Million Years Ago",
    desc: "Localized primarily in what is now South America and Africa (then part of the Gondwana supercontinent).",
    significance: "Occurred during the Ordovician-Silurian extinction event."
  },
  {
    title: "Karoo Ice Age",
    time: "360 – 260 Million Years Ago",
    desc: "A massive glaciation covering the southern poles, lasting over 100 million years.",
    significance: "Coincided with the evolution of land plants and the formation of modern coal deposits."
  },
  {
    title: "Quaternary Glaciation",
    time: "2.58 Million Years Ago – Present",
    desc: "The current ice age we live in, characterized by alternating 'glacial' (cold) and 'interglacial' (warm) periods.",
    significance: "Currently, we are in the Holocene interglacial period, which started approximately 11,700 years ago."
  }
];

export default function IceAgeHistoryPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <header className="space-y-6 text-center">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary">Climate Archives</Badge>
        <h1 className="text-5xl font-headline font-bold text-primary">History of the Ice Ages</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          An overview of the five major glaciations throughout Earth's known history.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto" />
      </header>

      <section className="prose prose-lg dark:prose-invert max-w-none">
        <div className="flex items-center gap-3 p-6 bg-zinc-50 dark:bg-zinc-900 border rounded-xl not-prose">
          <Globe className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-bold text-lg m-0">Planetary Context</h3>
            <p className="text-sm text-muted-foreground">
              Climate science must be viewed through the lens of geological time. Earth has spent significant portions of its history significantly colder—and significantly warmer—than the present day.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          {iceAges.map((iceAge, i) => (
            <div key={i} className="relative pl-12 border-l-4 border-primary/20 pb-12 last:pb-0">
              <div className="absolute left-[-1.15rem] top-0 bg-primary text-white rounded-full p-2">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-headline">{iceAge.title}</CardTitle>
                    <Badge variant="secondary">{iceAge.time}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">{iceAge.desc}</p>
                  <div className="bg-primary/5 p-4 border-l-2 border-primary">
                    <p className="text-sm italic"><strong>Scientific Significance:</strong> {iceAge.significance}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-zinc-900 text-white p-12 text-center rounded-2xl space-y-6">
        <History className="w-12 h-12 mx-auto text-primary" />
        <h3 className="text-2xl font-headline font-bold">Understanding Cyclical Change</h3>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          By examining the evidence of historical ice ages, we can better understand the natural mechanisms of Earth's climate and distinguish them from anthropogenic impacts, leading to more nuanced and effective environmental policies.
        </p>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
          <Link href="/policies/environment">Back to Environment Policy</Link>
        </Button>
      </div>
    </div>
  );
}
