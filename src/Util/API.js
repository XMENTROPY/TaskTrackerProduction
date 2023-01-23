import axios from 'axios';

const base = 'http://localhost:3001';

//GET Request
export const get = async (route) => {
	const resp = await axios.get(`${base}/${route}`);
	return resp;
}

export const post = async (route, data) => {
	const resp = await axios.post(`${base}/${route}`, data);
	return resp;
}


