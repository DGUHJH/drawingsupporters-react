import { hFetch, hFormFetch } from './methods/hFetch';
import { requestUrl } from './url';

export const requestList = async () => {
	return await hFetch(`${requestUrl}/api/drawing`, 'get', true);
};

export const requestDetail = async (id: string) => {
	return await hFetch(`${requestUrl}/api/drawing/${id}`, 'get', true);
};

export const feedbackList = async () => {
	return await hFetch(`${requestUrl}/api/feedback`, 'get', true);
};

export const feedbackDetail = async (id: string) => {
	return await hFetch(`${requestUrl}/api/feedback/${id}`, 'get', true);
};

export const feedbackRequest = async (formData: any) => {
	return await hFormFetch(`${requestUrl}/api/drawing`, 'post', formData);
	// return await hFetch(
	// 	`${requestUrl}/api/drawing`,
	// 	'post',
	// 	true,
	// 	formData,
	// 	true
	// );
};
