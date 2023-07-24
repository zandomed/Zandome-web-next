import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './global.css';

import GoogleAnalytics from '@/shared/components/GoogleAnalytics';
import CookieBanner from '@/shared/components/CookieBanner';

import { CONSTANTS } from '@/shared/constants';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zandome',
  description: 'Zandome Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.className} text-white`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={CONSTANTS.GA_MEASUREMENT_ID} />
        <main className="h-full">{children}</main>
        <CookieBanner />
      </body>
    </html>
  );
}
