import { Typography, useTheme, useMediaQuery } from "@mui/material";
import buttonImg from "../assets/buttonbg2.png";
import React from "react";

function ButtonHeading({ name }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Typography
      variant={isMobile ? "h5" : "h3"} // Smaller text on mobile
      sx={{
        width: "fit-content", // Takes only necessary width
        mx: "auto", // Centers it horizontally
        mt: { xs: "5vh", sm: "8vh" }, // Adjusts margin-top for mobile
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        py: { xs: 2, sm: 3 }, // Responsive vertical padding
        borderRadius: "8px", // Rounded corners
        color: "white", // White text for better contrast
        fontWeight: "bold", // Bold text
        textAlign: "center", // Center text inside
        backgroundImage: `url(${buttonImg})`,
        backgroundSize: "100% 100%", // Ensures full coverage
        backgroundPosition: "center", // Keeps the focus in the center
        backgroundRepeat: "no-repeat", // No repetition
      }}
    >
      {name}
    </Typography>
  );
}

export default ButtonHeading;






