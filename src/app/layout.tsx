import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rebeca Lima",
  description: "Sistema para gerenciamentos de clientes e ativos Rebeca Lima",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/img/icon-light.png",
        href: "/img/icon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/img/icon-dark.png",
        href: "/img/icon-dark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
