// import { Container, Box } from "@mui/material";
// import React, { useEffect, useRef } from "react";
// import sword1 from "../assets/axe.png";
// import sword2 from "../assets/axe.png";

// function WorkShops() {
//   const sword1Ref = useRef(null);
//   const sword2Ref = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

//       // Normalize progress from 0% (start) to 200% (end)
//       const progress = maxScroll > 0 ? (scrollY / maxScroll) * 2 : 0;

//       let position;
//       if (progress <= 0.5) {
//         // Move from 0% → 100% (Left & Right 0 to Center)
//         position = progress * 100;
//       } else if (progress <= 1.5) {
//         // Stay in center from 100% to 100% (Overlapping)
//         position = 50;
//       } else {
//         // Move from 100% → 200% (Center to Left & Right 0 again)
//         position = (2 - progress) * 100;
//       }

//       if (sword1Ref.current) {
//         sword1Ref.current.style.left = `${position}%`;
//       }
//       if (sword2Ref.current) {
//         sword2Ref.current.style.right = `${position}%`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Container
//       maxWidth={false}
//       style={{ height: "300vh", backgroundColor: "black", position: "relative", overflowY: "scroll" }}
//     >
//       <Box
//         sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
//       >
//         <img
//           ref={sword1Ref}
//           src={sword1}
//           alt="Sword 1"
//           style={{
//             position: "absolute",
//             top: "30%",
//             left: "0%",
//             width: "550px",
//             height: "450px",
//             transition: "left 0.1s linear",
//           }}
//         />
//         <img
//           ref={sword2Ref}
//           src={sword2}
//           alt="Sword 2"
//           style={{
//             position: "absolute",
//             top: "30%",
//             right: "0%",
//             width: "550px",
//             height: "450px",
//             transition: "right 0.1s linear",
//           }}
//         />
//       </Box>
//     </Container>
//   );
// }

// // export default WorkShops;
// import React, { useEffect, useRef, useState } from "react";
// import { Container, Box } from "@mui/material";
// import sword from "../assets/axe.png";

// function WorkShops() {
//   const swordRef = useRef(null);
//   const [imageWidth, setImageWidth] = useState(0);

//   useEffect(() => {
//     if (swordRef.current) {
//       setImageWidth(swordRef.current.getBoundingClientRect().width);
//     }

//     const handleScroll = () => {
//       const component = document.getElementById("workshop-section");
//       if (!component || !swordRef.current) return;

//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Calculate how much of the component is visible
//       let visiblePercentage = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1) * 100;

//       // Move image from 0% → 50%
//       const position = visiblePercentage / 2;

//       // Apply centering dynamically
//       swordRef.current.style.left = `calc(${position}% - ${imageWidth / 2}px)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [imageWidth]); // Update when image width changes

//   return (
//     <Container
//       id="workshop-section"
//       maxWidth={false}
//       style={{ height: "100vh", backgroundColor: "black", position: "relative", overflowY: "scroll" }}
//     >
//       <Box sx={{ height: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
//         <img
//           ref={swordRef}
//           src={sword}
//           alt="Sword"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transform: "translateY(-50%)",
//             transition: "left 0.1s linear",
//             left: "0%", // Starts at left 0%
//             width: "550px", // Keeps original width
//             maxWidth: "100%", // Prevents overflow
//           }}
//         />
//       </Box>
//     </Container>
//   );
// }

// export default WorkShops;




// import React, { useEffect, useRef, useState } from "react";
// import { Container, Box } from "@mui/material";
// import sword from "../assets/axe.png";

// function WorkShops() {
//   const swordRef = useRef(null);
//   const [imageWidth, setImageWidth] = useState(0);

//   useEffect(() => {
//     if (swordRef.current) {
//       setImageWidth(swordRef.current.getBoundingClientRect().width);
//     }

//     const handleScroll = () => {
//       const component = document.getElementById("workshop-section");
//       if (!component || !swordRef.current) return;

