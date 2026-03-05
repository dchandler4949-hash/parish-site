
import Image from 'next/image';
import { ShieldCheck, HelpCircle, ArrowRight, Quote, Landmark, Users, Scale, Globe, ShieldAlert, UserPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const wpbEmblem = PlaceHolderImages.find(img => img.id === 'workers-party-emblem');

  const essentialQuestions = [
    {
      q: "How do we ensure local housing remains for local people?",
      a: "David Chandler believes in prioritising 'Proximity Rights' and decoupling our rental market from military housing allowances. David advocates for on-base construction at RAF Feltwell to relieve local pressure and a veto on developments that destroy our prime agricultural land."
    },
    {
      q: "Why is our rural infrastructure being neglected in favour of urban centres?",
      a: "For too long, Mildenhall and its villages have been treated as a revenue source for Ipswich and Bury St Edmunds. David Chandler believes in mandatory per-capita funding parity, ensuring every resident receives the same investment as those in urban hubs."
    },
    {
      q: "How can we restore dignity to social care without bankrupting families?",
      a: "David Chandler's model nationalises care homes under the NHS, funded by a 2% income tax. This makes care free at the point of use, protects family assets from being stripped, and aligns care workers' conditions with the NHS."
    },
    {
      q: "What is the plan to reconnect our villages via reliable public transport?",
      a: "David Chandler believes in fighting for the reopening of Mildenhall Bus Station as a multimodal hub and the return of evening and Sunday services. David's policy redirects 10% of solar energy dividends directly into rural transit schemes."
    },
    {
      q: "How do we break the cycle of voter disillusionment in our district?",
      a: "Democracy fails when turnout is below 30%. David Chandler proposes participatory budgeting and mandatory contestation funds to ensure no seat is left uncontested and that every vote has a direct, visible impact on local village spending."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary italic">A Voice for the Forgotten</h1>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 gap-1.5 px-3 py-1 text-sm font-bold h-fit mt-2 uppercase">
                  <ShieldCheck className="w-4 h-4" /> DBS Checked
                </Badge>
                {wpbEmblem && (
                  <a 
                    href="https://workerspartybritain.org/join/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-primary transition-colors h-fit mt-2"
                  >
                    <div className="relative w-4 h-4 rounded-full overflow-hidden bg-white">
                      <Image src={wpbEmblem.imageUrl} alt="WPB" fill className="object-cover" />
                    </div>
                    Workers Party
                  </a>
                )}
              </div>
            </div>
            <p className="text-2xl leading-relaxed text-muted-foreground italic font-headline">
              "I am not seeking to represent a party; I am seeking to restore a community."
            </p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl font-medium text-foreground/80">
              David Chandler's journey began with a question that many in power find uncomfortable: <strong>"Who gave you this power, and in whose interest do you exercise it?"</strong>
            </p>
            
            <p>
              At 15, David was deeply influenced by the principled scepticism of figures like <strong>Peter Shore, Tony Benn, and George Galloway</strong>. Their warnings about the erosion of national sovereignty and the lack of accountability in distant bureaucracies resonated with his own observations. 
            </p>

            <div className="bg-zinc-100 dark:bg-zinc-900 p-6 border-l-4 border-zinc-400 my-8 not-prose rounded-r-lg">
              <Quote className="w-8 h-8 text-zinc-300 mb-2" />
              <p className="text-lg italic font-headline leading-relaxed">
                "What power have you got? Where did you get it? In whose interests do you exercise it? To whom are you accountable? And how can we get rid of you?" — The Tony Benn questions that sparked David's political awakening.
              </p>
            </div>

            <p>
              Life provided an early lesson in the "disposable" nature of the workforce. At 16, David entered training only to be dismissed and immediately replaced by another 16-year-old—a move designed to exploit youth rather than nurture potential. This experience forged a lifelong commitment to workers' rights and fair evaluation.
            </p>

            <h3 className="font-headline text-2xl text-primary">A Legacy of Professional Action</h3>
            <p>
              David's career took root at <strong>RAF Mildenhall</strong>, where he served with distinction in the MoD. His roles as a <strong>Shop Steward, Health & Safety Representative, and Lay Delegate</strong> were not just titles; they were mandates to protect his colleagues' dignity and safety.
            </p>
            <p>
              Recognising his expertise in organisational fairness, David was seconded to the <strong>Treasury</strong> to master the procedures of <strong>JEGS2000</strong>. He became a specialist in evaluating job descriptions to ensure pay rises were assessed based on true merit and responsibility, not just administrative convenience. 
            </p>

            <div className="bg-primary/5 p-6 border-l-4 border-primary my-8 not-prose">
              <Scale className="w-8 h-8 text-primary/40 mb-2" />
              <h4 className="font-bold text-lg mb-2">Restoring Worth</h4>
              <p className="text-sm italic">
                David Chandler knows how to audit the "value" of a role. David Chandler believes in applying this same rigorous logic to our parishes: if our residents contribute to the national purse, their local services must reflect that investment. No more "Forgotten Town" shortfalls.
              </p>
            </div>

            <h3 className="font-headline text-2xl text-primary">Self-Determination & Global Justice</h3>
            <p>
              David advocates for a UK that operates with true self-determination, adhering to a modernised <strong>UN Charter on Human Rights</strong>. He rejects the corruption inherent in centralised, distant systems—be they in Europe or closer to home.
            </p>
            <p>
              On the global stage, David Chandler questions why people are forced to flee their homelands, often as a direct result of Western governmental interventions. David's proposal for a <strong>"Temporary Sanctuary"</strong> model is both compassionate and practical:
            </p>
            <ul className="list-none p-0 space-y-4">
              <li className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span><strong>Safe Asylum Centres:</strong> Establishing medical and application processing hubs on borders to eradicate the evil of illegal trafficking.</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span><strong>Temporary Sanctuary:</strong> Providing immediate safety and assessment, allowing refugees to reside securely until such time as their homeland is safe for their return.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] shadow-2xl overflow-hidden group border-8 border-white dark:border-zinc-900">
            <Image 
              src="https://picsum.photos/seed/david/800/1000" 
              alt="David Chandler" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-ai-hint="man speaking portrait"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary/95 text-white p-6 backdrop-blur-md">
              <p className="text-sm font-bold uppercase tracking-widest mb-1">Background Verified</p>
              <p className="text-xs opacity-90 leading-relaxed">
                David maintains a current <strong>DBS Check</strong>, a reflection of his career-long commitment to transparency and the trust placed in him throughout his public service and union leadership.
              </p>
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 text-center border">
                <p className="text-3xl font-bold text-primary">MoD</p>
                <p className="text-[10px] uppercase tracking-tighter text-muted-foreground font-bold">RAF Mildenhall Veteran</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-4 text-center border">
                <p className="text-3xl font-bold text-primary italic">JEGS</p>
                <p className="text-[10px] uppercase tracking-tighter text-muted-foreground font-bold">Treasury Seconded Evaluator</p>
              </div>
            </div>
            
            <Button className="w-full bg-black hover:bg-primary text-white font-bold h-14 rounded-none uppercase tracking-tighter text-lg" asChild>
              <a href="https://workerspartybritain.org/join/" target="_blank" rel="noopener noreferrer">
                <UserPlus className="w-5 h-5 mr-2" /> Join the Workers Party of Britain
              </a>
            </Button>
          </div>
        </div>
      </div>

      <section className="space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-2">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-headline font-bold">5 Essential Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg italic">
            Direct answers to the fundamental issues facing our community today.
          </p>
          <div className="w-24 h-1 bg-[#FF0000] mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {essentialQuestions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-primary/10 py-2">
                <AccordionTrigger className="text-left text-xl font-bold hover:text-primary transition-colors hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-4 pb-8">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-black text-white p-12 md:p-16 border-4 border-[#FF0000] text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full bg-[#FF0000]/10 -skew-x-12 translate-x-16" />
        <h2 className="text-3xl md:text-4xl font-headline font-bold relative z-10 italic">"Alternative Ways for the Many, Not the Few"</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="space-y-2">
            <p className="text-primary text-4xl font-bold">25+</p>
            <p className="text-sm uppercase tracking-widest font-bold">Years of Public Service</p>
          </div>
          <div className="space-y-2">
            <p className="text-primary text-4xl font-bold">100%</p>
            <p className="text-sm uppercase tracking-widest font-bold">Local Accountability</p>
          </div>
          <div className="space-y-2">
            <p className="text-primary text-4xl font-bold">0</p>
            <p className="text-sm uppercase tracking-widest font-bold">Corporate Donors</p>
          </div>
        </div>
        <p className="text-xl max-w-2xl mx-auto text-zinc-400 relative z-10 font-headline italic">
          "The role of a representative is not to manage decline, but to champion restoration. David Chandler believes that alternative ways must be built that work for all."
        </p>
      </section>
    </div>
  );
}
