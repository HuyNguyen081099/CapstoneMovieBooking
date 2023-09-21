// import styled from 'styled-components'
import { Button, Input } from 'components'
import { useAuth } from 'hooks'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import styled from 'styled-components'

export const AccountInfo = () => {
    const { user } = useAuth()
    const { reset, register } = useForm()
    console.log('user: ', user)

    useEffect(() => {
        reset(user)
    }, [user, reset])

    return (
        <div>
            <p className="text-20 font-600">Thông tin tài khoản</p>
            <Input
                className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Tài khoản"
                name="taiKhoan"
                register={register}
            />
            <Input
                className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Họ và tên"
                name="hoTen"
                register={register}
            />
            <Input
                className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Email"
                name="email"
                register={register}
            />
            <Input
                className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Số điện thoại"
                name="soDT"
                register={register}
            />
            <Input
                className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Mã nhóm"
                name="maNhom"
                register={register}
            />
            <Input
                className="[&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Mã loại người dùng"
                name="maLoaiNguoiDung"
                register={register}
            />
            <div className="text-right mt-20">
                <Button htmlType="submit" type="primary" className="!h-[46px]">
                    Hoàn thành chỉnh sửa
                </Button>
            </div>
        </div>
    )
}

// const InputS = styled(Input)`
//     label {
//         color: #111;
//     }
// `
