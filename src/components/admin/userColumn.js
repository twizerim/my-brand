import { DeleteOutlined } from "@ant-design/icons"

export const Columns = (handleOpenModal) => [
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
    render: (_, record) => (
      <DeleteOutlined
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => handleOpenModal(record._id)} 
      />
    ),
  }
];