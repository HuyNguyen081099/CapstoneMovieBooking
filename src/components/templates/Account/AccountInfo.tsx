// import styled from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from 'components'
import { useAuth } from 'hooks'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AccountSchema, AccountSchemaType } from 'schema/AccountSchema'
import { toast } from 'react-toastify'
import { quanLyNguoiDungServices } from 'services'
import { handleError } from 'utils'

export const AccountInfo = () => {
    const { user } = useAuth()
    const { handleSubmit, reset, register, formState: { errors } } = useForm<AccountSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(AccountSchema)
    })
    useEffect(() => {
        reset({ ...user, soDt: user?.soDT })
    }, [user, reset])
    const setSubmit: SubmitHandler<AccountSchemaType> = async (values) => {
        console.log('values', values)
        try {
            await quanLyNguoiDungServices.updateUser(values)
            toast.success('Cập nhật tài khoản thành công')
        } catch (err) {
            handleError(err, 'Cập nhật tài khoản thất bại')
        }
    }

    return (
        <form className='h-screen' onSubmit={handleSubmit(setSubmit)}>
            <p className="text-20 font-600">Thông tin tài khoản</p>
            <Input
                className="pointer-events-none h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:text-gray-400"
                label="Tài khoản"
                name="taiKhoan"
                register={register}
                error={errors?.taiKhoan?.message}
            />
            <Input
                className="h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Họ và tên"
                name="hoTen"
                register={register}
                error={errors?.hoTen?.message}
            />
            <Input
                className="pointer-events-none h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:text-gray-400"
                label="Email"
                name="email"
                register={register}
                error={errors?.email?.message}
            />
            <Input
                className="pointer-events-none h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:text-gray-400"
                label="Mật khẩu"
                name="matKhau"
                register={register}
                error={errors?.matKhau?.message}
            />
            <Input
                className="h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Số điện thoại"
                name="soDt"
                register={register}
                error={errors?.soDt?.message}
            />
            <Input
                className="pointer-events-none h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:text-gray-400"
                label="Mã nhóm"
                name="maNhom"
                register={register}
                error={errors?.maNhom?.message}
            />
            <Input
                className="pointer-events-none h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-gray-400 [&>input]:text-gray-400"
                label="Mã loại người dùng"
                name="maLoaiNguoiDung"
                register={register}
                error={errors?.maLoaiNguoiDung?.message}
            />
            <div className="text-right mt-20">
                <Button htmlType="submit" type="primary" className="!h-[46px]">
                    Hoàn thành chỉnh sửa
                </Button>
            </div>
        </form>
    )
}

// const InputS = styled(Input)`
//     label {
//         color: #111;
//     }
// `
