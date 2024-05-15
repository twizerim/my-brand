import React,{useState} from 'react';
import StarLogo from "../component/logo";
import "../sass/blogscren.css"
import BlogImages from '../component/blogimage';
import { FacebookOutlined,LinkedinOutlined,GithubOutlined,SearchOutlined} from '@ant-design/icons';


const number=["<","1","2","3","4","5","6","7","8","9","10",">"]

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
  return (
     <>
       <div className='bloghead'>
          <div className='logop'>
            <StarLogo className="blostar"/>
            <h1>TWIZERIMANA~Gedeon</h1>
          </div>
          <div className='search'>
             <div class="linksfixed">
              <a href="https://www.facebook.com/tgjant.gedeon"><FacebookOutlined className="fix"/></a>
               <a href="https://www.linkedin.com/in/twizerimana-gedeon-086791296"><LinkedinOutlined className="fix"/></a>
              <a href="https://github.com/twizerim"><GithubOutlined className="fix"/></a>
             </div>
             <form className='blogform'>
                <label className='bloglabel'>
                   <input placeholder='Search' id='search'/>
                   <SearchOutlined className='searchicon'/>
                </label>
             </form>
          </div>
       </div>
       <div className='blognav'>
         <li onClick={handlearticle} className={article===true? "blonave-li":""}>Articles</li>
         <li onClick={handledocument} className={document===true? "blonave-li":""}>Documents</li>
         <li><a href='/'>Home</a></li>
         <li onClick={handlegallery} className={gallery===true? "blonave-li":""}>Gallery</li>
       </div>

       <div className='space'>
        {welcom && (
           <div className='welcomnumber'>
           {number.map((num,index)=>(
              <div className='firstnumber' key={index}>
                <p className='num'>{num}</p>
              </div>
           ))}
          </div>
        )}
          {article && ( <h1>articles</h1>)}
         {document && (<h1>documents</h1>)}
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
