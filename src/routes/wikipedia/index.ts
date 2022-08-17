import { apiSearch } from './_api';
import type { RequestHandler } from './__types';

export const get: any = async ({ }) => {

	const response = await apiSearch('get', `wikis`);

	if (response.status === 404) {

		return {
			body: {
				wikis: []
			}
		};
	}

	if (response.status === 200) {
		
		return {
			body: {
				wikis: await response.json()
			}
		};
	}

	return {
		
		status: response.status
		
	};
};