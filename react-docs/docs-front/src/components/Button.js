import React from "react";
import '../styles/componentstyles.css'

export default function Button({onClick,className,title,type}){


    return(
        <button type={type} className={`start-btn ${className}`} onClick={onClick}>{title}</button>
    )
}