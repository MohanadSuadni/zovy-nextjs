"use client";
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Layout/Header';
import Footer from '@/app/components/Layout/Footer';
import ScrollToTop from '@/app/components/ScrollToTop';
import Aoscompo from '@/utils/aos';
import { usePathname } from 'next/navigation';

const font = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin'); // 👈 proverava da li si na /admin

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Aoscompo>
          {!isAdminPage && <Header />} {/* 👈 Header samo ako nije admin */}
          {children}
          {!isAdminPage && <Footer />} {/* 👈 Footer samo ako nije admin */}
        </Aoscompo>
        <ScrollToTop />
      </body>
    </html>
  );
}