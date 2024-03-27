import axios from "axios";

const createNewUser = (firstName, lastName, email, password, phonenumber, gender, Role) => {
    const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phonenumber: phonenumber,
        gender: gender,
        roleId: Role,
    };
    return axios.post("http://localhost:8081/create-User", data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};



const getAllUser = () => {
    return axios.get("http://localhost:8081/getAllUser");
};

export { getAllUser, createNewUser };
