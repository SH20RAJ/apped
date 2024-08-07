import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Apped - Download, Share, and Manage Your Apps",
  description:
    "Apped is a platform for downloading, sharing, and managing your apps.",
  image: "/logo.png",
  url: "https://apped.me",
  type: "website",
  siteName: "Apped",
  twitter: {
    site: "@appedme",
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apped.me",
    siteName: "Apped",
    image : "/api/og/%22",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Apped",
      },
    ],
  },
  twitter: {
    handle: "@appedme",
    site: "@appedme",
    cardType: "summary_large_image",
  },
};

let script = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8XJ794KHGF');
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="html">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="AppedMe Search"
          href="/opensearch.xml"
        />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* Add Scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8XJ794KHGF"
        ></script>
        {/* <script dangerouslySetInnerHTML={{ __html: script }} /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
