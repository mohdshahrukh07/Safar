import api from "./axiosConfig";

export default function useApi() {

    const loginApi = async (data) => {
        try {
            const response = await api.post('/safar/user/login', data)
            if (response.status) {
                console.log("success");
                return response;
            } else {
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const RegistrationApi = async (data) => {
        try {
            const response = await api.post('/safar/user/signup', data)
            if (response.status) {
                return response;
            } else {
                console.error("failed to login");
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    };
    const logoutApi = async (data) => {
        try {
            const response = await api.post('/safar/user/logout', data)
            if (response.status) {
                return response;
            } else {
                console.error("failed to logout")
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    const tourAPi = async (data) => {
        try {
            const response = await api.post('/tours', data)
            if (response.status) {
                return response.data;
            } else {
                console.error("failed to logout")
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    const packagesApi = async () =>{
        try{
             const response = await api.get('/home')
            if (response.status) {
                return response.data;
            } else {
                console.error("failed to logout")
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    return {
        loginApi,
        RegistrationApi,
        logoutApi,
        tourAPi,
        packagesApi
    }
}