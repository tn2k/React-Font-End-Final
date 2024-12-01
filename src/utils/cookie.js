import Cookies from 'js-cookie';

const getAuthHeaders = () => {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');
    const userId = Cookies.get('userId');

    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);
    console.log("User ID:", userId);
    return {
        Authorization: accessToken,
        xrtokenid: refreshToken,
        xclientid: userId
    };
};

export { getAuthHeaders }