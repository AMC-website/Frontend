import { motion} from 'framer-motion';
import styles from "@/styles/home.module.css"
import { useState,useEffect } from 'react';
import { Box, } from '@mui/material';

export default function ParallaxImage(){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const height = 35 + scrollY*0.05;
    const width = 35 + scrollY*0.04;

  
    return(
        <Box
        sx={{
            height:"300vh",
            backgroundColor:"black",
            boxSizing:"border-box",
            position:"relative",
            overflow:"scroll",
            zIndex:-20,
            
        }}
        
        >
        
        <Box
        sx={{
            width: "100%",
            height: "100vh",
           justifyContent:"center",
           alignItems:"center",
            display: "flex",
            position: "fixed",
            top: "0",
            overflow: "hidden",
            zIndex:-10,

            
        }}
        >
            
        <motion.div
        className='wrap'
        style={{
            borderRadius: 80-scrollY*0.055+"em",
            height: height+"vh",
            width: width+"vw",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            boxSizing:"border-box",
            display:"flex",
            position:"relative",
            transitionTimingFunction:"step-start"
            
        }}
        >
             <img className={styles.sticky_circle_img} src='/drone1.jpg' alt='drone'></img>
        </motion.div>
       
      </Box>
      </Box>
    )

}