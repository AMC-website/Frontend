import React, { useEffect, useState } from 'react';
import {motion } from "framer-motion";




const Cursor = ({children}) => {

    const [position,setPosition] = useState({x:0,y:0});
    const handleMouseMove=(event:MouseEvent)=>{
        setPosition({x: event.clientX,y:event.clientY})
    }
useEffect(()=>{
    window.addEventListener("mousemove",handleMouseMove);

    return ()=>{
        window.removeEventListener("mousemove",handleMouseMove);
    }
},[])

return(
    <motion.div
    id='cursor'
    className='cursor'
    style={{
        position:"fixed",
        height:"50px",
        width:"50px",
        borderRadius:"100%",
        border:"2px solid #ffff",
        zIndex:"9999",
        backgroundColor:"transparent",
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: "translate(-50%,-50%)",
        transition:" scale 500ms ease-out",
        pointerEvents:"none",

    }}
    >
        {children}

    </motion.div>

    
)



}

export default Cursor;