//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // How much the component is visible (0% to 100%)
//       let visiblePercentage = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1) * 100;

//       // How much the component is leaving (0% to 100%)
//       let exitPercentage = Math.min(Math.max((0 - rect.top) / windowHeight, 0), 1) * 100;

//       // Move from 0% → 50% while entering, and 50% → 100% while exiting
//       let position = visiblePercentage / 2 + exitPercentage / 2;

//       // Apply centering dynamically
//       swordRef.current.style.left = `calc(${position}% - ${imageWidth / 2}px)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [imageWidth]); // Update when image width changes

//   return (
//     <Container
//       id="workshop-section"
//       maxWidth={false}
//       style={{ height: "100vh", backgroundColor: "black", position: "relative", overflow: "hidden" }}
//     >
//       <Box sx={{ height: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
//         <img
//           ref={swordRef}
//           src={sword}
//           alt="Sword"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transform: "translateY(-50%)",
//             transition: "left 0.1s linear",
//             left: "0%", // Starts at left 0%
//             width: "550px", // Keeps original width
//             maxWidth: "100%", // Prevents overflow
//           }}
//         />
//       </Box>
//     </Container>
//   );
// }

// export default WorkShops;



// import React, { useEffect, useRef, useState } from "react";
// import { Container, Box } from "@mui/material";
// import sword from "../assets/axe.png"; // Left Image
// import shield from "../assets/axe.png"; // Right Image (New)

// function WorkShops() {
//   const swordRef = useRef(null);
//   const shieldRef = useRef(null);
//   const [imageWidth, setImageWidth] = useState(0);

//   useEffect(() => {
//     if (swordRef.current) {
//       setImageWidth(swordRef.current.getBoundingClientRect().width);
//     }

//     const handleScroll = () => {
//       const component = document.getElementById("workshop-section");
//       if (!component || !swordRef.current || !shieldRef.current) return;

//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // How much the component is visible (0% to 100%)
//       let visiblePercentage = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1) * 100;

//       // How much the component is leaving (0% to 100%)
//       let exitPercentage = Math.min(Math.max((0 - rect.top) / windowHeight, 0), 1) * 100;

//       // Move from 0% → 50% while entering, and 50% → 100% while exiting
//       let leftPosition = visiblePercentage / 2 + exitPercentage / 2; // Left Image
//       let rightPosition = 100 - leftPosition; // Right Image (Opposite)

//       // Apply centering dynamically
//       swordRef.current.style.left = `calc(${leftPosition}% - ${imageWidth / 2}px)`;
//       shieldRef.current.style.left = `calc(${rightPosition}% - ${imageWidth / 2}px)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [imageWidth]); // Update when image width changes

//   return (
//     <Container
//       id="workshop-section"
//       maxWidth={false}
//       style={{ height: "100vh", backgroundColor: "black", position: "relative", overflow: "hidden" }}
//     >
//       <Box sx={{ height: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
//         {/* Left Moving Image */}
//         <img
//           ref={swordRef}
//           src={sword}
//           alt="Sword"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transform: "translateY(-50%)",
//             transition: "left 0.1s linear",
//             left: "0%", // Starts at left 0%
//             width: "550px",
//             maxWidth: "100%",
//           }}
//         />

//         {/* Right Moving Image (Opposite Direction) */}
//         <img
//           ref={shieldRef}
//           src={shield}
//           alt="Shield"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transform: "translateY(-50%)",
//             transition: "left 0.1s linear",
//             left: "100%", // Starts at right 100%
//             width: "550px",
//             maxWidth: "100%",
//           }}
//         />
//       </Box>
//     </Container>
//   );
// }

// export default WorkShops;




// import React, { useEffect, useRef, useState } from "react";
// import { Container, Box } from "@mui/material";
// import sword from "../assets/axe.png"; // Left Image
// import shield from "../assets/axe.png"; // Right Image

// function WorkShops() {
//   const swordRef = useRef(null);
//   const shieldRef = useRef(null);
//   const [imageWidth, setImageWidth] = useState(0);

