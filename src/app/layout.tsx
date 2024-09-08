import "./globals.css";
import { Comforter } from 'next/font/google'

const inter = Comforter({
  subsets: ['latin'],
  weight: "400",
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressContentEditableWarning={false}>
    <body>
    {children}
    </body>
    </html>
  );
}
