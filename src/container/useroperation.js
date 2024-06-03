
import React,{useState} from "react";

export default function Useroparation(){
    const [update,setUpdata]=useState(false)
    const [getall,setgetall]=useState(true)
    const [deleteuser,setDeleteuser]=useState(false)
    const [getone,setgetone]=useState(false)

    const handleget = () =>{
        setDeleteuser(false)
        setUpdata(false)
        setgetall(true)
        setgetone(false)
    }
    const handlegetone = () =>{
        setDeleteuser(false)
        setUpdata(false)
        setgetall(false)
        setgetone(true)
    }
    const handleupdate = () =>{
        setDeleteuser(false)
        setUpdata(true)
        setgetall(false)
        setgetone(false)
    }
    const handledelete = () =>{
        setDeleteuser(true)
        setUpdata(false)
        setgetall(false)
        setgetone(false)
    }
    return(
        <div className="oparetioncontant">
            <div>
                <span  onClick={handleupdate}>upd</span>,<span onClick={handledelete}>dele</span>,<span onClick={handlegetone}>geone</span>,
                <span onClick={handleget}>geone</span>,
            </div>
            {update &&(<h1>update user</h1>)}
            {deleteuser && (<h1>delete user</h1>)}
            {getone && (<h1 >get one user</h1>)}
            {getall && (<h1 >getall user</h1>)}
        </div>
    )
}