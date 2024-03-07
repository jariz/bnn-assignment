import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'BNN Pokédex',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex flex-col gap-6 pb-6">
                    <nav className="bg-primary py-4">
                        <div className="container">
                            <Link href="/" className="flex items-center gap-3 font-bold text-white">
                                <Image width={48} height={36} alt="A Pokédex" src="/logo.webp" className="w-12" />
                                BNN Pokédex
                            </Link>
                        </div>
                    </nav>
                    {children}
                </main>
            </body>
        </html>
    );
}
