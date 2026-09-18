export default function Home() {
  return (
    <div className="td-app-shell flex flex-col min-h-screen">
      {/* Top Bar Navigation Shell */}
      <header className="td-topbar flex items-center px-4 sm:px-8">
        <div className="w-full max-w-[var(--td-content-max)] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-[var(--td-radius-sm)] flex items-center justify-center font-bold text-base"
              style={{
                background: "linear-gradient(135deg, var(--td-primary), var(--td-accent))",
                color: "var(--td-text-inverse)",
              }}
              aria-hidden="true"
            >
              TD
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-[var(--td-text)]">
                TrustDocs
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-[var(--td-text-secondary)] font-normal">
                Education to Employment
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="td-badge td-badge--verified"
              role="status"
              aria-label="System status: Foundation Ready"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--td-success)]"
                aria-hidden="true"
              />
              Foundation Ready
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 td-page py-8 sm:py-12">
        {/* Hero Section */}
        <section className="td-section max-w-3xl mb-10" aria-labelledby="hero-title">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--td-accent)] mb-2">
            Verification & Identity Continuity Platform
          </p>
          <h1 id="hero-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--td-text)] mb-4">
            Connecting Verified University Education with Verified Employment
          </h1>
          <p className="text-base sm:text-lg text-[var(--td-text-secondary)] leading-relaxed mb-6">
            TrustDocs verifies not only whether a digital credential is genuine, but confirms
            that the same genuine student carries that credential securely through every critical hiring milestone.
          </p>

          {/* Core Problem / Solution Box */}
          <div className="td-card p-5 sm:p-6 border-l-4 border-l-[var(--td-primary)] bg-[var(--td-surface)]">
            <p className="text-xs font-semibold text-[var(--td-text-secondary)] uppercase tracking-wider mb-2">
              The Core Product Question
            </p>
            <p className="text-sm sm:text-base font-medium text-[var(--td-text)] italic leading-relaxed">
              &ldquo;Is this a genuine credential being presented by its genuine owner to a genuine
              company, with the same person continuing through every important hiring stage?&rdquo;
            </p>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="td-section mb-10" aria-labelledby="pillars-title">
          <h2 id="pillars-title" className="text-xl font-semibold text-[var(--td-text)] mb-4">
            Architecture & Verification Pillars
          </h2>
          <div className="td-stat-grid">
            <div className="td-card td-card--interactive p-5">
              <div className="text-xs font-semibold text-[var(--td-accent)] uppercase mb-1">
                Pillar 1
              </div>
              <h3 className="text-base font-semibold text-[var(--td-text)] mb-2">
                University Issuance
              </h3>
              <p className="text-xs sm:text-sm text-[var(--td-text-secondary)] leading-relaxed">
                Vetted universities issue tamper-evident credentials sealed with SHA-256 integrity hashes directly to students.
              </p>
            </div>

            <div className="td-card td-card--interactive p-5">
              <div className="text-xs font-semibold text-[var(--td-accent)] uppercase mb-1">
                Pillar 2
              </div>
              <h3 className="text-base font-semibold text-[var(--td-text)] mb-2">
                Career Trust Passport
              </h3>
              <p className="text-xs sm:text-sm text-[var(--td-text-secondary)] leading-relaxed">
                Students maintain sovereign control over their verified academic achievements in a unified digital profile.
              </p>
            </div>

            <div className="td-card td-card--interactive p-5">
              <div className="text-xs font-semibold text-[var(--td-accent)] uppercase mb-1">
                Pillar 3
              </div>
              <h3 className="text-base font-semibold text-[var(--td-accent)] uppercase mb-1">
                Scoped Consent QR
              </h3>
              <p className="text-xs sm:text-sm text-[var(--td-text-secondary)] leading-relaxed">
                Time-expiring QR codes cryptographically bound to specific verified employers prevent unauthorized credential leakage.
              </p>
            </div>

            <div className="td-card td-card--interactive p-5">
              <div className="text-xs font-semibold text-[var(--td-accent)] uppercase mb-1">
                Pillar 4
              </div>
              <h3 className="text-base font-semibold text-[var(--td-text)] mb-2">
                Continuous Identity Chain
              </h3>
              <p className="text-xs sm:text-sm text-[var(--td-text-secondary)] leading-relaxed">
                Persistent checkpoint tracking from application through interview, offer acceptance, and employee onboarding.
              </p>
            </div>
          </div>
        </section>

        {/* Foundation Status & Action Box */}
        <section className="td-section" aria-labelledby="foundation-title">
          <div className="td-card p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 id="foundation-title" className="text-lg font-semibold text-[var(--td-text)] mb-1">
                Phase 1: Frontend Foundation Active
              </h2>
              <p className="text-sm text-[var(--td-text-secondary)] max-w-xl">
                Next.js App Router, TypeScript, Tailwind CSS v4, and the complete TrustDocs dark theme design tokens are successfully initialized and validated.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="td-button td-button--gradient td-button--mobile-full"
                aria-label="Foundation Ready indicator"
              >
                Foundation Operational
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Standard Footer */}
      <footer className="border-t border-[var(--td-border)] py-6 px-4 text-center text-xs text-[var(--td-text-muted)]">
        <p>
          TrustDocs Platform &bull; Built with Next.js, TypeScript &amp; Tailwind CSS &bull; WCAG AA Compliant
        </p>
      </footer>
    </div>
  );
}
