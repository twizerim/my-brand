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
        <div className="div-header">
            <button onClick={Handleimage}>Images</button>
            <button onClick={Handlevideo}>Videos</button>
            <button onClick={Handledocume}>Certificante</button>
        </div>
        {postimage && (
            <Postimage/>
        )}
        {postvideo &&(
            <Postivideo/>
        )}
        {postidocuma && (
            <Posticertif/>
        )}
        </>
    )
}