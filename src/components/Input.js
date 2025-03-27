import React from "react";



export default function({
    type,
    value,
    onChange,
    label,
    ref,
    inputclass,
    className,
    placeholder
})
{

    return(
        <div className={`input-container d-flex-c ${className}`}>
            <label>{label}</label>
            <input className={`input-ele ${inputclass}`} 
            type={type} 
            placeholder={placeholder}
            onChange={onChange} 
            value={value} 
            ref={ref}/>
        </div>
    )
}