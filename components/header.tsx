import Link from "next/link";

export function Header() {
  return (
    <header className="bg-[#2a2a2a] border-b-[3px] border-[#7c3aed]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Signature Logo */}
        <Link href="/" className="text-[#d4d4d4]">
          <svg
            viewBox="0 0 100 40"
            className="h-8 w-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Stylized signature "M" with flourish */}
            <path d="M10 30 Q15 10 20 25 Q25 35 30 15 Q35 5 40 20 Q45 30 50 20" />
            <path d="M48 22 Q55 18 60 22 Q65 26 70 20" />
            <path d="M68 18 Q72 14 78 18 Q82 22 85 16" />
          </svg>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          <Link
            href="#home"
            className="text-[#d4d4d4] text-sm hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="text-[#d4d4d4] text-sm hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-[#d4d4d4] text-sm hover:text-white transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-[#d4d4d4] text-sm hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
