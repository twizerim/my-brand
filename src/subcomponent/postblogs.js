
import React from "react";


export default function Postblogs(){
    return(
        <div className="postblog">
            <form>
                <div className="division">
                   <label>Title:
                      <input type="text"/>
                   </label>
                </div>
                <div className="division">
                   <label>Image:
                      <input type="file"/>
                   </label>
                </div>
                <div className="division">
                   <label>Description:
                      <input type="text"/>
                   </label>
                </div>
            </form>
        </div>
    )
}