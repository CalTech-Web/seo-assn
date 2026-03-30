import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seoassn.com"),
  title: "The SEO Association | Free SEO Tools for Small Business Owners",
  description:
    "Find out if your website is showing up on Google. Free SEO audit checklist, keyword difficulty quiz, pricing guide, and personalized SEO brief generator for small business owners.",
  keywords: [
    "how much does SEO cost",
    "do I need SEO for my small business",
    "how to rank on Google",
    "SEO audit checklist small business",
    "local SEO pricing",
    "what is SEO and how does it work",
    "how long does SEO take",
    "SEO for small business owners",
    "is SEO worth it for small business",
    "how to improve Google ranking",
  ],
  openGraph: {
    title: "The SEO Association | Free SEO Tools for Small Business Owners",
    description:
      "Free SEO audit checklist, keyword quiz, pricing guide, and brief generator. Understand, evaluate, and invest in SEO with confidence.",
    url: "https://seoassn.com",
    siteName: "The SEO Association",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The SEO Association | Free SEO Tools for Small Business",
    description:
      "Free tools to check your SEO, understand keyword difficulty, see real pricing, and build your SEO roadmap.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://seoassn.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
