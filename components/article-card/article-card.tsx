'use client';
import React from 'react';
import Link from 'next/link';
import { Article } from '@/app/blogs/page';

export interface BlogCardProps {
	article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }): React.ReactElement => {
	return (
		<Link href={`/blogs/${article._id}`}>
			<div className='m-2 min-h-[15rem] p-4 shadow-sm shadow-slate-300 hover:cursor-pointer'>
				<h3 className='py-2 text-4xl'>{article.title}</h3>
				<p className='py-2 opacity-70'>{article.desc.substring(0, 150)}...</p>
			</div>
		</Link>
	);
};

export default BlogCard;
