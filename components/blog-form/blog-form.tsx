'use client';
import React, {
	ChangeEvent,
	FormEvent,
	useEffect,
	useRef,
	useState,
} from 'react';

interface CreateBlogData {
	title: string;
	desc: string;
}

const BlogForm: React.FC = (): React.ReactElement => {
	const [data, setData] = useState<CreateBlogData>({ title: '', desc: '' });
	const inputRef = useRef<HTMLInputElement | null>(null);

	function handleChange(
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void {
		setData({ ...data, [event.target.name]: event.target.value });
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		console.log(data);
	}

	useEffect(() => {
		inputRef.current?.focus();
	}, []);
	return (
		<div className='w-[50%] rounded-md p-4 shadow-md shadow-slate-500'>
			<h3 className='text-center text-xl'>Create new Article</h3>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4 rounded-md p-4'>
				<input
					placeholder='Title of the article'
					name='title'
					value={data.title}
					onChange={handleChange}
					className='my-4 p-2'
					ref={inputRef}
				/>
				<textarea
					placeholder='description'
					name='desc'
					value={data.desc}
					onChange={handleChange}
					className='my-4 h-36 p-2'
				/>

				<div>
					<button
						type='submit'
						className='rounded-sm bg-sky-500 px-4 py-2 text-white shadow-sm shadow-slate-400'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default BlogForm;
