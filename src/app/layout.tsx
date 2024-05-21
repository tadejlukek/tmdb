import "./globals.css";

import { Source_Sans_3 } from "next/font/google";
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <main className="container mx-auto my-8 px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
