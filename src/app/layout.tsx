import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="flex flex-col min-h-screen">
        <body className="text-gray-900 bg-gray-100">
          <Header />
          <main className="container flex-grow p-4 mx-auto">{children}</main>
          <Footer />
        </body>
      </div>
    </html>
  );
}
