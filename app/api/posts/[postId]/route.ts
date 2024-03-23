import { dbConnect } from '@/mongoose/mongoose';
import { ExtendedNextApiRequest } from '../route';
import { NextResponse } from 'next/server';
import ArticleModel from '@/models/article.model';
import { NextApiRequest } from 'next';

export interface RouteParams {
	params: {
		postId: string;
	};
}

export async function PUT(req: ExtendedNextApiRequest, context: RouteParams) {
	await dbConnect();
	const postId = context.params.postId;
	const { title, desc } = await req.json();

	if (!postId) {
		return new NextResponse(
			JSON.stringify({ message: 'postId parameter is required' }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	}

	if (!title || !desc) {
		return new NextResponse(
			JSON.stringify({ message: 'title and description required' }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	}

	const result = await ArticleModel.findOneAndUpdate(
		{ _id: postId },
		{ $set: { title, desc } },
		{ new: true },
	);

	return new NextResponse(JSON.stringify({ result }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}

export async function DELETE(req: NextApiRequest, context: RouteParams) {
	await dbConnect();
	const { postId } = context.params;
	if (!postId) {
		return new NextResponse(
			JSON.stringify({ message: 'postId parameter is required' }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	}
	const result = await ArticleModel.findByIdAndDelete(postId);
	return new NextResponse(JSON.stringify({ result }), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	});
}
