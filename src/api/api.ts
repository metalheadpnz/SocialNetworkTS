import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a629edd1-58e2-4d1d-9fb0-bfe7e7020cd4'
    }
});

export const authAPI = {
    me() {
        return instance.get(
            'auth/me',
            {withCredentials: true}
        )
            .then(response => {

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
    },

    getStatus(userID: number) {
        return instance.get(
            `profile/status/${userID}`,
            {withCredentials: true}
        ).then(resp => resp.data as string)
    },

    setStatus(status: string) {
        return instance.put(
            'profile/status',
            {status},
            {withCredentials: true}
        )
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