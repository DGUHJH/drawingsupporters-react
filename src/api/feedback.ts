import { hFetch } from './methods/hFetch';
import { requestUrl } from './url';

export const feedbackList = async () => {
	return await hFetch(`${requestUrl}/api/drawing`, 'get', true);
};

export const feedbackDetail = async (id: string) => {
	return await hFetch(`${requestUrl}/api/feedback/${id}`, 'get', true);
};

export const feedbackRequest = async (formData: any) => {
	return await hFetch(
		`${requestUrl}/api/drawing`,
		'post',
		true,
		formData,
		true
	);
};
