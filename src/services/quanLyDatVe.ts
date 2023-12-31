import { apiInstance } from 'constant/apiInstance'

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_DAT_VE_API,
})

export const quanLyDatVeServices = {
    book: (payload) => api.post('/DatVe', payload),
}