import ArticleModel from '@/models/article.model';
import { dbConnect } from '@/mongoose/mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export interface ExtendedNextApiRequest extends NextApiRequest {
	json: () => Promise<any>;
}

export async function GET(): Promise<NextResponse> {
	await dbConnect();
	const result = await ArticleModel.find();
	if (!result) {
		return new NextResponse(JSON.stringify({ message: 'articles not found' }), {
			status: 404,
		});
	}
	return new NextResponse(JSON.stringify({ result }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}

export async function POST(req: ExtendedNextApiRequest): Promise<NextResponse> {
	await dbConnect();

	const { title, desc } = await req.json();
	if (!title || !desc) {
		return new NextResponse(
			JSON.stringify({ message: 'title and description is needed' }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
	}

	const article = new ArticleModel({ title, desc });
	const result = await article.save();
	return new NextResponse(JSON.stringify({ result }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}
