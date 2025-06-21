import React,{useState} from "react"
import DocumentPage from "./page/document"
import ImagePage from "./page/image"
import NewsPage from "./page/news"

export default function Loyout(){
    const [postimage,setpostimage]=useState(true)
    const [postvideo,setpostvideo]=useState(false)
    const [postidocuma,setpostdocuma]=useState(false)
    
    const Handleimage = () =>{
       setpostdocuma(false)
       setpostimage(true)
       setpostvideo(false)
    } 
    const Handlevideo = () =>{
        setpostdocuma(false)
        setpostimage(false)
        setpostvideo(true)
    } 
    const Handledocume = () =>{
        setpostdocuma(true)
        setpostimage(false)
        setpostvideo(false)
    }   
    return(
        <>
        
        <div style={{backgroundColor:"#1e3a8a",padding:"20px"}}>
            <ul className="flex justify-start items-center gap-10 py-10 px-5">
            <li onClick={Handleimage} className="text-5xl" style={{listStyle:"none"}}>Images</li>
            <li onClick={Handlevideo} className="text-5xl" style={{listStyle:"none"}}>Videos</li>
            <li onClick={Handledocume} className="text-5xl" style={{listStyle:"none"}}>Certificante</li>
            </ul>
           
        </div>
        <div style={{backgroundColor:"#ccc",height:"100vh",padding:10}}>
        {postimage && (
            <ImagePage/>
        )}
        {postvideo &&(
            <NewsPage/>
        )}
        {postidocuma && (
            <DocumentPage/>
        )}
        </div>
        
        </>
    )
}