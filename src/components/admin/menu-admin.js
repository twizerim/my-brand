import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';


export const items = [
  { key: '1', icon: <PieChartOutlined />, label: 'Home' },
  { key: '2', icon: <DesktopOutlined />, label: 'Followers' },
  { key: '3', icon: <ContainerOutlined />, label: 'Contacts' },
  {
    key: 'sub1',
    label: 'Articals',
    icon: <AppstoreOutlined  />,
    children: [
      { key: '5', label: 'Images' },
      { key: '6', label: 'Documments' },
    ],
  },
];