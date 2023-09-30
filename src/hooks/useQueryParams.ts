import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import qs from 'qs'
export const useQueryParams = () => {
    const [searchParams, setsearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = Object.fromEntries(searchParams)
    const setQueryParams = (name: () => string) => {
        const qsStringly = qs.stringify(name, {
            addQueryPrefix: true,
        })
        navigate(location.pathname + qsStringly)
    }
    return [queryParams, setQueryParams]
}