import axios from '@/libs/util'

// login
export const login = (info) => {
    return axios.ajax({
        url: 'login',
        method: 'post',
        data: info
    });
};
  