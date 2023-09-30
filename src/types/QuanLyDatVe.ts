export type bookingPayload<A> = {
    // taiKhoan: string
    // hoTen: string
    // email: string
    // soDT: string
    // maNhom: string
    // maLoaiNguoiDung: 'KhachHang' | 'QuanTri'
    // accessToken: string
    maLichChieu: string
    danhSachVe: A
}

export type danhSachVe = {
    maGhe: string
    giaVe: string
}

