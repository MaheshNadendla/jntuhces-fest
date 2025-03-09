import React from "react";
import navImage from './assets/nav.svg'
import BG from './assets/AI.jpg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import './App.css'



function App() {
  return (
    <AppBar position="static" sx={{ height : '100vh', backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' , }} >
      <Toolbar style={{height:'100px', display :'flex',justifyContent : 'space-around' , alignItems: 'center', backgroundImage: `url(${navImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition: 'bottom'}}>
        <Typography variant="h6" sx={{ flexGrow: 1,  }}>
            Techfest
          </Typography>
        <button color="inherit">Home</button>
        <button color="inherit">Events</button>
        <Button color="inherit">About</Button>
      </Toolbar>

      <Container   >
      <Typography variant="h3" gutterBottom>
        Welcome to Techfest
      </Typography>
      <Typography variant="body1">
        welcome back guys this is not that 
      </Typography>
    </Container>



    </AppBar>
  );
}

export default App;
