import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container } from "../components/ui";
import Nav from "../components/ui/Nav";
import { ThemeProvider } from "next-themes"
import SocialLinks from "../components/ui/SocialLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brodymouw.com"),
  title: {
    default: "Brody Mouw — Software Engineer",
    template: "%s | Brody Mouw",
  },
  description:
    "Brody Mouw is a full stack software engineer specializing in web and mobile development. Based in Scottsdale, AZ.",
  authors: [{ name: "Brody Mouw", url: "https://brodymouw.com" }],
  keywords: [
    "Brody Mouw",
    "software engineer",
    "full stack developer",
    "web developer",
    "React",
    "TypeScript",
    "C#",
    "ASP.NET",
  ],
  openGraph: {
    type: "website",
    url: "https://brodymouw.com",
    siteName: "Brody Mouw",
    title: "Brody Mouw — Software Engineer",
    description:
      "Full stack software engineer. React, C#, Node.js, TypeScript.",
    images: [{ url: "/images/BrodyGuitar.jpeg", alt: "Brody Mouw" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brody Mouw — Software Engineer",
    description:
      "Full stack software engineer. React, C#, Node.js, TypeScript.",
    images: ["/images/BrodyGuitar.jpeg"],
  },
  alternates: { canonical: "https://brodymouw.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brody Mouw",
              url: "https://brodymouw.com",
              jobTitle: "Software Engineer",
              worksFor: { "@type": "Organization", name: "Sandhills Global" },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "South Dakota State University",
              },
              sameAs: [
                "https://www.linkedin.com/in/Brody-Mouw",
                "https://github.com/brody-mouw",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <header className="border-b border-zinc-100 bg-zinc-200 backdrop-blur dark:border-zinc-800 dark:bg-zinc-800/60">
          <Container>
            <div className="py-4">
              <Nav />
            </div>
          </Container>
        </header>

        <main className="flex-1 py-10">{
          <Container>{children}</Container>
        }</main>

        <footer className="border-t border-zinc-100 bg-zinc-200 py-6 dark:border-zinc-800 dark:bg-zinc-800/60">
          <Container>
            <div className="text-sm text-zinc-600 dark:text-white">© {new Date().getFullYear()} Brody Mouw</div>
          </Container>
          <Container>
            <SocialLinks/>
          </Container>          
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
