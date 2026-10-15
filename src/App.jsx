import './App.css'

const projects = [
  {name: 'PowerMesh', repo: 'POWERMESH', area: 'Distributed computing', description: 'A coordinator and provider-agent system for sharing bounded compute workloads across devices.'},
  {name: 'MIRA', repo: 'MIRA', area: 'Autonomous publishing', description: 'A source-backed editorial platform with a decision ledger, scheduled runs, and a public feed.'},
  {name: 'TRISHUL', repo: 'TRISHUL', area: 'Financial fraud intelligence', description: 'An evidence-led investigation workflow for transaction tracing, exposure ranges, and risk assessment.'},
  {name: 'Margin', repo: 'Margin', area: 'Frontend engineering', description: 'A reading and writing workspace with search, local drafts, bookmarks, and collection backups.'},
]

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#main" className="wordmark">Kavya Jain<span> / software developer</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="https://github.com/kavya-jain14">GitHub ↗</a></nav>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Computer science · ABES Engineering College</p>
          <h1 id="intro-title">I build systems.<br /><span>Then work through the details.</span></h1>
          <p className="lede">I’m Kavya, a computer science student working across full-stack applications, backend reliability, and DSA in C++. My projects explore what happens beyond the interface: data, execution, failure, and recovery.</p>
          <a className="text-link" href="#work">Explore selected work ↓</a>
        </section>
        <section id="work" aria-labelledby="work-title">
          <div className="section-heading"><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Things I’m building</h2></div>
          <div className="projects">{projects.map((project, index) => <article className="project" key={project.repo}>
            <span className="project-number">0{index + 1}</span>
            <div><p className="eyebrow">{project.area}</p><h3><a href={`https://github.com/kavya-jain14/${project.repo}`}>{project.name} ↗</a></h3><p>{project.description}</p></div>
            <span className="project-note">Source & development history</span>
          </article>)}</div>
        </section>
        <section id="about" className="about" aria-labelledby="about-title">
          <p className="eyebrow">02 / Behind the work</p><h2 id="about-title">Learning by building,<br />and by debugging.</h2>
          <p>I’m pursuing B.Tech in Computer Science at ABES Engineering College. I work with React, TypeScript, Node.js, and PostgreSQL, and practice problem solving in C++.</p>
          <p>I’m interested in software engineering internship opportunities and projects that demand thoughtful interfaces and dependable backend behavior.</p>
          <a className="text-link" href="https://github.com/kavya-jain14">Find me on GitHub ↗</a>
        </section>
      </main>
      <footer><span>Kavya Jain</span><span>Built with React and Vite.</span></footer>
    </>
  )
}
