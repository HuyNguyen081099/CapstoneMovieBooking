import { apiInstance } from "constant";
import { Theater } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_RAP_API,
})

export const quanLyRapServices = {
    getTheaterList: () => api.get<ApiResponse<Theater[]>>('/LayThongTinHeThongRap')
}
