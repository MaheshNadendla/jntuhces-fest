import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import ultron from "../assets/ultron.png";
import circleImg from "../assets/Circle.png";
import Bubbles1 from "../assets/Bubbles1.png";
import Bubbles2 from "../assets/Bubbles2.png";
import Birds from './Birds.jsx'

function Home() {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Responsive breakpoint

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 2000); // Switch every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100dvh",
        minWidth:"100dvw",
        backgroundColor: "#1e262a",
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Stack on mobile
        alignItems: "center",
        justifyContent: "center",
        zIndex:'5'
      }}
    >
      {/* Left Section (Hidden in Mobile) */}
      {!isMobile && (
        <Box className="left" sx={{ width: "33vw", display: "flex", justifyContent: "center", alignItems: "center" }} > <Birds/></Box>
      )}

      {/* Middle Section (Always Visible) */}
      <Box
        className="middle"
        sx={{
          height:'100%',
          width: isMobile ? "100vw" : "34vw",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Ultron Image (Responsive) */}
        <div
          style={{
            width: isMobile ? "60vw" : "65vh",
            height: isMobile ? "60vw" : "65vh",
            backgroundImage: `url(${ultron})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "5",
            filter : 'drop-shadow(5px 5px 5px red)',
          }}
        />

        {/* Circle Image (Now Responsive) */}
        <style>
          {`
          @keyframes rotate {
            from { transform: translate(-50%,-50%) rotate(0deg); }
            to { transform: translate(-50%,-50%) rotate(360deg); }
          }
          `}
        </style>

        <div
          style={{
            width: isMobile ? "70vw" : "60vh",
            height: isMobile ? "70vw" : "60vh",
            backgroundImage: `url(${circleImg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            top: isMobile ?  "45%" : "38%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            animation: "rotate 2s linear infinite",
            zIndex: "3",
            filter : 'drop-shadow(10px 15px 10px red)',
          }}
        >
          {/* Inner Circle */}
          <div
            style={{
              width: isMobile ? "35vw" : "30vh",
              height: isMobile ? "35vw" : "30vh",
              backgroundColor: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              border: "5px solid red",
              filter : 'drop-shadow(5px 5px 5px black)',
            }}
          />
        </div>

        {/* Bottom Shadow Box */}
        <div
          style={{
            height: isMobile ? "35vh" : "30vh",
            width: "100%",
            backgroundColor: "#1e262a",
            position: "absolute",
            top: "80%",
            boxShadow: "0px -30px 30px #1e262a",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "10",
          }}
        />
      </Box>

      {/* Right Section (Hidden in Mobile) */}
      {!isMobile && (
        <Box
          sx={{
            flexGrow: "0",
            width: "33vw",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="img" src={Bubbles1} alt="First" sx={{ position: "absolute", width: "100%", height: "85%", transition: "opacity 2s ease-in-out", opacity: showFirstImage ? 1 : 0 }} />
          <Box component="img" src={Bubbles2} alt="Second" sx={{ position: "absolute", width: "100%", height: "85%", transition: "opacity 2s ease-in-out", opacity: showFirstImage ? 0 : 1 }} />
        </Box>
      )}
    </div>
  );
}

export default Home;
