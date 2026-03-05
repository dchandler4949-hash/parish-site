
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary uppercase tracking-tighter">Contact David</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-headline italic">
          "Localism starts with a conversation. I am here to listen to your concerns."
        </p>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold uppercase">Direct Access</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have specific questions about the manifesto, local evidence, or how to get involved in the campaign for our parishes, please reach out.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-primary text-white flex items-center justify-center border-4 border-black">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">General Enquiries</p>
                <p className="text-xl font-bold">contact@davidchandler.uk</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center border-4 border-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Campaign Verification</p>
                <p className="text-sm italic">DBS Checked & Background Verified</p>
              </div>
            </div>
          </div>

          <div className="p-8 border-4 border-primary bg-zinc-50 dark:bg-zinc-900">
            <h3 className="font-headline font-bold text-2xl mb-4 uppercase">The Promise</h3>
            <p className="text-sm italic text-muted-foreground">
              "I will personally review all community correspondence. Every village has its own history, and every resident has their own story. Local governance starts with listening to each parish uniquely."
            </p>
          </div>
        </div>

        <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,0,1)]">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="uppercase font-bold tracking-widest text-xs">Full Name</Label>
                  <Input id="name" placeholder="YOUR NAME" required className="border-2 border-zinc-300 focus:border-primary rounded-none h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="uppercase font-bold tracking-widest text-xs">Email Address</Label>
                  <Input id="email" type="email" placeholder="YOUR@EMAIL.COM" required className="border-2 border-zinc-300 focus:border-primary rounded-none h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="uppercase font-bold tracking-widest text-xs">Subject / Parish</Label>
                <Input id="subject" placeholder="WHICH AREA DO YOU REPRESENT?" className="border-2 border-zinc-300 focus:border-primary rounded-none h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="uppercase font-bold tracking-widest text-xs">Message</Label>
                <Textarea id="message" placeholder="WHAT IS YOUR CONCERN?" className="min-h-[150px] border-2 border-zinc-300 focus:border-primary rounded-none" required />
              </div>

              <p className="text-[10px] text-muted-foreground uppercase leading-relaxed font-bold">
                By submitting, you agree to our <a href="/privacy" className="underline text-primary">Privacy Policy</a>. Data is handled in strict accordance with UK Electoral Law and GDPR.
              </p>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-black text-white rounded-none h-16 text-xl font-bold uppercase tracking-tighter">
                Send Community Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
