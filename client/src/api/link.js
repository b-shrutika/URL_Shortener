import api from "./axios";

export const createShortUrl = async (data) => {

    const response = await api.post(
        "/api/links",
        data
    );

    return response.data;
};

export const getUserUrls = async () => {

    const response = await api.get(
        "/api/links/my-links"
    );

    return response.data;
};