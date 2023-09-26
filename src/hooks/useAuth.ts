import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const useAuth = () => {
    const { accessToken, userLogin } = useSelector((state: RootState) => state.quanLyNguoiDung)

    return {
        accessToken,
        user: userLogin,
    }
}
export const useAuthMovie = () => {
    const { movieList , isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)

    return {
        isFetchingMovieList,
        movie: movieList,
    }
}
