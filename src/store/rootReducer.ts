import { combineReducers } from '@reduxjs/toolkit'
import { quanLyNguoiDungReducer } from './quanLyNguoiDung'
import { quanLyPhimReducer } from './quanLyPhim'
import { quanLyRapReducer } from './Theater'
import { quanLyLichChieuReducer } from './lichChieu'
import { quanLyLichChieuTheoPhimReducer } from './lichChieuTheoPhim'
import { baiTapMovieBookingReducer } from './booking'

export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyPhim: quanLyPhimReducer,
    quanLyRap: quanLyRapReducer,
    quanLyLichChieu: quanLyLichChieuReducer,
    quanLyLichChieuTheoPhim: quanLyLichChieuTheoPhimReducer,
    baiTapMovieBooking: baiTapMovieBookingReducer,
})