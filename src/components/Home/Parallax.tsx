import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Parallax = (props: Props) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const triggerElement = triggerRef.current;
        const targetElement = targetRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.185,
            },
        });

        tl.fromTo(
            targetElement,
            {
                width: '35em',
                height: '35em',
                borderRadius: '35em',
                duration: 1,
            },
            {
                width: '100vw',
                height: '100vh',
                borderRadius: '0em',
                duration: 0.5,
            }
        );
    }, []);
    return (
        <Box
            ref={triggerRef}
            sx={{
                height: '300vh',
                width: '100vw',
                backgroundColor: 'black',
                boxSizing: 'border-box',
                position: 'relative',
                overflow: 'scroll',
                zIndex: -20,
            }}
        >
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    position: 'fixed',
                    top: 0,
                    overflow: 'hidden',
                    paddingTop: '6em',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
            >
                <Box
                    ref={targetRef}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        boxSizing: 'border-box',
                        width: '35em',
                        height: '35em',
                        borderRadius: '35em',
                    }}
                >
                    <img
                        src="/drone1.jpg"
                        alt="drone"
                        style={{
                            width: '100vw',
                            height: '100vh',
                            objectFit: 'cover',
                            position: 'relative',
                            minWidth: '100vw',
                            boxSizing: 'border-box',
                            display: 'inline-block',
                            minHeight: '100vh',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Parallax;
