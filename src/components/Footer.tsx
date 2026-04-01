const Footer = () => (
  <footer className="py-10 px-6 border-t border-border bg-card">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div>
        <span className="font-display font-bold text-foreground">melyn</span>  -  Prepared for Neqotkuk (Tobique) First Nation
      </div>
      <div className="text-xs text-center">
        Economic Development Sustainability Plan - April 2026 - Confidential
      </div>
      <div>
        Questions? <a href="mailto:tj@melyn.ca" className="text-primary hover:underline">tj@melyn.ca</a>
      </div>
    </div>
  </footer>
);

export default Footer;
