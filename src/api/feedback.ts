import { ImgHTMLAttributes } from "react";
import { hFetch } from "./methods/hFetch";
import { requestUrl } from "./url";

export const fetchList = async () => {
  return await hFetch(`${requestUrl}/api/feedback`, "get", false);
};

export const fetchDetail = async (id: string) => {
  return await hFetch(`${requestUrl}/api/feedback/${id}`, "get", true);
};

export const fetchRequest = async (formData: any) => {
  return await hFetch(
    `${requestUrl}/api/drawing`,
    "post",
    true,
    formData,
    true
  );
};
