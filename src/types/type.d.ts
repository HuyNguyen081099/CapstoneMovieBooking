declare type ApiResponse<T> = {
    statusCode: number
    message: string
    content: T
}
declare type ThongTinLichChieuHeThongRap<A> = {
    maHeThongRap: string
    tenHeThongRap: string
    logo: string
    mahom: string
    lstCumRap: A
}
declare type CumRap<B> = {
    maCumRap: string
    tenCumRap: string
    hinhAnh: string
    diaChi: string
    danhSachPhim: B
}
declare type danhSachPhimChieu<C> = {
    maPhim: number
    tenPhim: string
    hinhAnh: string
    hot: boolean
    dangChieu: boolean
    sapChieu: boolean
    lstLichChieuTheoPhim: C
}