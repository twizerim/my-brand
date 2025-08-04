import { DeleteOutlined } from "@ant-design/icons";

export const Columns = [
  {
    title: 'FirstName',
    dataIndex: 'firstName',
    key: 'firstname',
  },
  {
    title: 'LastName',
    dataIndex: 'lastName',
    key: 'lastname',
  },
  {
    title: 'Email/UserName',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title:'Role',
    dataIndex:'role',
    key:'role'
  },
  {
    title: 'Actions',
    key: 'action',
    dataIndex: 'action',
    render: (_, record) => (
      <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }}  />
    ),
  }
];