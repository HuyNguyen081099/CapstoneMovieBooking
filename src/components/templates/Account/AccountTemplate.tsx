import { Password, Tabs } from 'components'
import { AccountInfo } from './AccountInfo'

export const AccountTemplate = () => {
    return (
        <div>
            <Tabs
                tabPosition="left"
                items={[
                    {
                        key: 'accountInfo',
                        label: 'Thông tin tài khoản',
                        children: <AccountInfo />,
                    },
                    {
                        key: 'doiMatKhau',
                        label: 'Đổi mật khẩu',
                        children: <Password />,
                    },
                    {
                        key: 'accountHistoryBooking',
                        label: 'Lịch sử đặt vé',
                        children: <p>Lịch sử đặt vé</p>,
                    },
                ]}
            />
        </div>
    )
}
