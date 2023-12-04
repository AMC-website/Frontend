"use client"

import { useState, useEffect } from 'react';

import Image from 'next/image';

function map(value: number, start1: number, stop1: number, start2: number, stop2: number){
    let len1 = stop1 - start1;
    let len2 = stop2 - start2;
    return ((value - start1)/len1)*len2 + start2
}

export default function Logo() {
    const [logoWidth, setlogoWidth] = useState(60)
    const [logoHeight, setlogoHeight] = useState(50)
    const [isAtTop, setIsAtTop] = useState(false)


    useEffect(() => {
        // Define a function that is called when the scroll event fires
        const handleScroll = e => {
            let windowHeight = window.innerHeight;
            const triggerHeight = windowHeight*0.45;
            let y = window.scrollY;
    
            if(y <= windowHeight*0.45) {
                setlogoWidth(map(y, 0, triggerHeight, 60, 12));
                setlogoHeight(map(y, 0, triggerHeight, 50, 10));
                setIsAtTop(false)
            }else{
                setIsAtTop(true)
            }
        };
    
        // Add the event listener inside a useEffect
        if (document) {
          document.addEventListener("scroll", handleScroll);
        }
    
        // Remove the event listener on unmount
        return () => {
          if (document) {
            document.removeEventListener("scroll", handleScroll);
          }
        };
    }, [setlogoHeight, setlogoWidth, setIsAtTop]);
    
    return (
        <Image
            src="/logo new.png"
            alt="drone image"
            id="logo"
            width={1080}
            height={1080}
            style={{
                objectFit: 'cover',
                height: ((true) ? logoHeight : logoHeight) + "%",
                width:  ((true) ? logoWidth : logoWidth) + "%",
                marginBottom: 'auto',
                marginTop: 'auto',
                zIndex: (isAtTop ? 0 : 50),
                userSelect: 'none',
            }}
        />
    )
}