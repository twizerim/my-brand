
import React from "react";
import  Footer from "../component/footer"
import "../sass/otherpage.css"
import Navigation from "../component/header";



export default function Skillspage(){
    return (
        <>
        <Navigation/>
        <div className="skillpage">
             <di className="text"><h4>Figma</h4></di>
             <di className="row">
                 <di className="text"><h4>Javascript</h4></di>
                 <di className="text"><h4>Typescript</h4></di>
             </di>
        </div>
        {/* < Footer/> */}
        </>

    )
}