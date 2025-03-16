import { useState, useEffect } from "react";
import { Box, Container ,Typography } from "@mui/material";

import yuga from '../assets/yuga2.png';
import civil from '../assets/civil.png';
import mech from '../assets/mech.png';
import ece from '../assets/ece.png';
import buttonImg from '../assets/buttonbg2.png';
import ButtonHeading from "./ButtonHeading";

const images = [yuga, civil, mech, ece];

const PhotoDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
        pt: 2,
      
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection : "column"
      }}
    >

     <ButtonHeading name="Branches"/>


      <Box
        component="img"
        src={images[currentIndex]}
        alt="Slideshow"
        sx={{
          width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" },
          maxWidth: "600px",
          height: "auto",
          mt: "9vh",
          borderRadius: "10px",
          filter: "drop-shadow(5px 5px 5px red)",
          transition: "opacity 1s ease-in-out",
          opacity: 1,
        }}
      />
    </Container>
  );
};

export default PhotoDisplay;
