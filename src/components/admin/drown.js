import {
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

 const DrownProfile = [
    {key:"1",icon:<PieChartOutlined />,label: (<a href="/profile">My Profile</a>)},
    {key:"2",icon:<PieChartOutlined />,label: (<a href="/">Logout</a>)}
]

export const ProfileMenu = (
  <Menu>
    {DrownProfile.map(item => (
      <Menu.Item key={item.key}>
        {item.label}
      </Menu.Item>
    ))}
  </Menu>
);

