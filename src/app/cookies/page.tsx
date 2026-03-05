export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12">
      <header className="space-y-4 border-b-4 border-primary pb-8">
        <h1 className="text-5xl font-headline font-bold uppercase tracking-tighter italic text-primary">Cookie Policy</h1>
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">Effective Date: October 2023</p>
      </header>

      <section className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        <p>This website uses cookies and similar technologies to ensure site functionality and to understand how visitors interact with our campaign information. This helps us improve the user experience for everyone.</p>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">1. What are Cookies?</h2>
          <p>Cookies are small text files stored on your computer or mobile device when you visit a website. They allow the site to remember your actions and preferences over a period of time.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the website to function. They include cookies that allow you to use our survey and contact forms securely.
            </li>
            <li>
              <strong>Analytics Cookies (Google Firebase/Analytics):</strong> These help us understand which policy pages are most visited and how users navigate the site. This data is aggregated and does not personally identify you.
            </li>
            <li>
              <strong>Preference Cookies:</strong> These remember your accessibility settings, such as "High Contrast" or "Large Text" modes, so you don't have to reset them on every page.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">3. Managing Your Cookies</h2>
          <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
          <p>However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities (like the survey) may not work correctly.</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold uppercase">4. Google's Data Usage</h2>
          <p>As we use Google Firebase services, Google may use data collected through these cookies to provide, maintain, and improve their services. You can learn more about how Google uses data when you use our site by visiting <a href="https://policies.google.com/technologies/partner-sites" target="_blank" className="text-primary underline">Google's Partner Site Policy</a>.</p>
        </div>
      </section>

      <div className="bg-zinc-50 dark:bg-zinc-900 p-8 border-4 border-black text-center">
        <p className="font-bold uppercase tracking-widest text-sm mb-4">Your Consent</p>
        <p className="text-sm text-muted-foreground italic">
          By continuing to use this website, you consent to the use of cookies as described in this policy. You can withdraw your consent at any time by clearing your browser cookies.
        </p>
      </div>
    </div>
  );
}
