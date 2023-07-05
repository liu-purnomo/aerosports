import { defineStore } from "pinia";
import Swal from 'sweetalert2'
import axios from 'axios'
import { serverUrl } from "../constants";


export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        user: {},
    }),
    actions: {
        async handleLogin(username, password) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: serverUrl + '/pub/user/login',
                    data: {
                        username, password
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLoggedIn = true
                this.router.push('/')
                Swal.fire({
                    icon: 'success',
                    title: 'Horray...',
                    text: 'Login success'
                })
            } catch (err) {
                if (err.response.data.message === 'Pending Account. Please Verify Your Email!') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: err.response.data.message
                    })
                    this.router.push('/confirmation')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: err.response.data.message
                    })
                    this.router.push('/auth/login')
                }
            }
        },
    }
})