import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

import yuga from "../assets/yuga.png";
import frame from "../assets/Frame.png";
import buttonImg from "../assets/buttonbg2.png";
import ButtonHeading from "./ButtonHeading";

const NonTechevents = [
  { title: "E-SPORTS", description: "Description for Event 1", image: yuga, frame: frame },
  { title: "TREASURE HUNT", description: "Description for Event 2", image: yuga, frame: frame },
  { title: "FLASH MOB", description: "Description for Event 3", image: yuga, frame: frame },
  { title: "THEATRE", description: "Description for Event 4", image: yuga, frame: frame },
  { title: "STACK AND RUN", description: "Description for Event 3", image: yuga, frame: frame },
  { title: "SOON", description: "Description for Event 4", image: yuga, frame: frame },
];

// Each event has a separate frame
const Techevents = [
  { title: "IDEATHON", description: "Description for Event 1", image: yuga, frame: frame },
  { title: "PROJECT EXPO", description: "Description for Event 2", image: yuga, frame: frame },
  { title: "CODE CLASH", description: "Description for Event 3", image: yuga, frame: frame },
  { title: "PATTERNIX", description: "Description for Event 4", image: yuga, frame: frame },
  { title: "DEBUGGING", description: "Description for Event 3", image: yuga, frame: frame },
  { title: "BLIND CODE", description: "Description for Event 4", image: yuga, frame: frame },
];

const EventsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100dvw",
        padding: "10px",
      }}
    >


      <ButtonHeading name="Tech Events"/>




      <Grid container spacing={2} justifyContent="center">
        {Techevents.map((event, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                minWidth: 100,
                textAlign: "center",
                padding: 2,
                margin: 4,
                position: "relative",
                backgroundColor: "transparent",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center everything
              }}
            >
              {/* Frame and image inside a square box */}
              <Box
                sx={{
                  width: "200px", // Set fixed square size
                  height: "200px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px", // Space between image and text
                }}
              >
                {/* Frame (Placed on Top) */}
                <img
                  src={event.frame}
                  alt="Frame"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2, // Frame stays above
                  }}
                />
                {/* Event Image (Under the Frame, Same Size) */}
                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    position: "absolute",
                    zIndex: 1, // Image stays below
                  }}
                />
              </Box>

              {/* Event Details (Centered Below Image) */}
              <CardContent sx={{ textAlign: "center",color : 'white' }}>
                <Typography variant="h5" gutterBottom>
                  {event.title}
                </Typography>
                {/* <Typography variant="body1">{event.description}</Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>




              <ButtonHeading name="Non-Tech Events"/>




        <Grid container spacing={2} justifyContent="center">
          {NonTechevents.map((event, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  minWidth: 100,
                  textAlign: "center",
                  padding: 2,
                  margin: 4,
                  position: "relative",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center everything
                }}
              >
                {/* Frame and image inside a square box */}
                <Box
                  sx={{
                    width: "200px", // Set fixed square size
                    height: "200px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "10px", // Space between image and text
                  }}
                >
                  {/* Frame (Placed on Top) */}
                  <img
                    src={event.frame}
                    alt="Frame"
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 2, // Frame stays above
                    }}
                  />
                  {/* Event Image (Under the Frame, Same Size) */}
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      position: "absolute",
                      zIndex: 1, // Image stays below
                    }}
                  />
                </Box>

                {/* Event Details (Centered Below Image) */}
                <CardContent sx={{ textAlign: "center",color : 'white' }}>
                  <Typography variant="h5" gutterBottom>
                    {event.title}
                  </Typography>
                  {/* <Typography variant="body1">{event.description}</Typography> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>



    </div>
  );
};

export default EventsPage;
