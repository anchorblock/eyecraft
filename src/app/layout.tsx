import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EyeCraft - Premium Eyewear for Every Vision",
  description:
    "Discover handcrafted eyewear that blends style with precision. Shop eyeglasses, sunglasses, and experience virtual try-on technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-primary text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
