'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

const linkData = [
  {
    name: "Performance",
    href: "/performance"
  },
  {
    name: "Reliability",
    href: "/reliability"
  },
  {
    name: "Scale",
    href: "/scale"
  }
]

export default function Header() {
  const pathName = usePathname();

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between items-center text-white p-8 container mx-auto">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((link) => (
              <Link key={link.href} className={pathName === link.href ? "text-purple-500" : ''} href={link.href}>{link.name}</Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
