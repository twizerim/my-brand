import React, { useState } from "react";
import Imagecontainer from "../../components/admin/container/artical/layout/image-admin";
import UserContainer from "../../components/admin/container/users";
import { items } from "../../components/admin/menu-admin";
import Documacontainer from "../../components/admin/container/artical/layout/documa-admin";
import { Button, Menu,Dropdown } from "antd";
import SearchForm from "../../components/forms/search-form";
import { ProfileMenu } from "../../components/admin/drown";
import { DownOutlined,UserOutlined } from "@ant-design/icons";

export default function Adminpanal() {
  const [users, setUsers] = useState(false);
  const [Image, setImage] = useState(true);
  const [document,setDocument] = useState(false)
  const [selectedKey, setSelectedKey] = useState('');

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);

    const Goback = () =>{
        window.location.href="/"
    }

    if (key === '3') {
      // Contacts
      setImage(false);
      setDocument(false)
      setUsers(false);
    }else if(key === "2"){
        setUsers(true);
        setImage(false);
        setDocument(false)
    }
     else if (key === '5') {
      // Articals children
      setImage(true);
      setDocument(false)
      setUsers(false);
    }else if(key === "6"){
        setDocument(true)
       setImage(false);
      setUsers(false);
    } else if (key === '1') {
      Goback()
    }
  };


  return (
    <div className="flex">
      <div className="flex flex-col justify-between items-center w-[200px] h-[100vh] py-10">

        <div className="flex flex-col gap-20">
            <div className="flex flex-col justify-center items-center gap-3">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Prof" className="w-[80px] h-[80px]"/>
            <h3 className="text-black text-2xl">Twizerimana Gedeon</h3>
        </div>
      
        <Menu
          mode="inline"
          items={items}
          onClick={handleMenuClick}
          selectedKeys={[selectedKey]}
        />
        </div>
        <h2 className="text-black">&copy;2024&lowast; Brand</h2>
      </div>
      <div className="w-11/12 bg-[#eee] h-[100vh] px-10">
        {Image && (
          <div className="flex justify-between items-center py-10">
            <p className="text-3xl font-bold">Image-18</p>
            <div className="flex justify-end items-center gap-20">
               <SearchForm/>
               <div className="flex justify-center items-center gap-3">
                 <Button>Add Image</Button>
               <Dropdown overlay={ProfileMenu} placement="bottomRight">
               <p className="bg-white p-2 rounded-md"><UserOutlined className="text-blue-600"/> View Account <DownOutlined className="text-sm"/></p>
               </Dropdown>
               </div>
            </div>
         </div>
        )}
        {users && (
           <div className="flex justify-between items-center py-10">
            <p className="text-3xl font-bold">All Followers: 18</p>
            <div className="flex justify-end items-center gap-20">
               <SearchForm/>
               <div className="flex justify-center items-center gap-3">
               <Dropdown overlay={ProfileMenu} placement="bottomRight">
               <p className="bg-white p-2 rounded-md"><UserOutlined className="text-blue-600"/> View Account <DownOutlined className="text-sm"/></p>
               </Dropdown>
               </div>
            </div>
         </div>
        )}
        {document && (
            <div className="flex justify-between items-center py-10">
            <p className="text-3xl font-bold">Documents-15</p>
            <div className="flex justify-end items-center gap-20">
               <SearchForm/>
               <div className="flex justify-center items-center gap-3">
                 <Button>Add Document</Button>
               <Dropdown overlay={ProfileMenu} placement="bottomRight">
               <p className="bg-white p-2 rounded-md"><UserOutlined className="text-blue-600"/> View Account <DownOutlined className="text-sm"/></p>
               </Dropdown>
               </div>
            </div>
         </div>
        )}
        {Image && <Imagecontainer />}
        {users && <UserContainer />}
        {document && <Documacontainer/>}
      </div>
    </div>
  );
}