import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
	{
		title: {
			required: true,
			type: String,
		},
		desc: {
			required: true,
			type: String,
		},
	},
	{ timestamps: true },
);

const ArticleModel =
	mongoose.models.articles || mongoose.model('articles', articleSchema);

export default ArticleModel;
