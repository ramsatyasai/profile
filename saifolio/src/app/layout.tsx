import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saifolio | Ram Satya Sai — AI Automation & Software Development',
  description:
    'Portfolio of Kapileswarapu Ram Satya Sai — AI Automation Consultant and Software Developer. Building scalable software and intelligent automation systems for businesses.',
  keywords: ['AI Automation', 'Software Developer', 'FastAPI', 'Python', 'LLM', 'n8n', 'Freelance', 'India'],
  authors: [{ name: 'Kapileswarapu Ram Satya Sai' }],
  openGraph: {
    title: 'Saifolio | Ram Satya Sai',
    description: 'Building Software. Automating Workflows. Documenting the Journey.',
    url: 'https://saifolio.vercel.app',
    siteName: 'Saifolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saifolio | Ram Satya Sai',
    description: 'Building Software. Automating Workflows. Documenting the Journey.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ backgroundColor: '#09090b' }}>{children}</body>
    </html>
  );
}

