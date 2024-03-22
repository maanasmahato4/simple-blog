import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import NavBar from '@/components/nav/nav';
import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Simple Blog',
	description: 'A Simple Blog application',
	icons: {
		icon: '/blog-icon.svg',
		shortcut: '/blog-icon.svg',
		apple: '/blog-icon.svg',
	},
	keywords: ['simple', 'blog', 'blogg', 'simple blog'],
	authors: [{ name: 'maanas', url: 'https://github.com/maanasmahato4' }],
	creator: 'maanas mahato',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NavBar />
				<main className='h-[80%]'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
