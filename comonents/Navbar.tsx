import { Link } from "@/comonents/Link";
import { Logo } from "@/comonents/Logo";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Navbar = () => (
  <nav className="justify-between w-full items-center font-mono text-lg fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl">
    <Logo />
    <div className="flex">
      <Link href="https://github.com/agaskrobot">
        <FiGithub size={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/agnieszkaskrobot/">
        <FiLinkedin size={24} />
      </Link>
    </div>
  </nav>
);
