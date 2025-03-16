// import { Container, Typography, Box, Link } from "@mui/material";
// import React from "react";

// function Contact() {
//   return (
//     <Container
//       sx={{
//         textAlign: "center",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         width: "100dvw", // Full viewport width
//         maxWidth:'100dvw'
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Contact Us
//       </Typography>

//       <Typography variant="body1" gutterBottom>
//         For any inquiries, reach out to us at{" "}
//         <Link
//           href="mailto:contact@blogwebsite.com"
//           sx={{ color: "red", fontWeight: "bold" }}
//         >
//           contact@blogwebsite.com
//         </Link>
//       </Typography>

//       <Typography variant="body1" gutterBottom>
//         Phone:{" "}
//         <Link href="tel:+1234567890" sx={{ color: "red", fontWeight: "bold" }}>
//           +1 (234) 567-890
//         </Link>
//       </Typography>

//       <Typography variant="body1" gutterBottom>
//         Address: 123 Tech Street, Web City, WC 56789
//       </Typography>

//       <Box sx={{ marginTop: 2 }}>
//         <Typography variant="body1">Follow us on:</Typography>
//         <Link
//           href="https://twitter.com/yourhandle"
//           target="_blank"
//           sx={{ color: "red", fontWeight: "bold", marginRight: 2 }}
//         >
//           Twitter
//         </Link>
//         <Link
//           href="https://linkedin.com/in/yourprofile"
//           target="_blank"
//           sx={{ color: "red", fontWeight: "bold" }}
//         >
//           LinkedIn
//         </Link>
//       </Box>
//     </Container>
//   );
// }

// export default Contact;







import { Container, Typography, Box, Link } from "@mui/material";
import React from "react";
import ButtonHeading from "./ButtonHeading";

function Contact() {
  return (
    <Container
      disableGutters // Removes default padding
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        maxWidth: "100vw", // Ensures full viewport width
        padding: "0 !important", // Override default MUI padding
        margin: "0 auto", // Centers the content
      }}
    >
      
      {/* <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography> */}

      <ButtonHeading name="Contact Us" />

      
      <Container

        disableGutters // Removes default padding
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          maxWidth: "100vw", // Ensures full viewport width
          padding: "0 !important", // Override default MUI padding
          margin: "0 auto", // Centers the content
        }}

      >


      <Typography variant="body1" gutterBottom>
        For any inquiries, reach out to us at{" "}
        <Link
          href="mailto:yuga2025jntuhuces@gmail.com"
          sx={{ color: "YELLOW", fontWeight: "bold" }}
        >
          yuga2025jntuhuces@gmail.com
        </Link>
      </Typography>

      <Typography variant="body1" gutterBottom>
        Phone:{" "}
        <Link href="tel:+1234567890" sx={{ color: "YELLOW", fontWeight: "bold" }}>
          +91 70329 53315
        </Link>
      </Typography>

      <Typography variant="body1" gutterBottom>
        Address: JNTUHCES Sultanpur(Vill) Pulkal(Mdl)
      </Typography>

      <Typography variant="body1" gutterBottom>
                SangaReddy(Dist)    502273,Telangana(India)
      </Typography>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1">Follow us on:</Typography>
        <Link
          href="https://www.instagram.com/yuga2k25?utm_source=qr&igsh=Mnpkc2M2ZXkwNG5m"
          target="_blank"
          sx={{ color: "YELLOW", fontWeight: "bold", marginRight: 2 }}
        >
          Instagram
        </Link>
        <Link
          href="https://www.instagram.com/yuga2k25?utm_source=qr&igsh=Mnpkc2M2ZXkwNG5m"
          target="_blank"
          sx={{ color: "YELLOW", fontWeight: "bold" }}
        >
          Instagram
        </Link>
      </Box>

      </Container>

    </Container>
  );
}

export default Contact;

