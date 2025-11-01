// AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    // Check localStorage jab app load ho
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (userData) => {
        const fullUserData = {
            ...userData.user,
            token: userData.token, // token add karo
        };
        setUser(userData.user);
        localStorage.setItem("user", JSON.stringify(fullUserData)); // persist
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook
export function useAuth() {
    return useContext(AuthContext);
}