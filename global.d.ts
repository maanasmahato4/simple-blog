declare global {
	namespace NodeJS {
		interface Global {
			mongoose: {
				con: any;
				promise: any;
			};
		}
	}
}
