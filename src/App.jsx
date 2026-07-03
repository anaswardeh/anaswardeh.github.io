import { useState } from 'react'

// Copy is final and approved per design_handoff_portfolio_site/README.md — do not rewrite.

const NAV = [
  { num: '01', label: 'WORK', href: '#work' },
  { num: '02', label: 'SYSTEMS', href: '#systems' },
  { num: '03', label: 'LEADERSHIP', href: '#leadership' },
  { num: '04', label: 'TEACHING', href: '#teaching' },
  { num: '05', label: 'PRINCIPLES', href: '#principles' },
]

const PROOF = [
  { value: '20+ YEARS', label: 'DATA AND SOFTWARE' },
  { value: '3 CONTINENTS', label: 'GLOBAL AND PUBLIC-SECTOR WORK' },
  { value: 'ARCHITECT + BUILDER', label: 'STRATEGY THROUGH DELIVERY' },
  { value: 'EDUCATOR', label: 'UNIVERSITY AND PROFESSIONAL TEACHING' },
]

const SYSTEMS = [
  {
    id: 'SYSTEM 01',
    classification: 'DEFENSE / 2024→',
    title: 'Enterprise Readiness & Accountability Platform',
    layout: 'cols-3',
    fields: [
      {
        label: 'MISSION',
        text: 'A trusted operational view — personnel, training, finance — from fragmented systems and spreadsheets.',
      },
      {
        label: 'ARCHITECTURE DECISION',
        text: 'Governed metric definitions and semantic models first, built on the platform already owned.',
      },
      {
        label: 'RESULT',
        text: 'Five production analytics products; hours of manual consolidation replaced by refreshes in minutes.',
      },
    ],
    role: 'MY ROLE — ARCHITECTURE · DATA ENGINEERING · GOVERNANCE · STAKEHOLDER ALIGNMENT',
  },
  {
    id: 'SYSTEM 02',
    classification: 'ENTERPRISE CONSULTING / 2021–2024',
    title: 'Production Analytics Pipeline Platform',
    layout: 'split',
    fields: [
      {
        label: 'MISSION',
        text: 'An enterprise analytics pipeline was too slow and unpredictable to support dependable reporting.',
      },
      {
        label: 'ARCHITECTURE DECISION',
        text: 'Treat the workflow itself as the product — query tuning, Spark optimization, and orchestration redesign.',
      },
      {
        label: 'RESULT',
        text: 'A predictable nightly pipeline the business could schedule around.',
      },
    ],
    role: 'MY ROLE — TECH LEAD · PIPELINE ARCHITECTURE · MENTORING · PRODUCTION OWNERSHIP',
  },
  {
    id: 'SYSTEM 03',
    classification: 'INTERNATIONAL ORGANIZATION / 2005–2019',
    title: 'Global Reporting & Multilingual Publishing Infrastructure',
    layout: 'cols-3',
    fields: [
      {
        label: 'MISSION',
        text: 'Support operational reporting and official multilingual publishing across United Nations offices in New York and Geneva.',
      },
      {
        label: 'ARCHITECTURE DECISION',
        text: 'Maintain ETL from conference-management systems into the enterprise reporting warehouse while helping establish a Digital Publishing Unit for accessible Arabic ePub and HTML delivery.',
      },
      {
        label: 'RESULT',
        text: 'Moved official Arabic publications from desktop-bound processes into accessible digital formats for Member States, diplomats, and global public audiences, while sustaining SQL- and SSRS-based operational reporting.',
      },
    ],
    role: 'MY ROLE — DATA WAREHOUSING · BI · DIGITAL PUBLISHING · MULTILINGUAL CONTENT OPERATIONS',
  },
]

const LAYERS = [
  { tag: 'L5', name: 'DECISIONS', desc: 'Executive reporting / operational answers / trusted measures' },
  { tag: 'L4', name: 'MEANING', desc: 'Semantic models / KPI definitions / business ownership' },
  { tag: 'L3', name: 'HISTORY', desc: 'Dimensional warehouse / lakehouse / auditability' },
  { tag: 'L2', name: 'ENGINEERING', desc: 'Pipelines / quality controls / orchestration / observability' },
  { tag: 'L1', name: 'REALITY', desc: 'Fragmented systems / spreadsheets / documents / changing requirements', dashed: true },
]

const RAIL = [
  { head: 'OWNERSHIP', body: 'Every measure has a named business owner.' },
  { head: 'TRACEABILITY', body: 'Every number can be walked back to its source.' },
  { head: 'SUSTAINABILITY', body: 'The system outlives its architect.' },
]

