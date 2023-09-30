import { apiInstance } from "constant";
import { CumRap, LichChieuTheoPhim, Theater, ThongTinLichChieuHeThongRap, danhSachPhimChieu } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_RAP_API,
})

export const quanLyRapServices = {
    getTheaterList: () => api.get<ApiResponse<Theater[]>>('/LayThongTinHeThongRap'),
    getLichChieuList: (query = '')=> api.get<ApiResponse<ThongTinLichChieuHeThongRap<CumRap<danhSachPhimChieu<LichChieuTheoPhim[]>[]>[]>[]>>(`/LayThongTinLichChieuHeThongRap${query}`)
}