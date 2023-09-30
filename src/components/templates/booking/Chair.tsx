
import { useDispatch, useSelector } from 'react-redux'
import './style.scss'
import { baiTapMovieBookingActions } from 'store/booking/slice'
import cn from 'classnames'
import { RootState } from 'store'


const Chair = ({ ghe, className }) => {
    const dispatch = useDispatch()

    const { chairBookings, chairBookeds } = useSelector((state: RootState) => state.baiTapMovieBooking);
  

    return (
        <div
            className={cn('Chair mt-3', className, {
                booking: chairBookings.find((chair) => chair.soGhe === ghe.soGhe),
                booked: chairBookeds.find((chair) => chair.soGhe === ghe.soGhe),
            })}
            onClick={() => {
                dispatch(baiTapMovieBookingActions.setChairBookings(ghe))
            }}
        >
            {ghe.soGhe}
        </div>
    )
}

export default Chair


