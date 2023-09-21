import React,{useState} from "react"
import Postimage from "./postimage"
import Postivideo from "./postvideo"
import Posticertif from "./postcertif"

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
        
        <div className="bg-blue-900">
            <ul className="flex justify-start items-center gap-10 py-10 px-5">
            <li onClick={Handleimage} className="text-5xl" style={{listStyle:"none"}}>Images</li>
            <li onClick={Handlevideo} className="text-5xl" style={{listStyle:"none"}}>Videos</li>
            <li onClick={Handledocume} className="text-5xl" style={{listStyle:"none"}}>Certificante</li>
            </ul>
           
        </div>
        <div className="bg-white">
        {postimage && (
            <Postimage/>
        )}
        {postvideo &&(
            <Postivideo/>
        )}
        {postidocuma && (
            <Posticertif/>
        )}
        </div>
        
        </>
    )
}