import axios from "axios"
import { getAllUser } from "./usersSlice";

export const createUser = (payload) => async () => {
    try {
        const post = await axios.post("http://localhost:3001/api/users", payload);
        return post;
    } catch (error) {
        return error;
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
        const users = await axios.get("http://localhost:3001/api/users");
        console.log(users.data.users)
        return dispatch(getAllUser(users.data.users));
    } catch (error) {
        return error;
    }
};