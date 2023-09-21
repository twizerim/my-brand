import React,{useState} from 'react';
import "../sass/blogscren.css"
import "../sass/style.css"
import BlogImages from '../components/home-container/blogimage';
import { FacebookOutlined,LinkedinOutlined,GithubOutlined} from '@ant-design/icons';
import SearchForm from '../components/forms/search-form';

import { Pagination } from 'antd';
import DocumentFile from '../components/blog-container/document';


const Blogdashboard = () => {
  const [article,setArticle]=useState(false)
  const [document,setDocument]=useState(false)
  const [gallery,setGallery]=useState(false)
  const [welcom,setWelcom]=useState(true)

  const handledocument = () =>{
     setArticle(false)
     setDocument(true)
     setGallery(false)
     setWelcom(false)
  }
  const handlearticle = () =>{
    setArticle(true)
     setDocument(false)
     setGallery(false)
     setWelcom(false)
  }
  const handlegallery = () =>{
    setArticle(false)
     setDocument(false)
     setGallery(true)
     setWelcom(false)
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
          <li className={document===true? "blonave-li":""} onClick={Goback}>Home</li>
          <li onClick={handlearticle} className={article===true? "blonave-li":""}>Articles</li>
         <li onClick={handledocument} className={document===true? "blonave-li":""}>Documents</li>
         <li onClick={handlegallery} className={gallery===true? "blonave-li":""}>Gallery</li>
          </div>
          <div className=' pt-4'>
             <SearchForm/>
          </div>
       </div>

       <div className='space'>
        {welcom && (
           <div className='welcomnumber'>
           <Pagination/>
          </div>
        )}
          {article && ( <h1>articles</h1>)}
         {document && (
            <div className='gallery'>
               <DocumentFile/>
            </div>
         )}
          {gallery && (
            <div className='gallery'>
               <BlogImages/>
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
