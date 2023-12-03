import axiosStatic from 'axios'

const itemAxios = axiosStatic.create({
  baseURL: __DEV__
    ? 'http://localhost:8787'
    : 'https://pricetagged-tf.munkeawtoast.com/',
})

// itemAxios.interceptors.request.use()

export default itemAxios
