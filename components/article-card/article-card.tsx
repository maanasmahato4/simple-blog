'use client';
import React, { FormEvent } from 'react';
import Link from 'next/link';
import { Article } from '@/app/blogs/page';

export interface BlogCardProps {
	article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }): React.ReactElement => {
	async function handleDelete(id: string) {
		const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
			method: 'DELETE',
		});

		return response.json();
	}

	return (
		<div className='m-2 min-h-[15rem] p-4 shadow-sm shadow-slate-300 hover:cursor-pointer'>
			<Link href={`/blogs/${article._id}`}>
				<h3 className='py-2 text-4xl'>{article.title}</h3>
				<p className='py-2 opacity-70'>{article.desc.substring(0, 150)}...</p>
			</Link>
			<button
				onClick={() => handleDelete(article._id)}
				className='rounded-sm bg-red-600 px-4 py-2 text-white shadow-sm shadow-red-400'
			>
				Delete
			</button>
		</div>
	);
};

export default BlogCard;
