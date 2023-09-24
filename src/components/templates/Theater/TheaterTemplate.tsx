import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { useEffect } from 'react'
import { getTheaterListThunk } from "store/Theater"
import { LichChieu, Tabs} from 'components'
export const TheaterTemplate = () => {
  const { theaterList } = useSelector((state: RootState) => state.quanLyRap)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTheaterListThunk())
  }, [dispatch])

  return (
    <div>
      <Tabs
        centered={true}
        tabPosition="top"
        items={
          theaterList?.map(a => {
            return {
              label:
                <div className="flex flex-col items-center mx-[30px]">
                  <img style={{ width: 60 }} src={`${a.logo}`} alt="" />
                  <p>{`${a.tenHeThongRap}`}</p>
                </div>
              ,
              key: `${a.maHeThongRap}`,
              children: <LichChieu/>
            }
          })
        }
      />
    </div>
  )
}
