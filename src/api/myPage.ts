import { hFetch } from "./methods/hFetch";
import { requestUrl } from "./url";

export const myList = async () => {
    return await hFetch(`${requestUrl}/api/drawing/`, "get", true);
};

export const feedbackDetail = async (drawing_id: number) => {
    return await hFetch(`${requestUrl}/api/drawing/${drawing_id}`, "get", true);
};
