import { apiInstance } from 'constant/apiInstance'
import { LoginSchemaType, RegisterSchemaType } from 'schema'
import { AccountSchemaType } from 'schema/AccountSchema'
import { UserByAccessToken, UserLogin, UserUpdate} from 'types'

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API,
})

export const quanLyNguoiDungServices = {
    register: (data: RegisterSchemaType) => api.post('/DangKy', data),

    login: (data: LoginSchemaType) => api.post<ApiResponse<UserLogin>>('/DangNhap', data),

    getUserByAccessToken: () => api.post<ApiResponse<UserByAccessToken>>('/ThongTinTaiKhoan'),

    updateUser: (data: AccountSchemaType) => api.put<ApiResponse<UserUpdate>>('/CapNhatThongTinNguoiDung', data)
}
