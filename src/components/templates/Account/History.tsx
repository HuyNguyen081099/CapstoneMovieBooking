import { Card } from "antd";


export const History = () => {
  const info = JSON.parse(localStorage.getItem('BOOKINGHISTORY'));
  let  thongTinPhim = [];
  if (info && info. thongTinPhim) {
     thongTinPhim = info.thongTinPhim;
  }
  return (
    <>
      { thongTinPhim.map((MovieId?,MaCumRap?) => (
        <Card>
           <div className="flex justify-start items-start m-[10px]">
            <img className='h-[150px] mr-[10px] rounded-6' src={MovieId?.hinhAnh} alt="" />
            <div>
              <table className="text-14 w-full text-left text-gray-500 dark:text-gray-400 mb-24">
                <thead></thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="th-atBooking">
                      Tên phim
                    </th>
                    <td className="px-6 py-[10px]">
                      {MovieId?.tenPhim}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="th-atBooking">
                      Rạp
                    </th>
                    <td className="px-6 py-[10px]">
                      {MaCumRap?.tenCumRap}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="th-atBooking">
                      Địa chỉ
                    </th>
                    <td className="px-6 py-[10px]">
                      {MaCumRap?.diaChi}
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th scope="row" className="th-atBooking">
                      Suất
                    </th>
                    <td className="px-6 py-[10px]">
                      <span>{new Date(BookingId?.ngayChieuGioChieu).getHours()} : {new Date(BookingId?.ngayChieuGioChieu).getMinutes()}</span>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <th scope="row" className="th-atBooking">
                      Phòng chiếu
                    </th>
                    <td className="px-6 py-[10px]">
                      {BookingId?.tenRap}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      ))}
    </>

  )
}
