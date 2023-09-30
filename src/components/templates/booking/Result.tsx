import { RootState } from "store"
import { useSelector, useDispatch } from 'react-redux'
import { baiTapMovieBookingActions } from "store/booking"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import { AppDispatch } from '../../../store/index'
import { PATH } from 'constant'
import { useAuth } from "hooks"

const Result = () => {
    const dispatch = useDispatch<AppDispatch>()
    const params = useParams()
    const navigate = useNavigate()
    const { accessToken } = useAuth()
    const { chairBookings } = useSelector((state: RootState) => state.baiTapMovieBooking)
    // const { ThongTinLichChieuHeThongRap } = useSelector((state: RootState) => state.quanLyLichChieu)
    let payload = {
        "danhSachVe": []
      };

    let history = localStorage.getItem('BOOKINGHISTORY');

    if (chairBookings.length >0) {
        debugger
        if (history) {
            payload = JSON.parse(history)
        }
        const ngayDat = new Date();
        chairBookings.forEach(c => payload.danhSachVe.push({ tenPhim: params.tenPhim, tenRap: params.tenRap, maGhe: c.soGhe, giaVe: c.gia, ngayDat: ngayDat }))
    }  

    const onPay = () => {
        dispatch(baiTapMovieBookingActions.setChairBookeds())
        if (!accessToken) {
            navigate(PATH.login)

            return
        }
        toast.success('Đặt vé thành công')
        localStorage.setItem('BOOKINGHISTORY', JSON.stringify(payload))
    }

    return (
        <div>
            <h2 className="mt-5 text-[15px] font-700">DANH SÁCH GHẾ</h2>
            <div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair booked"></div>
                    <p>Ghế đã đặt </p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair booking"></div>
                    <p>Ghế đang chọn</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair"></div>
                    <p>Ghế chưa đặt</p>
                </div>
            </div>



            <h2 className="mt-5 text-[15px] font-700" >THÔNG TIN PHIM VÀ LỊCH CHIẾU PHIM ĐANG CHỌN</h2>
            <div>
                <div className="d-flex gap-3 mt-3">
                    <p>Tên Phim: {params.tenPhim}</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <p>Tên rạp: {params.tenRap}</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <p>Ngày và lịch chiếu: {params.ngayChieuGioChieu}</p>
                </div>
            </div>


            <h2 className="mt-5 text-[15px] font-700">DANH SÁCH GHẾ BẠN ĐÃ CHỌN</h2>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Huỷ</th>
                    </tr>
                </thead>
                <tbody>
                    {chairBookings.map((chair) => (
                        <tr key={chair.soGhe}>
                            <td>{chair.soGhe}</td>
                            <td>{chair.gia}</td>
                            <td
                                className="text-danger fw-bold fs-4"
                                style={{
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    dispatch(baiTapMovieBookingActions.setChairBookings(chair))
                                }}
                            >
                                X
                            </td>
                        </tr>
                    ))}

                    <tr>
                        <td>Tổng tiền thanh toán</td>
                        
                        <td>
                        {chairBookings.reduce((total, chair) => {
                                return (total += chair.gia)
                            }, 0)}
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <button
                className="btn btn-success mt-3"
                onClick={() => onPay()}
                disabled={chairBookings.length === 0}                 
            >
                Thanh toán
            </button>
        </div>
    )
}

export default Result
