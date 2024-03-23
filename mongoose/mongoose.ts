import mongoose from 'mongoose';

declare global {
	var mongoose: {
		con: any;
		promise: any;
	};
}

global.mongoose = {
	con: null,
	promise: null,
};

export async function dbConnect() {
	if (global.mongoose && global.mongoose.con) {
		console.log('already connected');
		return global.mongoose.con;
	} else {
		const conString = process.env.MONGO_URL as string;
		const promise = await mongoose.connect(conString, { autoIndex: true });
		global.mongoose = {
			con: promise,
			promise,
		};
		console.log('database connected');
		return promise;
	}
}
