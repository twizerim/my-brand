import React,{useState} from 'react';
import "../../sass/blogscren.css"
import "../../sass/style.css"
import { FacebookOutlined,LinkedinOutlined,GithubOutlined,ArrowLeftOutlined} from '@ant-design/icons';
import SearchForm from '../../components/forms/search-form';

import { Pagination} from 'antd';
import Images from '../../components/client/blog-container/image';
import DocumentFile from '../../components/client/blog-container/document';



const Blogdashboard = () => {
  const [article,setArticle]=useState(false)
  const [document,setDocument]=useState(false)
  const [gallery,setGallery]=useState(true)
  
  const handledocument = () =>{
     setArticle(false)
     setDocument(true)
     setGallery(false)
  }
  const handlearticle = () =>{
    setArticle(true)
     setDocument(false)
     setGallery(false)
  }
  const handlegallery = () =>{
    setArticle(false)
     setDocument(false)
     setGallery(true)
  }
  const Goback = () =>{
    window.location.href='/'
  }
  return (
     <>
       <div className='bloghead'>
         <div className='bg-blue-900 flex justify-start items-center h-[15vh] w-full px-[50px]'>
             <hi className='text-5xl'>My Blogs</hi>
         </div>
       </div>
       <div className='blognav'>
         
          <div className='flex justify-center items-center gap-10'>
          <li onClick={Goback}><ArrowLeftOutlined style={{color:"#F0147A"}}/></li>
          <li onClick={handlearticle} className={article===true? "blonave-li":""}>Articles</li>
         <li onClick={handledocument} className={document===true? "blonave-li":""}>Documents</li>
         <li onClick={handlegallery} className={gallery===true? "blonave-li":""}>Gallery</li>
          </div>
          {gallery && (
            <div className=' flex justify-center items-center gap-5 pt-4'>
             <SearchForm name="Search image"/>

          </div>
          )}
          {document && (
            <div className=' flex justify-center items-center gap-5 pt-4'>
             <SearchForm name="Search document"/>

          </div>
          )}
          {article && (
            <div className=' flex justify-center items-center gap-5 pt-4'>
             <SearchForm name="Search article"/>

          </div>
          )}
          
          
       </div>

       <div className='space'>
        
          {article && ( 
          <h1>articles</h1>
          )}
         {document && (
            <div className='gallery'>
               <DocumentFile/>
               <Pagination/>
            </div>
         )}
          {gallery && (
            <div className='gallery'>
               <Images/>
               <Pagination/>
            </div>
          )}
       </div>
       <div className='blogfooter'>
          <span>Made by TWIZERIMANA Creative &copy;2023</span>
          <div class="linksfixed">
               <a href="https://www.facebook.com/tgjant.gedeon"><FacebookOutlined className="fix"/></a>
               <a href="https://www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedinOutlined className="fix"/></a>
              <a href="https://github.com/twizerim"><GithubOutlined className="fix"/></a>
             </div>
       </div>
     </>
  );
};

export default Blogdashboard;
