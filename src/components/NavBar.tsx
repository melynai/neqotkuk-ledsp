import { Link, useLocation } from "react-router-dom";
import melynLogo from "@/assets/melyn-logo.png";

const navLinks = [
  { label: "Overview", to: "/#overview" },
  { label: "Approach", to: "/#approach" },
  { label: "Digital Plan", to: "/digital-plan" },
  { label: "melyn Brain", to: "/melyn-brain" },
  
  { label: "Team", to: "/team" },
  { label: "Budget", to: "/#budget" },
  { label: "Schedule", to: "/gantt" },
  { label: "Resumes", to: "/resumes" },
  { label: "Checklist", to: "/checklist" },
];

const NavBar = () => {
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        e.preventDefault();
        const id = href.slice(2);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={melynLogo} alt="melyn" className="h-8" />
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              onClick={(e) => handleAnchorClick(e, link.to)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/8 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
