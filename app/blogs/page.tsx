import BlogCard from '@/components/article-card/article-card';
import { CreateBlogData } from '@/components/blog-form/blog-form';

export interface Article extends CreateBlogData {
	_id: string;
}

export default async function Blogs() {
	const response = await fetch('http://localhost:3000/api/posts', {
		next: { revalidate: 10 },
	});
	const articles = await response.json();
	return (
		<section className='grid grid-cols-3 justify-center gap-4'>
			{articles.result.map((article: Article) => {
				return <BlogCard key={article._id} article={article} />;
			})}
		</section>
	);
}
