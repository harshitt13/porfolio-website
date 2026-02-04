"use client";

import { useEffect, useState } from "react";
import { Home, Folder, FileText, Link as LinkIcon, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#hero",
    icon: <Home size={20} />,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: <Folder size={20} />,
  },
  {
    label: "Resume",
    href: "https://github.com/harshitt13/resume",
    icon: <FileText size={20} />,
  },
  {
    label: "Links",
    href: "https://linktr.ee/harshitt13",
    icon: <LinkIcon size={20} />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <Mail size={20} />,
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          body {
            padding-bottom: 70px;
          }
        }
      `}</style>
      <div className="flex justify-center w-full">
        <nav className="fixed flex left-0 right-0 z-[100] bg-[#141414]/60 border border-t border-white/10 text-white backdrop-blur-xl transition-all md:top-0 md:bottom-auto bottom-0 md:w-[45rem] rounded-t-2xl md:rounded-full md:mt-6 md:mx-auto">
          <div className="container mx-auto flex justify-center items-center p-3">
            <ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.label} className="flex-1 md:flex-none">
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`flex flex-col items-center gap-1 transition-colors text-xs md:text-base ${
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white/90"
                      }`}
                    >
                      <span className="md:hidden flex items-center justify-center w-6 h-6">
                        {item.icon}
                      </span>
                      <span className="hidden md:inline-block">
                        {item.label}
                      </span>
                      <span className="md:hidden">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
