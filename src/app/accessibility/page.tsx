export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <header className="space-y-4 border-b-4 border-primary pb-8">
        <h1 className="text-5xl font-headline font-bold uppercase tracking-tighter italic text-primary">Accessibility Statement</h1>
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Updated: October 2023</p>
      </header>

      <section className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <div className="bg-zinc-50 dark:bg-zinc-900 p-6 border-l-4 border-primary italic">
          <p className="m-0">David Chandler is committed to social inclusion and digital equality. We believe that everyone should be able to access our campaign information, regardless of their physical or visual abilities. This website is designed to be accessible to all users and is built in accordance with UK accessibility regulations.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">1. Conformance Status</h2>
          <p>The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. This website is committed to maintaining a status of **partially conformant with WCAG 2.1 level AA**.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">2. Built-in Accessibility Features</h2>
          <p>We provide a dedicated Accessibility Toolbar at the top of every page, offering the following tools:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>High Contrast Mode:</strong> Replaces the campaign's bold color scheme with high-contrast black and white/yellow colors to aid those with visual impairments.
            </li>
            <li>
              <strong>Large Text Mode:</strong> Increases the base font size and scales all headers proportionally to improve readability.
            </li>
            <li>
              <strong>Skip to Main Content:</strong> A hidden link for keyboard and screen-reader users to bypass navigation menus.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">3. Technical Specifications</h2>
          <p>Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>HTML5</li>
            <li>WAI-ARIA (Accessible Rich Internet Applications)</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">4. Limitations and Alternatives</h2>
          <p>Despite our best efforts to ensure accessibility of our campaign materials, there may be some limitations. For example, legacy PDF documents or complex charts may not be fully accessible to all screen readers. If you encounter an issue, please contact us for an alternative format.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">5. Feedback & Contact Information</h2>
          <p>We welcome your feedback on the accessibility of this website. Please let us know if you encounter accessibility barriers:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:contact@davidchandler.uk" className="text-primary font-bold">contact@davidchandler.uk</a><br />
            <strong>Address:</strong> 55 Girton Close, Mildenhall, Bury St Edmunds, Suffolk, IP28 7PT
          </p>
          <p>We aim to respond to accessibility feedback within 5 business days.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">6. Enforcement Procedure</h2>
          <p>The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’). If you are not happy with how we respond to your complaint, contact the <a href="https://www.equalityadvisoryservice.com/" target="_blank" className="underline">Equality Advisory and Support Service (EASS)</a>.</p>
        </div>
      </section>

      <div className="bg-black text-white p-8 border-4 border-primary text-center">
        <p className="font-bold uppercase tracking-widest text-sm mb-4 italic">Inclusive Campaigning</p>
        <p className="text-sm text-zinc-400">
          "Democracy fails when it is not accessible. We must ensure every voice is heard, and every word can be read."
        </p>
      </div>
    </div>
  );
}
