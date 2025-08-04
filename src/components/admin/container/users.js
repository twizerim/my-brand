import { Table } from "antd"
import { Columns } from "../userColumn"

export default function UserContainer(){

  const data = [
    {
    firstName:"Twizerimana",
    lastName:"Gedeon",
    email:"gedeon@gmail.com",
    role:"user",
    key:"id"
  },
  ]
  return (
    <>
     <Table columns={Columns} dataSource={data}/>
    </>
  )
}