import { api } from './_api';
import type { RequestHandler } from './__types';

export const get: RequestHandler = async ({ locals }) => {
	// locals.userid comes from src/hooks.js
	const response = await api('get', `books`);

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return {
			body: {
				books: []
			}
		};
	}

	if (response.status === 200) {
		return {
			body: {
				books: await response.json()
			}
		};
	}

	return {
		
		status: response.status
		
	};
};


