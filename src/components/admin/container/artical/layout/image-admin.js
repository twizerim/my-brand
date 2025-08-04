import {
    DeleteOutlined,
  EditOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import Image from "../../../../../assets/history.jpeg"
import { Pagination } from 'antd';

export default function Imagecontainer(){
    return (
        <>
         <div className='flex flex-col gap-3'>
            <div className='bg-white p-5 rounded-lg flex justify-between items-center'>
            <div className='flex  items-center gap-10 w-10/12'>
                <img className='w-[50px] h-[50] rounded-xl' src={Image} alt="go"/>
                <div className='w-full'>
                    <p className='w-full flex font-bold'>23456ADFGHHBVF7889sggj-<p>Name.jpeg</p></p>
                    <span className='w-full font-light'>Data of ago</span>
                </div>
            </div>
             <div className='flex justify-center items-center gap-10 '>
                <EditOutlined className='text-black text-3xl'/>
                <DeleteOutlined className='text-black text-3xl'/>
                <MoreOutlined className='text-black text-3xl'/>
             </div>
         </div>


         <div className='bg-white p-5 rounded-lg flex justify-between items-center'>
            <div className='flex  items-center gap-10 w-10/12'>
                <img className='w-[50px] h-[50] rounded-xl' src={Image} alt="go"/>
                <div className='w-full'>
                    <p className='w-full flex'>23456ADFGHHBVF7889sggj. <p>Name</p></p>
                    <span className='w-full'>Data of ago</span>
                </div>
            </div>
             <div className='flex justify-center items-center gap-10 '>
                <EditOutlined className='text-black text-3xl'/>
                <DeleteOutlined className='text-black text-3xl'/>
                <MoreOutlined className='text-black text-3xl'/>
             </div>
         </div>
         
         <Pagination defaultCurrent={1} total={30}/>
         </div>
        </>
    )
}