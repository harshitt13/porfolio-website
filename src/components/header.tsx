
import { useEffect, useState, useCallback } from "react";
import {
  Home,
  Folder,
  FileText,
  Link as LinkIcon,
  Mail,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#hero",
    icon: <Home className="w-4 h-4" strokeWidth={2} />,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: <Folder className="w-4 h-4" strokeWidth={2} />,
  },
  {
    label: "Resume",
    href: "https://github.com/harshitt13/resume/blob/main/Harshit_Kushwaha_Resume.pdf",
    icon: <FileText className="w-4 h-4" strokeWidth={2} />,
    isExternal: true,
  },
  {
    label: "Links",
    href: "https://linktr.ee/harshitt13",
    icon: <LinkIcon className="w-4 h-4" strokeWidth={2} />,
    isExternal: true,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <Mail className="w-4 h-4" strokeWidth={2} />,
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 10);

    const sections = document.querySelectorAll("section[id]");
    const scrollOffset = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute("id") || "";

      if (
        scrollOffset >= sectionTop &&
        scrollOffset < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });
  }, []);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = 80;
        const offsetTop = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          mt-3 sm:mt-4
          px-2 sm:px-3 py-1.5 sm:py-2
          rounded-full
          border
          transition-all duration-500 ease-out
          ${isScrolled
            ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/30"
            : "bg-black/50 backdrop-blur-md border-white/5"
          }
        `}
      >
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const isInternal = !item.isExternal;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => isInternal && handleClick(e, item.href)}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    group relative flex items-center gap-1.5
                    px-3 py-2 sm:px-4 sm:py-2.5
                    rounded-full
                    text-xs sm:text-sm font-medium
                    transition-all duration-300 ease-out
                    active:scale-95
                    ${isActive
                      ? "text-white bg-white/15 shadow-inner"
                      : "text-white/60 hover:text-white hover:bg-white/8"
                    }
                  `}
                >
                  <span
                    className={`
                      transition-transform duration-300
                      ${isActive ? "scale-110" : "group-hover:scale-110"}
                    `}
                  >
                    {item.icon}
                  </span>


                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}