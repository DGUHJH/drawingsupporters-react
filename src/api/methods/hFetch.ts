import axios from 'axios';
import { cookies } from './cookies';

type FetchType = 'post' | 'get';

export const hFetch = async (
	url: string,
	type: FetchType,
	authorization: boolean,
	body?: any,
	formData?: boolean
) => {
	const token = cookies.get('access_token');
	let headers;

	if (authorization && formData) {
		headers = {
			'Content-type': 'multipart/form-data',
			Authorization: `Bearer ${token}`,
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
		};

		return axios.post(url, body, {
			headers,
		});
	} else {
		if (authorization) {
			headers = {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
			};
		} else {
			headers = {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
			};
		}
		return await fetch(url, {
			method: type,
			headers,
			body: formData ? body : JSON.stringify(body),
		})
			.then((response) => response.json())
			.then((data) => {
				return data;
			})
			.catch((err) => {
				return err;
			});
	}
};

export const hFormFetch = async (url: string, type: FetchType, body?: any) => {
	const token = cookies.get('access_token');
	const headers = {
		'Content-type':
			'multipart/form-data boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
		Authorization: `Bearer ${token}`,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': '*',
	};

	return await fetch(url, {
		method: type,
		body,
		headers,
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((err) => {
			return err;
		});
};