const LEADERSHIP = [
  {
    head: 'DIRECTION',
    body: 'Architecture, strategy, roadmap, priorities — deciding what should be built and in what order.',
  },
  {
    head: 'EXECUTION',
    body: 'Engineering standards, delivery, quality controls, root-cause analysis — routine, not rescue.',
  },
  {
    head: 'CAPABILITY',
    body: "Mentoring, ownership, operating models — building teams that don't route every decision through one person.",
  },
]

const PRINCIPLES = [
  {
    tag: 'P-01',
    title: 'Architecture before tools',
    body: 'The problem determines the system. The product catalog does not.',
  },
  {
    tag: 'P-02',
    title: 'Define the measure before the dashboard',
    body: 'A visual cannot correct an undefined or unowned metric.',
  },
  {
    tag: 'P-03',
    title: 'Historical truth must be designed',
    body: 'Current-state reporting is easy. Reconstructing what changed, when, and why requires architecture.',
  },
  {
    tag: 'P-04',
    title: 'Build teams that outlive the architect',
    body: 'A system is not sustainable when every decision flows through one person.',
  },
  {
    tag: 'P-05',
    title: 'Make complexity understandable',
    body: 'Good architecture reduces cognitive load — for engineers, leaders, and users.',
  },
]

const LINKS = {
  email: 'anaswardeh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohammed-wardeh/',
  github: 'https://github.com/anaswardeh',
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a href="#top" className="wordmark">
        WARDEH.M / DATA ARCHITECT
      </a>
      <nav className="nav-desktop" aria-label="Primary">
        {NAV.map((n) => (
          <a key={n.num} href={n.href}>
            {n.num} {n.label}
          </a>
        ))}
        <a href="#contact" className="nav-contact">
          CONTACT
        </a>
      </nav>
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? 'CLOSE' : 'MENU'}
      </button>
      {open && (
        <nav className="nav-mobile" id="mobile-menu" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.num} href={n.href} onClick={() => setOpen(false)}>
              {n.num} {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            06 CONTACT
          </a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">DATA ARCHITECTURE / ENGINEERING LEADERSHIP / PUBLIC SERVICE</p>
      <h1>I turn fragmented data and difficult missions into systems people can trust.</h1>
      <p className="lede">
        Data architect, engineering leader, and educator with more than twenty years of
        experience. I build governed data platforms, historical warehouses, analytical
        products — and the teams needed to sustain them.
      </p>
      <div className="btn-row">
        <a href="#work" className="btn-solid">
          VIEW SELECTED SYSTEMS →
        </a>
        <a href="#principles" className="btn-outline">
          READ MY OPERATING PRINCIPLES
        </a>
      </div>
      <div className="proof">
        {PROOF.map((p) => (
          <div key={p.value} className="proof-cell">
            <p className="proof-value">{p.value}</p>
            <p className="proof-label">{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ num, title, caption, onDark }) {
  return (
    <div className="section-heading">
      <span className={onDark ? 'sec-num on-dark' : 'sec-num'}>{num}</span>
      <h2 className={onDark ? 'on-dark' : ''}>{title}</h2>
      {caption && <span className="sec-caption">{caption}</span>}
    </div>
  )
}

function CodePanel() {
  return (
    <div className="code-panel">
      <p className="c-comment">-- nightly ETL, before and after redesign</p>
      <p className="c-line">
        runtime_before&nbsp;&nbsp;=&nbsp;&nbsp;<span className="c-before">1h 50m</span>
      </p>
      <p className="c-line">
        runtime_after&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;<span className="c-after">8m 30s</span>
      </p>
      <p className="c-comment dim">-- 92% reduction, same hardware</p>
    </div>
  )
}

function Field({ label, text }) {
  return (
    <div className="field">
      <p className="field-label">{label}</p>
      <p className="field-text">{text}</p>
    </div>
  )
}

function SystemCard({ system }) {
  return (
    <article className="brief">
      <div className="brief-head">
        <span className="brief-id">{system.id}</span>
        <span className="brief-class">{system.classification}</span>
      </div>
      {system.layout === 'split' ? (
        <div className="brief-body split">
          <div className="split-left">
            <h3>{system.title}</h3>
            {system.fields.map((f) => (
              <Field key={f.label} {...f} />
            ))}
          </div>
          <CodePanel />
        </div>
      ) : (
        <div className={`brief-body ${system.layout}`}>
          <h3 className="span-all">{system.title}</h3>
          {system.fields.map((f) => (
            <Field key={f.label} {...f} />
          ))}
        </div>
      )}
      <div className="brief-foot">
        <span className="brief-role">{system.role}</span>
      </div>
    </article>
  )
}

function Work() {
  return (
    <section id="work" className="section sec-work">
      <div className="container">
        <SectionHeading num="01" title="Selected Systems" caption="SANITIZED TECHNICAL BRIEFS" />
        <div className="briefs">
          {SYSTEMS.map((s) => (
            <SystemCard key={s.id} system={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Systems() {
  return (
    <section id="systems" className="section sec-systems">
      <div className="container">
        <SectionHeading num="02" title="How I structure a platform" />
        <p className="sec-intro">
          Every engagement starts as L1 — reality — and earns its way up. The platform is
          the deliverable. The principles are what allow it to endure.
        </p>
        <div className="model">
          <div className="layers">
            {LAYERS.map((l, i) => (
              <div key={l.tag} className="layer-wrap">
                {i > 0 && <div className="tick" aria-hidden="true" />}
                <div className={l.dashed ? 'layer dashed' : 'layer'}>
                  <span className="layer-tag">{l.tag}</span>
                  <span className="layer-name">{l.name}</span>
                  <span className="layer-desc">{l.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rail">
            {RAIL.map((r) => (
              <div key={r.head} className="rail-block">
                <p className="rail-head">{r.head}</p>
                <p className="rail-body">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section id="leadership" className="section sec-leadership">
      <div className="container">
        <SectionHeading num="03" title="Leadership" onDark />
        <p className="sec-intro on-dark">
          The pipelines matter less than the decisions around them — and how the team
          executes without the architect becoming the bottleneck.
        </p>
        <div className="lead-cols">
          {LEADERSHIP.map((c) => (
            <div key={c.head} className="lead-col">
              <p className="lead-head">{c.head}</p>
              <p className="lead-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Teaching() {
  return (
    <section id="teaching" className="section sec-teaching">
      <div className="container">
        <SectionHeading num="04" title="Teaching" />
        <p className="teaching-statement">
          Teaching is how I test whether a system is understandable. If I can&rsquo;t
          explain it to a graduate class of working professionals, it isn&rsquo;t
          finished.
        </p>
        <div className="credentials">
          <p className="cred-schools">
            UMGC&ensp;·&ensp;RUTGERS UNIVERSITY&ensp;·&ensp;BARUCH COLLEGE (CUNY)
          </p>
          <p className="cred-subjects">
            DATA SCIENCE · DATABASES · SQL · SOFTWARE ENGINEERING · STATISTICAL MODELING
          </p>
          <p className="cred-degrees">
            M.S. CANDIDATE, APPLIED &amp; COMPUTATIONAL MATHEMATICS — JOHNS HOPKINS
            UNIVERSITY&ensp;·&ensp;M.S. CIS, BOSTON UNIVERSITY&ensp;·&ensp;B.A. ENGLISH
            LITERATURE
          </p>
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section id="principles" className="section sec-principles">
      <div className="container">
        <SectionHeading num="05" title="Operating Principles" />
        <div className="p-grid">
          {PRINCIPLES.map((p) => (
            <div key={p.tag} className="p-cell">
              <p className="p-tag">{p.tag}</p>
              <h3>{p.title}</h3>
              <p className="p-body">{p.body}</p>
            </div>
          ))}
          <div className="p-cell p-note">
            <p>
              Before I was a data architect I studied English literature. Both disciplines
              are the same job: find the structure that makes a difficult text legible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section sec-contact">
      <p className="eyebrow">CONTACT</p>
      <h2>Have a difficult mission?</h2>
      <p className="contact-body">
        Bring me the mission, the constraints, and the systems that are not working
        together.
      </p>
      <p className="contact-location">
        WASHINGTON, D.C. · DATA ARCHITECTURE AND ENGINEERING LEADERSHIP
      </p>
      <div className="btn-row center">
        <a href={`mailto:${LINKS.email}`} className="btn-solid">
          ANASWARDEH@GMAIL.COM
        </a>
        <a href={LINKS.linkedin} className="btn-outline" target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
        <a href={LINKS.github} className="btn-outline" target="_blank" rel="noreferrer">
          GITHUB
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 MOHAMMED WARDEH</span>
      <span>DRAWN, THEN BUILT.</span>
    </footer>
  )
}

export default function App() {
  return (
    <div className="sheet">
      <Header />
      <main>
        <Hero />
        <Work />
        <Systems />
        <Leadership />
        <Teaching />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
