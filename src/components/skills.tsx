
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const techItems = [
  // ─── Outer ring: Languages + Core Web ───────────────────────────────
  { name: "Python", icon: `${DI}/python/python-original.svg`, angle: 0, ring: "outer" as const },
  { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg`, angle: 24, ring: "outer" as const },
  { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg`, angle: 48, ring: "outer" as const },
  { name: "C", icon: `${DI}/c/c-original.svg`, angle: 72, ring: "outer" as const },
  { name: "C++", icon: `${DI}/cplusplus/cplusplus-original.svg`, angle: 96, ring: "outer" as const },
  { name: "Go", icon: `${DI}/go/go-original.svg`, angle: 120, ring: "outer" as const },
  { name: "Java", icon: `${DI}/java/java-original.svg`, angle: 144, ring: "outer" as const },
  { name: "HTML5", icon: `${DI}/html5/html5-original.svg`, angle: 168, ring: "outer" as const },
  { name: "CSS3", icon: `${DI}/css3/css3-original.svg`, angle: 192, ring: "outer" as const },
  { name: "React", icon: `${DI}/react/react-original.svg`, angle: 216, ring: "outer" as const },
  { name: "Next.js", icon: `${DI}/nextjs/nextjs-original.svg`, angle: 240, ring: "outer" as const, invert: true },
  { name: "Flask", icon: `${DI}/flask/flask-original.svg`, angle: 264, ring: "outer" as const, invert: true },
  { name: "FastAPI", icon: `${DI}/fastapi/fastapi-original.svg`, angle: 288, ring: "outer" as const },
  { name: "Docker", icon: `${DI}/docker/docker-original.svg`, angle: 312, ring: "outer" as const },
  { name: "Git", icon: `${DI}/git/git-original.svg`, angle: 336, ring: "outer" as const },

  // ─── Middle ring: Databases + Cloud + DevOps ────────────────────────
  { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg`, angle: 0, ring: "middle" as const },
  { name: "MySQL", icon: `${DI}/mysql/mysql-original-wordmark.svg`, angle: 36, ring: "middle" as const },
  { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg`, angle: 72, ring: "middle" as const },
  { name: "SQLite", icon: `${DI}/sqlite/sqlite-original.svg`, angle: 108, ring: "middle" as const },
  { name: "Supabase", icon: `${DI}/supabase/supabase-original.svg`, angle: 144, ring: "middle" as const },
  { name: "Prisma", icon: `${DI}/prisma/prisma-original.svg`, angle: 180, ring: "middle" as const },
  { name: "Firebase", icon: `${DI}/firebase/firebase-original.svg`, angle: 216, ring: "middle" as const },
  { name: "Vercel", icon: `${DI}/vercel/vercel-original.svg`, angle: 252, ring: "middle" as const, invert: true },
  { name: "GCP", icon: `${DI}/googlecloud/googlecloud-original.svg`, angle: 288, ring: "middle" as const },
  { name: "Linux", icon: `${DI}/linux/linux-original.svg`, angle: 324, ring: "middle" as const },


  { name: "TensorFlow", icon: `${DI}/tensorflow/tensorflow-original.svg`, angle: 0, ring: "inner" as const },
  { name: "PyTorch", icon: `${DI}/pytorch/pytorch-original.svg`, angle: 51, ring: "inner" as const },
  { name: "Keras", icon: `${DI}/keras/keras-original.svg`, angle: 102, ring: "inner" as const },
  { name: "NumPy", icon: `${DI}/numpy/numpy-original.svg`, angle: 153, ring: "inner" as const },
  { name: "Pandas", icon: `${DI}/pandas/pandas-original.svg`, angle: 204, ring: "inner" as const },
  { name: "OpenCV", icon: `${DI}/opencv/opencv-original.svg`, angle: 255, ring: "inner" as const },
  { name: "Scikit", icon: `${DI}/scikitlearn/scikitlearn-original.svg`, angle: 306, ring: "inner" as const },
];

// ── Extra items that only appear in the tag cloud ────────────────────────────

