import { cookies } from "./cookies";

type FetchType = "post" | "get";

export const hFetch = async (
  url: string,
  type: FetchType,
  authorization: boolean,
  body?: any,
  formData?: boolean
) => {
  const token = cookies.get("access_token");
  let headers;

  if (authorization && formData) {
    headers = {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    };
  } else if (authorization) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
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
};
