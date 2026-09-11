import api from "./axios";

export const registerUser = async (userData) => {

    const response = await api.post(
        "/api/auth/register",
        userData
    );

    return response.data;
};

export const loginUser = async (userData) => {

    const response = await api.post(
        "/api/auth/login",
        userData
    );

    return response.data;
};

export const logoutUser = async () => {

    localStorage.removeItem("token");
    navigate("/login");
    return response.data;
};

export const resetPassword = async (data) => {
    const response = await api.post(
        "/api/auth/reset-password",
        data
    );
    return response.data;
};