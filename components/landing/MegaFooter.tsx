const COLS = [
  {
    title: "Shastra",
    links: [
      { label: "Bhakti Music", href: "/shastra#shastra-detail" },
      { label: "Pravachanas", href: "/shastra#shastra-detail" },
      { label: "Indic Studies", href: "/shastra#shastra-detail" },
      { label: "Children's Corner", href: "/shastra" },
    ],
  },
  {
    title: "Dharma",
    links: [
      { label: "Daily Panchanga", href: "/dharma#dharma-detail" },
      { label: "Festivals", href: "/dharma#dharma-detail" },
      { label: "Vrata & Upavasa", href: "/dharma#dharma-detail" },
      { label: "Teertha Yatra", href: "/dharma#dharma-detail" },
    ],
  },
  {
    title: "Karma",
    links: [
      { label: "11 Homas", href: "/karma#annual-homa" },
      {
        label: "Shani Jayanthi Sankalpa 2026",
        href: "/shani-jayanthi-sankalpa-seva-2026",
      },
      { label: "Book Pooja", href: "/karma#offerings" },
      { label: "Jyotishya", href: "/karma#offerings" },
      { label: "Puja Products", href: "/shop" },
    ],
  },
  {
    title: "Daana",
    links: [
      { label: "Temple Daana", href: "/daana#daana-detail" },
      { label: "Goshala Seva", href: "/daana#daana-detail" },
      { label: "Vidyadana", href: "/daana#daana-detail" },
      { label: "Annadana", href: "/daana#daana-detail" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/support" },
      { label: "Become a Service Provider", href: "/support" },
      { label: "List a Temple / Goshala", href: "/support" },
      { label: "Terms", href: "/support" },
      { label: "Privacy", href: "/support" },
      { label: "Refund Policy", href: "/support" },
    ],
  },
] as const;

export function MegaFooter() {
  return (
    <footer className="ld-footer">
      <div className="container">
        <div className="ld-footer-grid">
          <div className="ld-footer-brand">
            <strong>mySwadharma</strong>
            <p>
              Learn · Observe · Perform · Give — a curated platform for
              practicing Hindu families.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title} className="ld-footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ld-footer-bottom">
          <span>© {new Date().getFullYear()} mySwadharma</span>
          <span lang="sa">हरि ॐ तत् सत्</span>
        </div>
      </div>
    </footer>
  );
}
