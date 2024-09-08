'use client';

import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

const linkData = [
  {
    name: "About",
    href: "/dashboard/about",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
]

export default function DashboardLayout({
                                          children,
                                        }: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto my-4">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {
          linkData.map((link) => (
            <Link key={link.href} className={pathName === link.href ? "text-purple-500" : ''} href={link.href}>{link.name}</Link>
          ))
        }
      </div>
      <h2> Dashboard Layout {count}</h2>
      <button className="bg-black text-white p-2 my-4 rounded" onClick={() => setCount(count + 1)}>Increment</button>
        {children}
    </div>
  );
}
