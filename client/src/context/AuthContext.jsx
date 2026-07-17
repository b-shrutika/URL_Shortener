import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadUser() {
            try {
                const res = await api.get("/auth/me");
                setUser(res.data.user);
            } catch (err) {
                setUser(null);
            } finally {
            setLoading(false);
        }
        }

        loadUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}