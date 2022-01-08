import axios from 'axios'
import { getToken } from '@baloise/vue-keycloak'

const API = axios.create({
	baseURL:'http://localhost:8080/'
})

API.interceptors.request.use(
    async config => {
        const token = await getToken()
        config.headers = {
          Authorization: `Bearer ${token}`,
        }
        return config
      },
      error => {
        Promise.reject(error)
      },
)
export default API



