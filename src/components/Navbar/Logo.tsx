"use client"

import { useState, useEffect } from 'react';

function map(value: number, start1: number, stop1: number, start2: number, stop2: number){
    let len1 = stop1 - start1;
    let len2 = stop2 - start2;
    return ((value - start1)/len1)*len2 + start2
}

export default function Logo() {
    const [logoLeft, setLogoLeft] = useState(36)
    const [isAtTop, setIsAtTop] = useState(false)


    useEffect(() => {
        // Define a function that is called when the scroll event fires
        const handleScroll = e => {
            let windowHeight = window.innerHeight;
            const triggerHeight = windowHeight*0.45;
            let y = window.scrollY;
    
            if(y < triggerHeight) {
                setIsAtTop(false)
            }else if (y <= 2*windowHeight) {
                setLogoLeft(map(y, triggerHeight, 2*windowHeight, 36, 0));
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
    }, [setIsAtTop, setLogoLeft]);
    
    return (
        <img
            src="/logo new.png"
            alt="drone image"
            id="logo"
            width={1080}
            height={1080}
            style={{
                objectFit: 'cover',
                height: '70%',
                width:  '100%',
                marginBottom: 'auto',
                marginTop: 'auto',
                transition: 'transform 0.05s',
                display:(isAtTop ? '' : 'none'),
                transform: (true? ('translate('+logoLeft+'vw,0)'):('translate(36vw, 0)')),
                userSelect: 'none',

            }}
        />
    )
}