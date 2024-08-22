'use client'

import Link from "next/link";
import style from "./active-link.module.css";
import { usePathname } from "next/navigation";

interface IProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: IProps) => {

  const pathName = usePathname();

  return (
    <Link
      className={`${style.link} ${pathName === path && style['active-link']}`}
      href={path}
      >
        <span className="text-xl">{text}</span>
    </Link>
  );
}