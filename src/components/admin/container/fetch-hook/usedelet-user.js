import { useState } from "react"
import { useDeleteUserByIdMutation } from "../../../redux/apiSlice"
import { notification } from "antd"

export const useDeleteUser = () => {
  const [isOpen, setIOpen] = useState(false)
  const [deleteUser] = useDeleteUserByIdMutation()

  const handleOpen = () => {
    setIOpen(true)
  }
  const handleClose = () => {
    setIOpen(false)
  }

  const handleDelete = async (userId) => {
    try {
      const res = await deleteUser(userId).unwrap()
      notification.success({ message: res.message })
    } catch (err) {
      notification.error({ message: "Failed to delete user" })
    }
  }

  return { isOpen, handleClose, handleOpen, handleDelete }
}