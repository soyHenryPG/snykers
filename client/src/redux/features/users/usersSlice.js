import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "users",
    initialState: {
        user: {}, // trae menos info que userDashboard 
        users: [],
        userDetail: {},
        userDashboard: {} // es principalmente para traer favs
    },
    reducers: {
        postUser: (state, action) => {
            state.users = action.payload
        },
        getAllUser: (state, action) => {
            state.users = action.payload
        },
        getUserDashboard: (state, action) => {
            state.userDashboard = action.payload 
        },
        updateUserDashboard: (state, action) => {
            state.userDashboard = action.payload
        },
        getUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state, action) => {
            state.user = action.payload
        },
    }
})

export const {
    postUser,
    getAllUser,
    getUserDashboard,
    updateUserDashboard,
    getUser,
    clearUser,
    putUser,
} = userSlice.actions

export default userSlice.reducer