const cloudOnlyItems = [

  { name: "Neo4j", icon: `${DI}/neo4j/neo4j-original.svg` },
  { name: "SQL Server", icon: `${DI}/microsoftsqlserver/microsoftsqlserver-original.svg` },

  { name: "GitHub", icon: `${DI}/github/github-original.svg`, invert: true },
  { name: "Actions", icon: "/icons/git actions.png" },
  { name: "Netlify", icon: `${DI}/netlify/netlify-original.svg` },
  { name: "WordPress", icon: `${DI}/wordpress/wordpress-original.svg` },

  { name: "Arduino", icon: `${DI}/arduino/arduino-original.svg` },
  { name: "Fritzing", icon: "/icons/fritzing.png" },
  { name: "KiCad", icon: "/icons/kicad.png" },
  { name: "EasyEDA", icon: "/icons/easyeda.png" },
  { name: "Cura", icon: "/icons/cura.png" },

  { name: "AWS", icon: "/icons/aws.png" },
  { name: "Render", icon: "/icons/render.png" },
  { name: "Hostinger", icon: "/icons/hostinger.png" },

  { name: "Postman", icon: `${DI}/postman/postman-original.svg` },
  { name: "DevTools", icon: "/icons/devtools.png" },

  { name: "Figma", icon: `${DI}/figma/figma-original.svg` },
  { name: "Photoshop", icon: `${DI}/photoshop/photoshop-original.svg` },
  { name: "Affinity", icon: "/icons/affinity.png" },
  { name: "Canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
  { name: "Clipchamp", icon: "/icons/clipclamp.png" },
  { name: "OBS", icon: "/icons/OBS.png" },

  { name: "Copilot", icon: "/icons/Copilot.png" },
  { name: "LangChain", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain-color.png" },
  { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "AI Studio", icon: "/icons/googleaistudio.png" },
  { name: "Antigravity", icon: "/icons/antigravity.png" },
  { name: "Codex", icon: "/icons/codex.png" },
  { name: "Ollama", icon: "https://ollama.ai/public/ollama.png" },
  { name: "Cursor", icon: "/icons/cursor.png", invert: true },

  { name: "YAML", icon: "https://www.vectorlogo.zone/logos/yaml/yaml-icon.svg" },
  { name: "JSON", icon: "/icons/json.png" },

  { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
  { name: "Plotly", icon: "https://www.vectorlogo.zone/logos/plotly/plotly-icon.svg" },
  { name: "Seaborn", icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
];

const allItems = [...techItems, ...cloudOnlyItems];

type RadarTech = {
  name: string;
  icon: string;
  angle?: number;
  ring?: "outer" | "middle" | "inner";
  invert?: boolean;
};

const ringRadii = { outer: 44, middle: 30, inner: 16 };
const ringDurations = { outer: 35, middle: 25, inner: 18 };



function TechIcon({ tech }: { tech: RadarTech }) {
  return (
    <div className="group flex flex-col items-center gap-0.5 cursor-default">
      <div
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                    border border-blue-500/30 backdrop-blur-sm
                    group-hover:border-blue-400 group-hover:bg-blue-500/20 group-hover:scale-125
                    transition-all duration-300 overflow-hidden radar-icon-bg"
      >
        <img
          src={tech.icon}
          alt={tech.name}
          width={24}
          height={24}
          loading="lazy"
          className={`w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:brightness-125 transition-all duration-300 ${tech.invert ? 'invert opacity-90' : ''}`}
        />
      </div>
      <span className="text-[7px] sm:text-[8px] text-gray-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {tech.name}
      </span>
    </div>
  );
}

function RingItems({
  ring,
  direction,
}: {
  ring: "outer" | "middle" | "inner";
  direction: 1 | -1;
}) {
  const items = techItems.filter((t) => t.ring === ring);
  const r = ringRadii[ring];
  const dur = ringDurations[ring];

  return (
    <motion.div
      animate={{ rotate: direction * 360 }}
      transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
    >
      {items.map((tech) => {
        const rad = ((tech.angle || 0) * Math.PI) / 180;
        return (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              left: `${50 + r * Math.cos(rad)}%`,
              top: `${50 + r * Math.sin(rad)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ rotate: -direction * 360 }}
            transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
          >
            <TechIcon tech={tech} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative w-full py-12 sm:py-16 md:py-24 overflow-hidden"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">

          <div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                My Skills
              </h2>
              <div className="h-1.5 w-24 bg-gray-600 rounded-full" />
            </motion.div>


            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative flex w-full items-center justify-center mx-auto mt-6 sm:mt-8 lg:mt-12"
            >
              <div className="relative mx-auto w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px]">

                <div className="absolute inset-0 rounded-full border border-blue-500/10" />
                <div className="absolute inset-[14%] rounded-full border border-blue-500/15" />
                <div className="absolute inset-[28%] rounded-full border border-blue-500/25" />
                <div className="absolute inset-[42%] rounded-full border-2 border-blue-500/40" />


                <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
                <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />


                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 glow-blue animate-pulse-glow-blue z-10" />


                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left radar-scan-line"
                  />
                </motion.div>


                <RingItems ring="outer" direction={1} />
                <RingItems ring="middle" direction={-1} />
                <RingItems ring="inner" direction={1} />
              </div>
            </motion.div>
          </div>

          {/* ── Tag cloud (all skills) ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-wrap gap-2 justify-between">
              {allItems.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.02 }}
                  className="px-3 py-2 text-xs sm:text-sm leading-normal rounded-lg
                             border border-white/10 backdrop-blur-md
                             text-gray-300 whitespace-nowrap
                             hover:border-blue-400/60 hover:text-white
                             hover:bg-blue-500/10 transition-all duration-300
                             flex items-center gap-1.5 cursor-default skill-tag-bg"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    width={16}
                    height={16}
                    loading="lazy"
                    className={`w-4 h-4 object-contain flex-shrink-0 ${tech.invert ? 'invert opacity-90' : ''}`}
                  />
                  <span>{tech.name}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
