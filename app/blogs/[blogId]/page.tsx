import { notFound } from 'next/navigation';

interface PageProps {
	params: {
		blogId: string;
	};
}

export default async function Article({ params }: PageProps) {
	const { blogId } = params;
	if (!blogId) {
		notFound();
	}

	try {
		const response = await fetch(`http://localhost:3000/api/posts/${blogId}`);
		const article = await response.json();
		return (
			<div className='p-4'>
				<h3 className='py-2 text-4xl'>{article.title}</h3>
				<p className='border-t border-solid border-slate-400 py-2 opacity-70'>
					{article.desc}
				</p>
			</div>
		);
	} catch (error) {
		notFound();
	}
}
