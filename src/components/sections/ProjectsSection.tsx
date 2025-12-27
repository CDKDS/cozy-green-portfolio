import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EcoTrack Dashboard",
    description: "A sustainability tracking platform that helps organizations monitor and reduce their carbon footprint through data-driven insights.",
    technologies: ["React", "TypeScript", "Chart.js", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Mindful Notes",
    description: "A minimalist note-taking app with markdown support and cloud sync. Designed for focus and clarity.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "DevFlow CLI",
    description: "An open-source command-line tool that streamlines development workflows with automated task running and project scaffolding.",
    technologies: ["Node.js", "TypeScript", "Commander.js"],
    github: "#",
  },
  {
    id: 4,
    title: "Recipe Finder API",
    description: "RESTful API service that aggregates recipes from multiple sources with smart filtering and nutritional analysis.",
    technologies: ["Python", "FastAPI", "Redis", "Docker"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="min-h-screen px-6 py-24 pt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm tracking-wide uppercase mb-2">What I've Built</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-matcha-light flex items-center justify-center">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground"
                  >
                    {tech}
                    {project.technologies.indexOf(tech) < project.technologies.length - 1 && (
                      <span className="ml-2">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
