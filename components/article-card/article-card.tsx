'use client';
import React from 'react';
import { CreateBlogData } from '../blog-form/blog-form';

export interface BlogCardProps {
	article: CreateBlogData;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }): React.ReactElement => {
	return (
		<div>
			<h3>{article.title}</h3>
			<p>{article.desc}</p>
		</div>
	);
};

export default BlogCard;
