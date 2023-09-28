import { Input } from "components"

export const Password = () => {
  return (
    <div className="h-screen">
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
    </div>
  )
}
