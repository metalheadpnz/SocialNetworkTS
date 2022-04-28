import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '79d0b5ff-d44c-4805-98f4-b6b4db11789b'
    }
});

export const authAPI = {
    me() {
        return instance.get(
            'auth/me',
            {withCredentials: true}
        )
            .then(response => {
                console.log(response)
                return response.data
            })
    }
}


export const profileAPI = {
    getProfile(userProfileID: number = 2) {

        return instance.get(
            `profile/${userProfileID}`,
            {withCredentials: true}
        )
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(pageSize: number = 10, currentPage: number = 1) {
        return instance.get(
            `users?count=${pageSize}&page=${currentPage}`,
            {withCredentials: true}
        )
            .then(response => response.data)
    },

    followAPI(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
            .catch(err => {
                console.log(err)
            })
    },

    unFollowAPI(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

// export const getUsers = (pageSize: number = 10, currentPage: number = 1) => {
//     return instance.get(
//         `users?count=${pageSize}&page=${currentPage}`,
//         {withCredentials: true}
//     )
//         .then(response => response.data)
// }

// export const followAPI = (userId: number) => {
//     return instance.post(`follow/${userId}`)
//         .then(response => response.data)
//         .catch(err => {
//             console.log(err)
//         })
// }
//
// export const unFollowAPI = (userId: number) => {
//     return instance.delete(`follow/${userId}`)
//         .then(response => response.data)
// }