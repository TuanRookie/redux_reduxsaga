import axios from "axios"


export const loadUsersApi = async () => {
    const response = await axios.get("http://localhost:7000/allUsers");
    return (response);
}

export const createUsersApi = async (user) => {
    await axios.post("http://localhost:7000/create-new-user", user);
}

export const deteteUsersApi = async (userId) => {
    await axios.delete(`http://localhost:7000/delete-user/${userId}`);
}

export const updateUsersApi = async (userInfo) => {
    await axios.put("http://localhost:7000/updates-user", userInfo);
}