import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10 bg-void/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-display font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent inline-block mb-4"
            >
              NEXUS
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px]">
              Elite software agency building the tools of tomorrow. Serving
              ambitious founders worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-display font-bold mb-6">
              Company
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-display font-bold mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  AI / ML
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-display font-bold mb-6">
              Connect
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <p className="text-muted-foreground text-xs text-center">
          &copy; 2025 Nexus . All rights reserved. Built for scale.
        </p>
      </div>
    </footer>
  );
}
