
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ClipboardList, ArrowRight, ArrowLeft, Send } from 'lucide-react';
import { useFirestore, useAuth } from '@/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { initiateAnonymousSignIn } from '@/firebase/non-blocking-login';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const steps = [
  {
    title: "Your Location & Background",
    description: "This data is non-identifying and helps us understand regional needs."
  },
  {
    title: "Public Services & Safety",
    description: "Opinions on Policing, Education, and Healthcare provision."
  },
  {
    title: "Infrastructure & Economy",
    description: "Feedback on Transport, Housing, and Local Business Rates."
  },
  {
    title: "Governance & Environment",
    description: "Direct input on Devolution, Democracy, and Energy policy."
  }
];

export default function SurveyPage() {
  const firestore = useFirestore();
  const auth = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    parish: "",
    ageRange: "",
    employmentStatus: "",
    policingPriority: "",
    sendHubSupport: "",
    careTaxSupport: "",
    feltwellHousingSupport: "",
    busStationPriority: "",
    smallBusinessRateRelief: "",
    devolutionOpposition: "",
    participatoryBudgeting: "",
    rooftopSolarPreference: "",
    finalComments: ""
  });

  const updateField = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (auth && !auth.currentUser) {
      initiateAnonymousSignIn(auth);
    }

    const surveyCollectionRef = collection(firestore, 'surveyResponses');
    const responseDocRef = doc(surveyCollectionRef); // Create a doc reference with a generated ID
    
    const submissionData = {
      ...formData,
      id: responseDocRef.id, // Mandatory field matching the document path ID for security rules
      submissionDateTime: serverTimestamp(),
      surveyId: 'peoples-audit-2026',
      region: 'Suffolk',
      localAuthorityArea: 'West Suffolk'
    };

    setDoc(responseDocRef, submissionData)
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        const permissionError = new FirestorePermissionError({
          path: responseDocRef.path,
          operation: 'create',
          requestResourceData: submissionData,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-24 text-center space-y-8 animate-in fade-in zoom-in-95">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-50 text-green-600 rounded-full border-4 border-green-200">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-headline font-bold uppercase tracking-tighter">Response Recorded</h1>
          <p className="text-xl text-muted-foreground leading-relaxed italic">
            "Your evidence is now part of our mandate. Thank you for contributing to alternative ways for the many."
          </p>
        </div>
        <div className="w-24 h-1 bg-primary mx-auto" />
        <Button size="lg" className="rounded-none h-14 px-10 text-lg font-bold" asChild>
          <a href="/">Return to Manifesto</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <header className="text-center space-y-4">
        <div className="inline-flex p-3 bg-primary/10 rounded-full text-primary mb-2">
          <ClipboardList className="w-8 h-8" />
        </div>
        <h1 className="text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter italic text-primary">The People's Audit</h1>
        <div className="w-24 h-2 bg-primary mx-auto" />
      </header>

      <Card className="border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,0,0,1)] rounded-none overflow-hidden">
        <CardHeader className="bg-zinc-900 text-white border-b-4 border-primary p-8">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <CardTitle className="text-2xl font-headline italic uppercase tracking-tight">Step {currentStep + 1}: {steps[currentStep].title}</CardTitle>
              <CardDescription className="text-zinc-400">{steps[currentStep].description}</CardDescription>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {currentStep === 0 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-lg font-bold uppercase tracking-tight">Which Parish do you live in?</Label>
                    <Select onValueChange={(v) => updateField('parish', v)} value={formData.parish}>
                      <SelectTrigger className="h-12 border-2 border-zinc-300 rounded-none">
                        <SelectValue placeholder="Select Area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mildenhall">Mildenhall High Town</SelectItem>
                        <SelectItem value="barton-mills">Barton Mills</SelectItem>
                        <SelectItem value="worlington">Worlington</SelectItem>
                        <SelectItem value="freckenham">Freckenham</SelectItem>
                        <SelectItem value="west-row">West Row</SelectItem>
                        <SelectItem value="other">Other / Nearby</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-lg font-bold uppercase tracking-tight">Age Range</Label>
                    <Select onValueChange={(v) => updateField('ageRange', v)} value={formData.ageRange}>
                      <SelectTrigger className="h-12 border-2 border-zinc-300 rounded-none">
                        <SelectValue placeholder="Select Age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-24">18 - 24</SelectItem>
                        <SelectItem value="25-34">25 - 34</SelectItem>
                        <SelectItem value="35-44">35 - 44</SelectItem>
                        <SelectItem value="45-54">45 - 54</SelectItem>
                        <SelectItem value="55-64">55 - 64</SelectItem>
                        <SelectItem value="65+">65+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="text-lg font-bold uppercase tracking-tight">Employment Status</Label>
                  <RadioGroup className="grid grid-cols-1 md:grid-cols-2 gap-4" onValueChange={(v) => updateField('employmentStatus', v)} value={formData.employmentStatus}>
                    {['Full-time', 'Part-time', 'Self-employed', 'Retired', 'Student', 'Unemployed'].map(opt => (
                      <div key={opt} className="flex items-center space-x-3 p-4 border-2 border-zinc-100 hover:border-primary/20">
                        <RadioGroupItem value={opt.toLowerCase()} id={`emp-${opt}`} />
                        <Label htmlFor={`emp-${opt}`} className="font-medium cursor-pointer flex-1">{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-10">
                <div className="space-y-4">
                  <Label className="text-xl font-bold uppercase tracking-tight text-primary">Rate local police visibility (1-5)</Label>
                  <RadioGroup className="flex justify-between gap-2 px-4" onValueChange={(v) => updateField('policingPriority', v)} value={formData.policingPriority}>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div key={num} className="flex flex-col items-center gap-3">
                        <RadioGroupItem value={num.toString()} id={`pol-${num}`} className="w-6 h-6" />
                        <Label htmlFor={`pol-${num}`} className="font-bold text-lg">{num}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-6">
                  <Label className="text-xl font-bold uppercase tracking-tight text-primary">Nationalise Care Homes under NHS (2% tax)?</Label>
                  <RadioGroup className="flex gap-8" onValueChange={(v) => updateField('careTaxSupport', v)} value={formData.careTaxSupport}>
                    {['Yes', 'No', 'Undecided'].map(opt => (
                      <div key={opt} className="flex items-center space-x-3">
                        <RadioGroupItem value={opt.toLowerCase()} id={`care-${opt}`} />
                        <Label htmlFor={`care-${opt}`} className="font-bold cursor-pointer">{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-10">
                <div className="space-y-6">
                  <Label className="text-xl font-bold uppercase tracking-tight text-primary">Build 1,500 homes at RAF Feltwell?</Label>
                  <RadioGroup className="flex gap-8" onValueChange={(v) => updateField('feltwellHousingSupport', v)} value={formData.feltwellHousingSupport}>
                    {['Yes', 'No', 'Undecided'].map(opt => (
                      <div key={opt} className="flex items-center space-x-3">
                        <RadioGroupItem value={opt.toLowerCase()} id={`felt-${opt}`} />
                        <Label htmlFor={`felt-${opt}`} className="font-bold cursor-pointer">{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-6">
                  <Label className="text-xl font-bold uppercase tracking-tight text-primary">60% rate relief for shops with 9 staff or less?</Label>
                  <RadioGroup className="flex gap-8" onValueChange={(v) => updateField('smallBusinessRateRelief', v)} value={formData.smallBusinessRateRelief}>
                    {['Yes', 'No', 'Undecided'].map(opt => (
                      <div key={opt} className="flex items-center space-x-3">
                        <RadioGroupItem value={opt.toLowerCase()} id={`tax-${opt}`} />
                        <Label htmlFor={`tax-${opt}`} className="font-bold cursor-pointer">{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-10">
                <div className="space-y-6">
                  <Label className="text-xl font-bold uppercase tracking-tight text-primary">Reject a merged Norfolk & Suffolk authority?</Label>
                  <RadioGroup className="flex gap-8" onValueChange={(v) => updateField('devolutionOpposition', v)} value={formData.devolutionOpposition}>
                    {['Yes', 'No', 'Undecided'].map(opt => (
                      <div key={opt} className="flex items-center space-x-3">
                        <RadioGroupItem value={opt.toLowerCase()} id={`dev-${opt}`} />
                        <Label htmlFor={`dev-${opt}`} className="font-bold cursor-pointer">{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-4">
                  <Label className="text-xl font-bold uppercase tracking-tight text-primary">Additional Concerns</Label>
                  <Textarea 
                    placeholder="Issues specific to your street..." 
                    className="min-h-[150px] border-2 border-zinc-300 rounded-none"
                    value={formData.finalComments}
                    onChange={(e) => updateField('finalComments', e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-4 pt-8 border-t-2 border-zinc-100">
              {currentStep > 0 && (
                <Button type="button" variant="outline" onClick={handleBack} className="rounded-none h-14 md:flex-1 font-bold uppercase border-2">
                  Previous
                </Button>
              )}
              {currentStep < steps.length - 1 ? (
                <Button type="button" onClick={handleNext} className="rounded-none h-14 md:flex-1 font-bold uppercase text-lg bg-black hover:bg-primary">
                  Next Step
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="rounded-none h-14 md:flex-1 font-bold uppercase text-lg bg-primary hover:bg-black">
                  {isSubmitting ? "Submitting..." : "Submit Evidence"}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
