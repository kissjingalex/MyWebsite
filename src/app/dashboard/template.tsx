'use client';

import {useState} from "react";

export default function DashboardLayout({
                                          children,
                                        }: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-dashed border-black p-4 w-full mx-auto my-4">
      <h2> Dashboard Template {count}</h2>
      <button className="bg-black text-white p-2 my-4 rounded" onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}
