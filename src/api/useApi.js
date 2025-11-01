import api from "./axiosConfig";

export default function useApi() {

    const loginApi = async (data) => {
        try {
            const response = await api.post('api/safar/user/login', data)
            if (response) {
                console.log("success");

                const userResponse = await api.get('sanctum/csrf-cookie', {
                    headers: { Authorization: `Bearer ${response.data.token}` },
                });
                console.log(userResponse.data);
                return response;
            } else {
            }
        } catch (error) {
            if(error.response){
                return error.response.data;
            }
            return false;
        }
    };

    const RegistrationApi = async (data) => {
        try {
            const response = await api.post('api/safar/user/signup', data)
            if (response.status) {
                return response;
            } else {
                console.error("failed to login");
                return false;
            }
        } catch (error) {
            if(error.response){
                return error.response.data;
            }
            return false;
        }
    };
    const logoutApi = async (data) => {
        try {
            const response = await api.post('api/safar/user/logout', data)
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
            const response = await api.post('api/tours', data)
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
    const packagesApi = async () => {
        try {
            const response = await api.get('api/home')
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

    const packageInfoApi = async (id) => {
        try {
            const response = await api.get('api/safar/booking/show', { params: id });
            if (response.status) {
                return response.data;
            } else {
                console.error("failed to logout")
                return false;
            }
        } catch (error) {

        }
    }
    const BookingApi = async (data) => {
        try {
            const response = await api.post('api/safar/booking/book', data);
            if (response.status) {
                console.log("success");
                return response;
            } else {
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    const BookingListApi = async () => {
        try {
            const response = await api.get('api/safar/deshboard/bookedList');
            if (response.status) {
                console.log("success");
                return response.data;
            } else {
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
        packagesApi,
        packageInfoApi,
        BookingApi,
        BookingListApi
    }
}