//   useEffect(() => {
//     if (swordRef.current) {
//       setImageWidth(swordRef.current.getBoundingClientRect().width);
//     }

//     const handleScroll = () => {
//       const component = document.getElementById("workshop-section");
//       if (!component || !swordRef.current || !shieldRef.current) return;

//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // How much the component is visible (0% to 100%)
//       let visiblePercentage = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1) * 100;

//       // How much the component is leaving (0% to 100%)
//       let exitPercentage = Math.min(Math.max((0 - rect.top) / windowHeight, 0), 1) * 100;

//       // Move from 0% → 50% while entering, and 50% → 100% while exiting
//       let leftPosition = visiblePercentage / 2 + exitPercentage / 2; // Left Image
//       let rightPosition = 100 - leftPosition; // Right Image (Opposite)

//       // Rotation based on scroll (0° → 360° as it moves)
//       let rotation = visiblePercentage * 3.6 + exitPercentage * 3.6; // Full spin when fully scrolled

//       // Apply styles dynamically
//       swordRef.current.style.left = `calc(${leftPosition}% - ${imageWidth / 2}px)`;
//       shieldRef.current.style.left = `calc(${rightPosition}% - ${imageWidth / 2}px)`;
      
//       swordRef.current.style.transform = `translateY(-50%) rotate(${rotation}deg)`;
//       shieldRef.current.style.transform = `translateY(-50%) rotate(-${rotation}deg)`; // Opposite spin
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [imageWidth]);

//   return (
//     <Container
//       id="workshop-section"
//       maxWidth={false}
//       style={{ height: "100vh", backgroundColor: "black", position: "relative", overflow: "hidden" }}
//     >
//       <Box sx={{ height: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
//         {/* Left Moving Image */}
//         <img
//           ref={swordRef}
//           src={sword}
//           alt="Sword"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transition: "left 0.1s linear, transform 0.1s linear",
//             left: "0%",
//             width: "550px",
//             maxWidth: "100%",
//           }}
//         />

//         {/* Right Moving Image (Opposite Direction) */}
//         <img
//           ref={shieldRef}
//           src={shield}
//           alt="Shield"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transition: "left 0.1s linear, transform 0.1s linear",
//             left: "100%",
//             width: "550px",
//             maxWidth: "100%",
//           }}
//         />
//       </Box>
//     </Container>
//   );
// }

// export default WorkShops;










// import React, { useEffect, useRef, useState } from "react";
// import { Container, Box } from "@mui/material";
// import sword from "../assets/axex.png"; // Left Image
// import shield from "../assets/axex2.png"; // Right Image

// function WorkShops() {
//   const swordRef = useRef(null);
//   const shieldRef = useRef(null);
//   const [imageWidth, setImageWidth] = useState(0);
//   const rotationSpeed = 4.5; // Change this value to control rotation speed

//   useEffect(() => {
//     if (swordRef.current) {
//       setImageWidth(swordRef.current.getBoundingClientRect().width);
//     }

//     const handleScroll = () => {
//       const component = document.getElementById("workshop-section");
//       if (!component || !swordRef.current || !shieldRef.current) return;

//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // How much the component is visible (0% to 100%)
//       let visiblePercentage = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1) * 100;

//       // How much the component is leaving (0% to 100%)
//       let exitPercentage = Math.min(Math.max((0 - rect.top) / windowHeight, 0), 1) * 100;

//       // Move from 0% → 50% while entering, and 50% → 100% while exiting
//       let leftPosition = visiblePercentage / 2 + exitPercentage / 2; // Left Image
//       let rightPosition = 100 - leftPosition; // Right Image (Opposite)

//       // Rotation based on scroll and rotation speed multiplier
//       let rotation = (visiblePercentage + exitPercentage) * rotationSpeed; // Adjust spin speed

//       // Apply styles dynamically
//       swordRef.current.style.left = `calc(${leftPosition}% - ${imageWidth / 2}px)`;
//       shieldRef.current.style.left = `calc(${rightPosition}% - ${imageWidth / 2}px)`;
      
