import { useState } from "react"
import { Table, Modal} from "antd"
import { useGetUsers } from "./user-hook"
import { useDeleteUser } from "./fetch-hook/usedelet-user"
import { Columns } from "../userColumn"

export default function UserContainer() {
  const { userData } = useGetUsers()
  const { isOpen, handleClose, handleDelete, handleOpen } = useDeleteUser()

  const [selectedUserId, setSelectedUserId] = useState(null)

  const dataSource = Array.isArray(userData)
    ? userData.map((user) => ({
        ...user,
        key: user._id,
      }))
    : []

  const handleOpenModal = (userId) => {
    setSelectedUserId(userId)
    handleOpen()
  }

  const handleOk = () => {
    if (selectedUserId) {
      handleDelete(selectedUserId)
        .then(() => {
          handleClose()
          setSelectedUserId(null)
        })
        .catch(() => {
          
        })
    }
  }

  const columns = Columns(handleOpenModal)

  return (
    <>
      <Table columns={columns} dataSource={dataSource}/>
      <Modal
        title="Confirm Delete"
        open={isOpen}
        onOk={handleOk}
        onCancel={() => {
          handleClose()
          setSelectedUserId(null)
        }}
      >
        <p>Do you want to delete this user from your platform?</p>
      </Modal>
    </>
  )
}