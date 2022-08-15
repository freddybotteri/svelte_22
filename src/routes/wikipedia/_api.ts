
const base = 'http://jsonplaceholder.typicode.com/';

export function apiSearch(
	method: string,
	resource: string,
	data?: Record<string, unknown>
	) {
	return fetch(`${base}comments`, {
		method,
		body: data && JSON.stringify(data)
	});
}
