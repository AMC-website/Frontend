// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const Cursor = ({ children }) => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const handleMouseMove = (event) => {
//         setPosition({ x: event.clientX, y: event.clientY });
//     };
//     useEffect(() => {
//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return (
//         <div>
//             {children}
//             {false ? (
//                 <motion.div
//                     id="cursor"
//                     className="cursor"
//                     style={{
//                         position: 'fixed',
//                         height: '50px',
//                         width: '50px',
//                         borderRadius: '100%',
//                         border: '2px solid #ffff',
//                         zIndex: '9999',
//                         backgroundColor: 'transparent',
//                         left: `${position.x}px`,
//                         top: `${position.y}px`,
//                         transform: 'translate(-50%,-50%)',
//                         transition: 'scale 500ms ease-out',
//                         pointerEvents: 'none',
//                     }}
//                 />
//             ) : (
//                 <div
//                     style={{
//                         width: '100%',
//                         height: '100%',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: '10px',
//                             height: '20px',
//                             backgroundColor: 'white',
//                             position: 'relative',
//                             transform: 'rotate(45deg)',
//                         }}
//                     />
//                     <div
//                         style={{
//                             width: '10px',
//                             height: '20px',
//                             backgroundColor: 'white',
//                             position: 'relative',
//                             transform: 'rotate(-45deg)',
//                         }}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cursor;
