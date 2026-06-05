import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saifolio | Kapileswarapu Ram Satya Sai',
  description: 'Portfolio of Kapileswarapu Ram Satya Sai, AI Automation Consultant and Software Developer. Building software, automating workflows, and documenting the journey.',
  openGraph: {
    title: 'Saifolio | Kapileswarapu Ram Satya Sai',
    description: 'Portfolio of Kapileswarapu Ram Satya Sai, AI Automation Consultant and Software Developer.',
    url: 'https://saifolio.vercel.app',
    siteName: 'Saifolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme="dark">{children}</body>
    </html>
  );
}
