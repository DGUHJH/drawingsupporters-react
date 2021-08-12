import { hFetch } from './methods/hFetch';
import { requestUrl } from './url';

type LoginProps = {
	email: string;
	password: string;
};

type JoinProps = {
	email: string;
	password: string;
	field: string;
	nickname: string;
	job: string;
	marketing: boolean;
	path: string;
	phone: string;
};

export const fetchLogin = async ({ email, password }: LoginProps) => {
	return await hFetch(`${requestUrl}/api/user/login`, 'post', false, {
		email,
		password,
	});
};

type JoinDataProps = {
	email: string;
	password: string;
	desired_field: string[];
	nickname: string;
	job: string;
	marketing_agreement: boolean;
	path_to_site_knowledge: string[];
	phone_number: string;
};

export const join = async (data: JoinDataProps) => {
	return await hFetch(`${requestUrl}/api/mentee/signup`, 'post', false, data);
};

export const userInfo = async () => {
	return await hFetch(`${requestUrl}/api/user/info`, 'get', true);
};

export const checkEmail = async (email: string) => {
	return await hFetch(`${requestUrl}/api/user/check-email`, 'post', false, {
		email,
	});
};

export const checkNickname = async (nickname: string) => {
	return await hFetch(`${requestUrl}/api/user/check-nickname`, 'post', false, {
		nickname,
	});
};
