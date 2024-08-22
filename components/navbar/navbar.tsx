import { EyeIcon, HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/active-link";

const navItems = [
  { title: "About", href: "/about", icon: EyeIcon },
  { title: "Pricing", href: "/pricing", icon: EyeIcon },
  { title: "Contact", href: "/contact", icon: EyeIcon },
];

export const NavbarComponent = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white rounded">
      
      <Link
        className="text-white btn btn-primary flex items-center"
        href="/"
        >
          <HomeIcon size={16} className="mr-2" />
          <span className="text-xl">Home</span>
      </Link>
      

      <div className="flex flex-1"></div>

      {navItems.map(({ title, href, ...items }) => (
        <ActiveLink path={href} text={title} key={href} />
      ))}
    </nav>
  );
}