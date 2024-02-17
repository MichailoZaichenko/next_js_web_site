import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Zdórovo - zdoróvo harchuvatisa",
  description: "Healthy food app",
  other: {
    'theme-color': '#0d1117',
    'color-scheme': "dark only",
    // adding img to sharig link
    'og:url': "https://next-js-web-site-jade.vercel.app",
    'og:type':'website',
    'og:image': 'https://opengraph.b-cdn.net/production/documents/6e311ece-85f1-4e26-8a77-e7abdf3eb674.png?token=D83-k0EqSkQxIFNsJdw1f6lg_t3KYzAgk3eCZ6qHTe0&height=718&width=719&expires=33244195644',
    'og:title': "Zdórovo - zdoróvo harchuvatisa",
    'og:description': 'Healthy food app',
    // twitter
    'twitter:card': 'summary_large_image',
    'twitter:domain': "next-js-web-site-jade.vercel.app",
    "twitter:url": "https://next-js-web-site-jade.vercel.app/",
    'twitter:title': "Zdórovo - zdoróvo harchuvatisa",
    'twitter:description': 'Healthy food app',
    'twitter:image': 'https://opengraph.b-cdn.net/production/documents/6e311ece-85f1-4e26-8a77-e7abdf3eb674.png?token=D83-k0EqSkQxIFNsJdw1f6lg_t3KYzAgk3eCZ6qHTe0&height=718&width=719&expires=33244195644',
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
