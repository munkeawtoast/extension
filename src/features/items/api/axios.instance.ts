import axiosStatic from 'axios'
import { devItemServiceUrl, prodItemServiceUrl } from '.'

const itemAxios = axiosStatic.create({
  baseURL: __DEV__ ? devItemServiceUrl : prodItemServiceUrl,
})

// itemAxios.interceptors.request.use()

export default itemAxios
