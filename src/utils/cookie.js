import Cookies from 'js-cookie';

// const getCookie = (name) => {

//     const value = `; ${document.cookie}`; // Bắt đầu với dấu `;` để dễ dàng tìm kiếm
//     const parts = value.split(`; ${name}=`); // Tách chuỗi cookie theo tên
//     if (parts.length === 2) {
//         return parts.pop().split(';').shift(); // Trả về giá trị của cookie
//     }
//     return null; // Nếu không tìm thấy cookie, trả về null
// };

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