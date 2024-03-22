import Link from 'next/link';

export default function NavBar() {
	return (
		<nav className='flex h-[10%] flex-row items-center px-2'>
			<span className='px-2'>
				<Link href='/'>
					<h3>SimpleBlogg</h3>
				</Link>
			</span>
			<div className='px-4'>
				<Link href='/blogs' className='px-2'>
					Blogs
				</Link>
				<Link href='/create-blog' className='px-2'>
					Create Blog
				</Link>
			</div>
		</nav>
	);
}
