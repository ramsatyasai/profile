import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundWrapper } from "@/components/background-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://profile-six-nu-71.vercel.app"),
  title: {
    default: "Dhritv | Elite Software & Automation Agency",
    template: "%s | Dhritv",
  },
  description:
    "Dhritv builds high-performance AI, automation, and 3D web experiences. Premium software agency for ambitious founders seeking digital excellence.",
  keywords: [
    "Software Agency",
    "Automation",
    "AI Integration",
    "Next.js",
    "3D Web Design",
    "Dhritv",
    "Business Automation",
    "Custom Software",
  ],
  authors: [{ name: "Dhritv Team", url: "https://profile-six-nu-71.vercel.app" }],
  creator: "Dhritv",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://profile-six-nu-71.vercel.app",
    title: "Dhritv | Elite Software & Automation Agency",
    description:
      "Dhritv builds high-performance AI, automation, and 3D web experiences. Premium software agency for ambitious founders.",
    siteName: "Dhritv",
    images: [
      {
        url: "/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Dhritv - Elite Software & Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhritv | Elite Software & Automation Agency",
    description:
      "Dhritv builds high-performance AI, automation, and 3D web experiences.",
    images: ["/assets/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-foreground selection:bg-primary/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundWrapper />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
