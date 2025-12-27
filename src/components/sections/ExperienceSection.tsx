import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "TechFlow Inc.",
    period: "2022 - Present",
    description: "Leading frontend architecture and mentoring junior developers. Building scalable React applications with TypeScript.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "DataWave Solutions",
    period: "2020 - 2022",
    description: "Developed data visualization dashboards and real-time analytics tools for enterprise clients.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartUp Labs",
    period: "2018 - 2020",
    description: "Full-stack development for early-stage startups. Wore many hats and learned fast.",
    technologies: ["JavaScript", "React", "Express", "MongoDB"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="min-h-screen px-6 py-24 pt-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm tracking-wide uppercase mb-2">My Journey</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-0 md:pl-20 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
