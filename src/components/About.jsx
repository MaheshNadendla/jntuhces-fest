import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

import ultron2 from "../assets/ultron2.png";
import frame from "../assets/Frame.png";

// Each event has a separate frame
const events = [
  { title: "Event 1", description: "Description for Event 1", image: ultron2, frame: frame },
  { title: "Event 2", description: "Description for Event 2", image: ultron2, frame: frame },
  { title: "Event 3", description: "Description for Event 3", image: ultron2, frame: frame },
  { title: "Event 4", description: "Description for Event 4", image: ultron2, frame: frame },
  { title: "Event 5", description: "Description for Event 3", image: ultron2, frame: frame },
  { title: "Event 6", description: "Description for Event 4", image: ultron2, frame: frame },
];

const EventsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        maxWidth: "100dvw",
        padding: "10px",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {events.map((event, index) => (
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
                <Typography variant="body1">{event.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EventsPage;
