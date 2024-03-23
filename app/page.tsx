import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
	return (
		<section className='flex flex-row'>
			<div className='flex h-[100%] w-[50%] flex-col items-center justify-center gap-24 px-8'>
				<h1 className='self-start justify-self-start text-8xl'>SimpleBlogg</h1>
				<p className='text-2xl opacity-70'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam
					officia magni quod sunt, quidem id molestias dolores reiciendis quasi, eius
					labore facilis quo sapiente officiis dolorum, reprehenderit natus.
					Deleniti?
				</p>
				<Link href="/create-blog">
				<button className='py-2 px-4 bg-sky-500 text-white shadow-sm shadow-slate-400 rounded-sm'>Get Started -></button>
				</Link>
				
			</div>
			<div className='relative min-h-[100%] w-[50%]'>
				<Image
					src='/images/home-image.png'
					fill={true}
					style={{ objectFit: 'cover' }}
					alt='an image that refers to a blog'
					sizes="50vw"
				/>
			</div>
		</section>
	);
}
