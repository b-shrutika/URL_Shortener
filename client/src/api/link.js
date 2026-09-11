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

export const getLinkAnalytics = async (shortCode) => {
    const response = await api.get(
        `/api/links/analytics/${shortCode}`
    );
    return response.data;
};

export const deleteShortUrl = async (shortCode) => {
    const response = await api.delete(
        `/api/links/${shortCode}`
    );
    return response.data;
};