//       swordRef.current.style.transform = `translateY(-50%) rotate(${rotation}deg)`;
//       shieldRef.current.style.transform = `translateY(-50%) rotate(-${rotation}deg)`; // Opposite spin
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [imageWidth, rotationSpeed]);

//   return (
//     <Container
//       id="workshop-section"
//       maxWidth={false}
//       style={{ height: "100vh", backgroundColor: "", position: "relative", overflow: "hidden" }}
//     >
//       <Box sx={{ height: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
//         {/* Left Moving Image */}
//         <img
//           ref={swordRef}
//           src={sword}
//           alt="Sword"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transition: "left 0.1s linear, transform 0.1s linear",
//             left: "0%",
//             width: "550px",
//             maxWidth: "100%",
//             filter : 'drop-shadow(5px 5px 5px red)',
//           }}
//         />

//         {/* Right Moving Image (Opposite Direction) */}
//         <img
//           ref={shieldRef}
//           src={shield}
//           alt="Shield"
//           style={{
//             position: "absolute",
//             top: "50%",
//             transition: "left 0.1s linear, transform 0.1s linear",
//             left: "100%",
//             width: "550px",
//             maxWidth: "100%",
//             filter : 'drop-shadow(5px 5px 5px red)',
//           }}
//         />
//       </Box>
//     </Container>
//   );
// }

// export default WorkShops;



import React, { useEffect, useRef, useState } from "react";
import { Container, Box } from "@mui/material";
import sword from "../assets/axex.png";
import shield from "../assets/axex2.png";

function WorkShops() {
  const swordRef = useRef(null);
  const shieldRef = useRef(null);
  const [imageWidth, setImageWidth] = useState(0);
  const rotationSpeed = 4.5;

  useEffect(() => {
    if (swordRef.current) {
      setImageWidth(swordRef.current.getBoundingClientRect().width);
    }

    const handleScroll = () => {
      const component = document.getElementById("workshop-section");
      if (!component || !swordRef.current || !shieldRef.current) return;

      const rect = component.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let visiblePercentage = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1) * 100;
      let exitPercentage = Math.min(Math.max((0 - rect.top) / windowHeight, 0), 1) * 100;

      let leftPosition = visiblePercentage / 2 + exitPercentage / 2;
      let rightPosition = 100 - leftPosition;
      let rotation = (visiblePercentage + exitPercentage) * rotationSpeed;

      swordRef.current.style.left = `calc(${leftPosition}% - ${imageWidth / 2}px)`;
      shieldRef.current.style.left = `calc(${rightPosition}% - ${imageWidth / 2}px)`;
      
      swordRef.current.style.transform = `translateY(-50%) rotate(${rotation}deg)`;
      shieldRef.current.style.transform = `translateY(-50%) rotate(-${rotation}deg)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageWidth, rotationSpeed]);

  return (
    <Container
      id="workshop-section"
      maxWidth={false}
      sx={{ height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <Box sx={{ height: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
        <Box
          component="img"
          ref={swordRef}
          src={sword}
          alt="Sword"
          sx={{
            position: "absolute",
            top: "50%",
            transition: "left 0.1s linear, transform 0.1s linear",
            left: "0%",
            width: { xs: "250px", sm: "400px", md: "500px", lg: "550px" },
            maxWidth: "100%",
            filter: "drop-shadow(5px 5px 5px red)",
          }}
        />
        <Box
          component="img"
          ref={shieldRef}
          src={shield}
          alt="Shield"
          sx={{
            position: "absolute",
            top: "50%",
            transition: "left 0.1s linear, transform 0.1s linear",
            left: "100%",
            width: { xs: "250px", sm: "400px", md: "500px", lg: "550px" },
            maxWidth: "100%",
            filter: "drop-shadow(5px 5px 5px red)",
          }}
        />
      </Box>
    </Container>
  );
}

export default WorkShops;


