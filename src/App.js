import React from "react";
import navImage from './assets/nav.svg'
import BG from './assets/AI.jpg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import './App.css'



function App() {
  return (
    <AppBar position="static" sx={{ height : '100vh', backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , }} >
      <div style={{height:'100px', display :'flex',justifyContent : 'space-around' , alignItems: 'center', backgroundImage: `url(${navImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition: 'bottom'}}>
        <Typography variant="h6" sx={{ flexGrow: 1,  }}>
            Techfest Clone
          </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Events</Button>
        <Button color="inherit">About</Button>
      </div>

      <Container   >
      <Typography variant="h3" gutterBottom>
        Welcome to Techfest Clone
      </Typography>
      <Typography variant="body1">
        This is a static React-based clone using Material UI.
      </Typography>
    </Container>

    </AppBar>
  );
}

export default App;
