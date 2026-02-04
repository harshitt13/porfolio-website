"use client";

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
    icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: <Folder className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />,
  },
  {
    label: "Resume",
    href: "https://github.com/harshitt13/resume",
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />,
    isExternal: true,
  },
  {
    label: "Links",
    href: "https://linktr.ee/harshitt13",
    icon: <LinkIcon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />,
    isExternal: true,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />,
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
        const headerHeight = window.innerWidth < 768 ? 70 : 80;
        const offsetTop = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg shadow-2xl"
          : "bg-black/70 backdrop-blur-sm"
      }`}
    >
      {/* Mobile-optimized container */}
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <ul className="flex items-center justify-between sm:justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-5 lg:gap-8 py-2.5 sm:py-3 md:py-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const isInternal = !item.isExternal;

            return (
              <li key={item.label} className="flex-shrink-0">
                <a
                  href={item.href}
                  onClick={(e) => isInternal && handleClick(e, item.href)}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    group relative flex flex-col items-center justify-center
                    gap-0.5 sm:gap-1 md:flex-row md:gap-2
                    min-w-[60px] sm:min-w-[70px] md:min-w-0
                    px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-2.5 lg:px-5 lg:py-3
                    rounded-xl sm:rounded-2xl md:rounded-2xl
                    transition-all duration-300 ease-out
                    active:scale-95
                    ${
                      isActive
                        ? "text-white bg-white/20 shadow-lg shadow-white/10 scale-105"
                        : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"
                    }
                  `}
                >
                  {/* Icon with animation */}
                  <span
                    className={`
                      transition-all duration-300
                      ${
                        isActive
                          ? "scale-110 drop-shadow-lg"
                          : "group-hover:scale-110 group-hover:drop-shadow-md"
                      }
                    `}
                  >
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span
                    className={`
                      text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base 
                      font-medium tracking-tight sm:tracking-normal
                      whitespace-nowrap
                      transition-all duration-300
                      ${isActive ? "font-semibold" : "font-medium"}
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator - mobile only */}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full md:hidden animate-pulse" />
                  )}

                  {/* Glow effect on hover/active */}
                  <span
                    className={`
                      absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-2xl
                      transition-opacity duration-300
                      ${
                        isActive
                          ? "opacity-100 bg-gradient-to-br from-white/10 to-transparent"
                          : "opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent"
                      }
                    `}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom border with gradient */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}