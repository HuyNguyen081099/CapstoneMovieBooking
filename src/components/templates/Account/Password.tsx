import { Input } from "components"
import { useAuth } from "hooks"
import { useForm } from 'react-hook-form'
export const Password = () => {
  const {user} = useAuth()
  const {handleSubmit, register} = useForm()
  console.log('user', user)
  const setSubmit = (values) => {
    console.log('values', values)

  }
  return (
    <form className="h-screen" onSubmit={handleSubmit(setSubmit)}>
      <Input
                className="h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Mật khẩu hiện tại"
                name="matKhau"
                type="password"
            />
      <Input
                className="h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Mật khẩu mới"
                name="matKhau"
                type="password"
            />
      <Input
                className="h-[90px] [&>label]:text-black [&>input]:bg-transparent [&>input]:border [&>input]:border-black [&>input]:text-black"
                label="Nhập lại mật khẩu"
                name="matKhau"
                type="password"
            />
    </form>
  )
}
