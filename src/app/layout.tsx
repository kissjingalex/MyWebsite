import "./globals.css";

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning={false}>
    <body>
    {children}
    </body>
    </html>
  );
}
