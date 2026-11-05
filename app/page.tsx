import { profile, projects, stack } from "@/constants/data";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <div className="wrap">
      <header className="top">
        <span>{profile.name}</span>
        <nav aria-label="Principal">
          <a href="#projetos">Projetos</a>
          <a href="#stack">Stack</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <div className="links">
            <a href="#projetos">Ver projetos</a>
            <a href={profile.github} {...ext}>GitHub</a>
            <a href={profile.linkedin} {...ext}>LinkedIn</a>
          </div>
        </section>

        <section id="projetos">
          <h2>Projetos</h2>
          {projects.map((p) => (
            <article className="project" key={p.title}>
              <div>
                <h3>{p.title}</h3>
                <div className="plinks">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} {...ext}>{l.label}</a>
                  ))}
                </div>
              </div>
              <div>
                <p>{p.description}</p>
                <p className="tags">{p.tags.join(", ")}</p>
              </div>
            </article>
          ))}
        </section>

        <section id="stack">
          <h2>Stack</h2>
          <dl className="stack">
            {stack.map((s) => (
              <div className="row" key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p className="intro">Para conversar sobre vagas, estágios ou projetos, escreva para mim.</p>
          <div className="links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} {...ext}>LinkedIn</a>
            <a href={profile.github} {...ext}>GitHub</a>
          </div>
        </section>
      </main>

      <footer className="foot">© 2026 {profile.name}</footer>
    </div>
  );
}
