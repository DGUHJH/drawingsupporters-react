import { hFetch } from "./methods/hFetch";
import { requestUrl } from "./url";

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
  return await hFetch(`${requestUrl}/api/user/login`, "post", false, {
    email,
    password,
  });
};

export const join = async ({
  email,
  password,
  field,
  nickname,
  job,
  marketing,
  path,
  phone,
}: JoinProps) => {
  return await hFetch(`${requestUrl}/api/mentee/signup`, "post", false, {
    email,
    password,
    desired_field: [field],
    nickname,
    job,
    marketing_agreement: marketing,
    path_to_site_knowledge: [path],
    phone_number: phone,
  });
};

export const userInfo = async () => {
  return await hFetch(`${requestUrl}/api/user/info`, "get", true);
};

export const checkEmail = async (email: string) => {
  return await hFetch(`${requestUrl}/api/user/check-email`, "post", false, {
    email,
  });
};

export const checkNickname = async (nickname: string) => {
  return await hFetch(`${requestUrl}/api/user/check-nickname`, "post", false, {
    nickname,
  });
};
