import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger Icon
import Homes from "./components/Homes";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogDetailWrapper from "./components/BlogDetailWrapper";
import LanternScene from "./components/LanternScene.jsx";
import nav from "./assets/nav.svg";
import AI from "./assets/AI.jpg";
import Bg from "./components/Bg.jsx";
// import HomeShadow from "./components/HomeShadow.jsx";
import Branches from "./components/Branches.jsx";
import WorkShops from "./components/WorkShops.jsx";
import Loading from "./components/Loading/Loading.jsx";

import "./App.css";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const BranchesRef = useRef(null);
  const WorkShopRef = useRef(null);
  const Robos = useRef(null);

  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const isTablet = useMediaQuery("(max-width: 768px)"); // Detects tablet screens

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7500);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on click
  };

  const menuItems = [
    { label: "Home", ref: homeRef },
    { label: "Branches", ref: BranchesRef },
    { label: "Shops", ref: WorkShopRef },
    { label: "About", ref: aboutRef },
    { label: "Contact", ref: contactRef },
    { label: "College View", ref: Robos },
  ];

  return (
    <Router style={{height:"auto"}} >
      <AppBar
        position="fixed"
        style={{
          backgroundImage: `url(${AI})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: "transparent",
          width: "100vw",
          minWidth: "100dvw",
          height : "auto",

          zIndex: 100,

          "@media (max-width: 768px)": {
            backgroundSize: "contain", // Adjust for small screens
          },

        }}
      >
        <Toolbar
          sx={{
            backgroundImage: `url(${nav})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "64px",
            width: "100dvw",
            backgroundColor: "transparent",
            boxShadow: "none",
            position: "fixed",
            zIndex: 100,
            filter: "drop-shadow(5px 5px 5px black)",
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>JNTUHCES FEST 2K25</Typography>

          {isTablet ? (
            // Show Hamburger Menu on Tablet
            <IconButton color="inherit" onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            // Show Normal Buttons on Desktop
            menuItems.map((item, index) => (
              <Button key={index} color="inherit" onClick={() => scrollToSection(item.ref)}>
                {item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>

      {/* Sidebar for Tablets */}
      <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => scrollToSection(item.ref)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {loading ? (
        <Loading />
      ) : (
        <>
          <Bg />

          <Container disableGutters ref={homeRef} 
              sx={{ 
                height: "100vh", 
                minHeight: "100vh", 
                width: "100dvw",   
                maxWidth: "100dvw", 
                p: 0, 
                m: 0, 
                overflowX: "hidden" 
              }}>
              <Homes />
            </Container>

          {/* <div style={{background:'linear-gradient(#1e262a, #0000)', height:'150px',width:'100dvw',padding: '0',margin :'0'}}></div> */}

          <div ref={BranchesRef} style={{ minHeight: "100vh", width: "100vw", paddingTop: 20 }}>
            <Branches />
          </div>

          <div ref={WorkShopRef} style={{ minHeight: "100vh", width: "100vw" }}>
            <WorkShops />
          </div>

          <Container ref={aboutRef} sx={{ minHeight: "100vh", width: "100vw", paddingTop: 20, backgroundColor: "transparent" }}>
            <About />
          </Container>

          <Container  ref={contactRef} disableGutters sx={{ minHeight: "100vh", width: "40vw", paddingTop: 20,p:0,m:0,margin :'0px' }}>
            <Contact />
          </Container>

          <Container ref={Robos} disableGutters sx={{ minHeight: "100vh", p: 0, m: 0 }}>
            <LanternScene />
          </Container>

          <Routes>
            <Route path="/blog/:id" element={<BlogDetailWrapper />} />
          </Routes>

          <div className="Screen"></div>
        </>
      )}
    </Router>
  );
};

export default App;
