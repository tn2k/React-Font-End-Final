import instance from "../axios"

const createNewUser = (first_name, last_name, email, password, phonenumber, sex, role) => {
    const data = {
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
        phone: phonenumber,
        role: role,
        sex: sex,
    };
    return instance.post("http://localhost:8081/v1/api/access/signUp", data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};

const UpdateUser = (tenant_id, first_name, last_name, email, password, phonenumber, sex, role, refreshtoken, accesstoken, xclientid) => {
    const Updatedata = {
        tenant_id: tenant_id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        phone: phonenumber,
        sex: sex,
        role: role,
    };
    return instance.put("http://localhost:8081/v1/api/access/patchUser", Updatedata,
        {
            headers: {
                athorization: `Bearer ${accesstoken}`, // Access Token
                xclientid: xclientid,
                xrtokenid: refreshtoken

            },
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};



const getAllUser = () => {
    return instance.get("http://localhost:8081/v1/api/access/getListUsers", {
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
            throw error;
        });
}

const loginUser = (email, password) => {
    const data = {
        email: email,
        password: password
    }
    return instance.post("http://localhost:8081/v1/api/access/login", data, {
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
            throw error;
        });
};

const logOut = () => {
    try {
        return instance.post("http://localhost:8081/v1/api/access/logout")
    } catch (error) {
        console.log(error);
    }
};


const checkAuth = () => {
    return instance.get("http://localhost:8081/v1/api/access/", {
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
            throw error;
        });
}


export { getAllUser, createNewUser, UpdateUser, loginUser, logOut, checkAuth };
