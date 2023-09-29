import { RootState } from "store"
import { useSelector, useDispatch } from 'react-redux'
import { baiTapMovieBookingActions } from "store/booking"
// import { getLichChieuListThunk } from "store/lichChieu"
import { useNavigate } from "react-router-dom"
import { useAuth } from "hooks"
import { PATH } from "constant"



const Result = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { accessToken } = useAuth()

    const { chairBookings } = useSelector((state: RootState) => state.baiTapMovieBooking)
    // const { ThongTinLichChieuHeThongRap } = useSelector((state: RootState) => state.quanLyLichChieu)

    console.log('chairBookings: ',)
    return (
        <div>
            <h2 className="mt-5 text-[15px] font-700">DANH SÁCH GHẾ</h2>
            <div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair booked"></div>
                    <p>Ghế đã đặt</p>
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
                    <p>Tên Phim</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <p>Tên rạp</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <p>Ngày, lịch chiếu và giá vé</p>
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

                        <td></td>
                    </tr>
                </tbody>
            </table>

            <button
                className="btn btn-success mt-3"
                onClick={() => {
                    dispatch(baiTapMovieBookingActions.setChairBookeds())
                    if (!accessToken) {
                        navigate(PATH.login)

                        return
                    }
                    navigate(PATH.booking)
                }}
            >
                Thanh toán
            </button>
        </div>
    )
}

export default Result
