import { Box } from "@mui/material";
import { ReactNode, useEffect, useState, useRef } from "react";

export default function ThreeDCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const element = ref.current;
  const [coordinates, setValues] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseout", handleMouseOut);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [element]);

  function handleMouseMove(event: MouseEvent) {
    let x = (window.innerWidth / 2 - event.pageX) / 15;
    let y = (window.innerHeight / 2 - event.pageY) / 15;
    setValues({ x: x, y: y });
  }

  function handleMouseOut(event: MouseEvent) {
    setValues({ x: 0, y: 0 });
  }

  return (
    <Box
      ref={ref}
      sx={{
        transform: `rotateY(${coordinates.x}deg) rotateX(${coordinates.y}deg)`,
        perspective: "900px",

        
      }}
    >
      {children}
    </Box>
  );
}
