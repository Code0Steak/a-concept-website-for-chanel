import React from 'react'
import {withRouter} from "react-router-dom"
import "./menu-item.styles.scss"

function MenuItem({title, img, size, history}) {
    

    return (
        <div className="menu-item" style = {{backgroundImage: `url(${img})`}} className={`${size} menu-item`}>
                    <div className="content">
    <h1 className="title">{title}</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

        // The with-history function allows us to pass the component with the 3 basic Router props!!
        //So there is no need of passing in a history prop through each of the parent component
        //This prevents props tunneling/drilling
    )
}  

export default withRouter(MenuItem);
