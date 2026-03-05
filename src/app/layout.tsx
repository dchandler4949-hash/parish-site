
import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GDPRConsent from '@/components/GDPRConsent';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'David Chandler | Suffolk County Council Candidate 2026',
  description: 'Official campaign website for David Chandler, Candidate for Suffolk County Council, Mildenhall Division. Reclaiming the forgotten towns through evidence-based policy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Skip to Content for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:p-4 focus:font-bold border-2 border-white"
        >
          Skip to main content
        </a>

        {/* Workers Party Style Frame: Thick Red Vertical Lines */}
        <div className="fixed left-0 top-0 w-2 md:w-3 h-full bg-primary z-50 pointer-events-none" aria-hidden="true" />
        <div className="fixed right-0 top-0 w-2 md:w-3 h-full bg-primary z-50 pointer-events-none" aria-hidden="true" />

        <FirebaseClientProvider>
          <Header />
          <AccessibilityToolbar />
          
          <main id="main-content" className="flex-1 container mx-auto px-6 md:px-12 py-12 md:max-w-7xl outline-none" tabIndex={-1}>
            {children}
          </main>

          <Footer />
          <GDPRConsent />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
