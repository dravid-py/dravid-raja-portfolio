import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/progress/ScrollProgress";
import { BrandedLoader } from "@/components/loading/BrandedLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#080412",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dravid-raja-portfolio.vercel.app"),
  title: "Dravid Raja N | MSc AI & Data Science | Developer Portfolio",
  description:
    "Official portfolio of Dravid Raja N — MSc Artificial Intelligence & Data Science student, Python developer, and creator of CodeHealth-AI and DriveGuard. Explore projects, technical skills, and research background.",
  authors: [{ name: "Dravid Raja N" }],
  creator: "Dravid Raja N",
  keywords: [
    "Dravid Raja",
    "Dravid Raja N",
    "Artificial Intelligence",
    "Data Science",
    "Python Developer",
    "CodeHealth-AI",
    "DriveGuard",
    "Machine Learning",
    "Flask",
    "SQL",
  ],
  openGraph: {
    title: "Dravid Raja N | MSc AI & Data Science | Developer Portfolio",
    description:
      "Official portfolio of Dravid Raja N — MSc Artificial Intelligence & Data Science student, Python developer, and creator of CodeHealth-AI.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 1000,
        alt: "Dravid Raja N Profile",
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
    <html lang="en" data-theme="dark" className={inter.variable}>
      <head>
        {/* Zero-hydration-flash theme initializer script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('portfolio-theme');
                if (savedTheme === 'light' || savedTheme === 'dark') {
                  document.documentElement.dataset.theme = savedTheme;
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ScrollProgress />
        <BrandedLoader />
        {children}
      </body>
    </html>
  );
}
