import { PromptLine } from './prompt-line'

const skillsData: Record<string, string[]> = {
  "Programming Languages": ["python", "javascript", "typescript", "c", "c++", "go", "java", "html", "css"],
  "Hardware & Prototyping": ["arduino", "fritzing", "kicad", "easyeda", "ultimaker-cura"],
  "Machine Learning & Data Science": ["tensorflow", "keras", "pytorch", "scikit_learn", "numpy", "pandas", "matplotlib", "plotly", "opencv", "seaborn"],
  "Web Development Frameworks": ["react", "nextjs", "flask", "fastapi"],
  "Databases": ["postgresql", "mysql", "sqlite", "sqlserver", "neo4j", "mongodb", "prisma", "supabase"],
  "DevOps & Environments": ["git", "github", "github-actions", "docker", "wsl"],
  "Cloud & Hosting Platforms": ["aws", "gcp", "firebase", "vercel", "netlify", "render", "hostinger", "wordpress", "google-search-console"],
  "Testing & APIs": ["postman", "fastapi", "axe-devtools"],
  "Design & Creativity": ["figma", "affinity", "photoshop", "canva", "clipchamp", "obs"],
  "AI & LLMs": ["copilot", "anthropic", "langchain", "huggingface", "google-ai", "google-antigravity", "code-rabbit", "codex", "ollama", "cursor"],
  "Configuration & Data Formats": ["yaml", "json", "xml"]
}

export function SkillsSection() {
  const categories = Object.entries(skillsData)

  return (
    <section id="skills" className="space-y-3">
      <PromptLine command="cat skills.json" />
      
      <div className="bg-[#1b1714] border border-[#2c2620] rounded p-4 text-sm leading-relaxed">
        <div className="text-[#6b6560]">{`{`}</div>
        <div className="ml-4 space-y-2">
          {categories.map(([category, skills], categoryIndex) => (
            <div key={category}>
              <span className="text-[#7fd8e8]">&quot;{category}&quot;</span>
              <span className="text-[#6b6560]">: [</span>
              <div className="ml-4 flex flex-wrap">
                {skills.map((skill, index) => (
                  <span key={skill} className="mr-2">
                    <span className="text-[#ffb648]">&quot;{skill}&quot;</span>
                    {index < skills.length - 1 && <span className="text-[#6b6560]">,</span>}
                  </span>
                ))}
              </div>
              <span className="text-[#6b6560]">]</span>
              {categoryIndex < categories.length - 1 && <span className="text-[#6b6560]">,</span>}
            </div>
          ))}
        </div>
        <div className="text-[#6b6560]">{`}`}</div>
      </div>
    </section>
  )
}
