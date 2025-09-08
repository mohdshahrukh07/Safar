import api from "./axois";

export default function useApi() {

    const loginApi = async (data) => {
        try {
            const response = await api.post('/safar/user/login', data)
            if (response.status) {
                return response;
            } else {
                console.error("failed to login");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const RegistrationApi = async (data) => {
        try {
            const response = await api.post('/safar/user/signup', data)
            if (response.status) {
                return response;
            } else {
                console.error("failed to login");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        loginApi,
        RegistrationApi,
    }
}