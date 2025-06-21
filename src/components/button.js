
import React from "react";
import "../../sass/login.css"


export default function Buttoncomponent(props){

    return (
        <div className="component">
            <button type="submit">{props.name}</button>
        </div>
    )
}