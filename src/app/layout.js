import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apped - Download, Share, and Manage Your Apps',
  description: 'Apped is a platform for downloading, sharing, and managing your apps.',
}
let scripts = `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
     crossorigin="anonymous"></script>
`;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="search" type="application/opensearchdescription+xml" title="AppedMe Search" href="/opensearch.xml"/>
      
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
