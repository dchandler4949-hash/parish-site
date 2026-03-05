
export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <header className="space-y-4 border-b-8 border-primary pb-8">
        <h1 className="text-5xl md:text-7xl font-headline font-bold uppercase tracking-tighter italic text-primary">Privacy Policy</h1>
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Effective Date: October 2025 | Updated for 2026 Election Cycle</p>
      </header>

      <section className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <div className="bg-zinc-100 dark:bg-zinc-900 p-8 border-l-[16px] border-primary italic rounded-r-lg">
          <p className="m-0 text-xl font-medium leading-relaxed">
            David Chandler ("the Candidate") and the David Chandler Campaign Team ("the Campaign") are committed to protecting the privacy of constituents and supporters. This policy outlines how the campaign collects, uses, and safeguards your data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the Political Parties, Elections and Referendums Act 2000 (PPERA).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold uppercase text-primary underline decoration-black underline-offset-8">1. Data Controller</h2>
          <p>The data controller for this website is <strong>David Chandler, 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT</strong>. You can contact the team regarding your data at <a href="mailto:contact@davidchandler.uk" className="text-primary font-bold">contact@davidchandler.uk</a>.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold uppercase text-primary underline decoration-black underline-offset-8">2. Legal Basis for Processing</h2>
          <p>The campaign processes your data under the following legal bases:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Consent:</strong> When you voluntarily complete our "People's Audit" survey or use our contact form.</li>
            <li><strong>Public Task:</strong> Processing data that is necessary for democratic engagement and the performance of a task in the public interest, as defined under the Data Protection Act 2018.</li>
            <li><strong>Legal Obligation:</strong> Where the campaign is required by UK electoral law (PPERA 2000) to maintain records of campaign interactions.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold uppercase text-primary underline decoration-black underline-offset-8">3. Information the Campaign Collects</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>Directly Provided:</strong> Information entered into our survey or contact form. David Chandler believes in anonymity; therefore, survey responses are anonymous by design.</li>
            <li><strong>Automatically Collected:</strong> Technical data handled via Google Firebase to ensure site security and functionality. This includes non-identifying telemetry.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold uppercase text-primary underline decoration-black underline-offset-8">4. Use of Google Firebase</h2>
          <p>This website uses Google Firebase for secure data storage. Google acts as a data processor. By using this site, you acknowledge that your information will be handled in accordance with <a href="https://policies.google.com/privacy" target="_blank" className="underline font-bold">Google's Privacy Policy</a>.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold uppercase text-primary underline decoration-black underline-offset-8">5. Electoral Compliance</h2>
          <p>This website is promoted by <strong>David Chandler</strong>. All digital campaigning activities are conducted in strict adherence to the guidance provided by the <strong>UK Electoral Commission</strong>. Data is never sold to third parties or corporate entities.</p>
        </div>

        <div className="bg-black text-white p-12 border-4 border-primary text-center space-y-6">
          <h3 className="font-headline text-3xl uppercase italic tracking-tighter">Your Data Rights</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Under UK GDPR, you have the right to access, inform, erase, and restrict processing. To exercise these rights, please contact David Chandler's team immediately.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@davidchandler.uk" className="bg-primary text-white px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">Request Data Review</a>
            <a href="https://ico.org.uk" target="_blank" className="border-2 border-white text-white px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">ICO.org.uk</a>
          </div>
        </div>
      </section>
    </div>
  );
}
