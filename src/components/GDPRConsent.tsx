
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

export default function GDPRConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:left-auto md:max-w-md">
      <Card className="p-6 shadow-2xl border-2 border-primary animate-in slide-in-from-bottom-10">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h4 className="font-bold">Privacy & Cookies</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to ensure you get the best experience on our website. 
              By continuing to browse, you agree to our use of cookies and personal data processing in accordance with our Privacy Policy.
            </p>
            <div className="flex gap-3">
              <Button size="sm" onClick={accept}>Accept All</Button>
              <Button size="sm" variant="outline" asChild>
                <a href="/privacy">Read More</a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
