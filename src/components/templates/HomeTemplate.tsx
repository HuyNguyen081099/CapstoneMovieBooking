import { Card, Skeleton } from 'components'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { getMovieListThunk } from 'store/quanLyPhim'
import { Button } from 'antd'


export const HomeTemplate = () => {
    const dispatch = useAppDispatch()
    const { movieList, isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)

    console.log('isFetchingMovieList: ', isFetchingMovieList)
    console.log('movieList: ', movieList)

    useEffect(() => {
        dispatch(getMovieListThunk())
    }, [dispatch])

    if (isFetchingMovieList) {
        return (
            <div className="grid grid-cols-4">
                {[...Array(12)].map(() => {
                    return (
                        <Card className="!w-[300px] !mt-20">
                            <Skeleton.Image className="!w-full !h-[250px]" />
                            <Skeleton.Input className="!w-full mt-16" />
                            <Skeleton.Input className="!w-full mt-16" />
                        </Card>
                    )
                })}
            </div>
        )
    }

    return (
      <div >
          <div>
            <h1  className=" font-600 text-30 pt-10">Phim đang chiếu</h1>
            <div className="grid grid-cols-4">
                {movieList?.map((movie) => (
                    <Card
                        key={movie.maPhim}
                        className="!mt-20"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={movie.hinhAnh} />}
                    >
                        <Card.Meta
                            title={movie.tenPhim}
                            description={movie.moTa.substring(0, 30)}  
                        />
                        <Button className='ml-20 mt-20'>trailer</Button>
                        <Button className='ml-20'>đặt vé</Button>
                    </Card>
                ))}
            </div>
        </div>
            <div>
            <h1  className="font-600 text-30 pt-20">Phim sắp chiếu</h1>
            <div className="grid grid-cols-4">
                {movieList?.map((movie) => (
                    <Card
                        key={movie.maPhim}
                        className="!mt-20"
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={movie.hinhAnh} />}
                    >
                        <Card.Meta
                            title={movie.tenPhim}
                            description={movie.moTa.substring(0, 30)}
                        />
                        <Button className='ml-20 mt-20'>trailer </Button>
                        <Button className='ml-20'>đặt vé</Button>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    )
}

