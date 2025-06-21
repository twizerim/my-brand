import React, { useState } from "react";
import { Table ,Modal} from "antd";
// import { DeleteColumnOutlined,EditOutlined } from "@ant-design/icons";


export default function DocumentPage(){
    const [open,setOpen] = useState(false)
    const modalOpen = () =>{
      setOpen(true)
    }
    const concel = () =>{
        setOpen(false)
    }
    return (
        <>
       <div>
       <div className="flex justify-between items-center" style={{paddingLeft:24,paddingRight:24, paddingTop:10 , paddingBottom:10}}>
            <p>All Document :<span> 23</span></p>
            <button className="bg-red-700" onClick={modalOpen} style={{borderRadius:5}}>Add Ducoment</button>
        </div>
         <div className=" w-full flex justify-between gap-10">
            <div style={{width:"80%"}}>
                <Table/>
            </div>
            <div style={{width:"20%",backgroundColor:"white",borderRadius:10,padding:12, height:"80vh"}}>
                <h1 className="text-left" style={{fontSize:"20px",fontWeight:"bold",paddingBottom:"10px"}}>Categories Of Document</h1>
                <div className="flex justify-between items-center" style={{padding:10,borderRadius:6,backgroundColor:"#ccc"}}>
                    <p>Catego name</p>
                    <div>
                      <span>Delete</span>
                      <span>Edit</span>
                    </div>
                </div>
            </div>
         </div>
       </div>
       <Modal open={open} onCancel={concel} onOk={concel}>
         <h1>Post</h1>
       </Modal>
        </>
    )
}