
const base = 'http://jsonplaceholder.typicode.com/';


export function getPost() {
	return fetch(`${base}posts/1`, {
		method: 'GET'
	});
}
