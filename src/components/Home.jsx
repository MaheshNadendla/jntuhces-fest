import { AppBar,Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ultron from '../assets/ultron.png'
import circleImg from '../assets/Circle.png'

import Bubbles1 from '../assets/Bubbles1.png'
import Bubbles2 from '../assets/Bubbles2.png'


function Home() {


    const [showFirstImage, setShowFirstImage] = useState(true);

    

    useEffect(() => {
      const interval = setInterval(() => {
        setShowFirstImage((prev) => !prev);
      }, 2000); // Switch every 2 seconds
  
      return () => clearInterval(interval);
    }, []);

    

    

  return (
    <div style={{height: '100dvh',backgroundColor:'#1e262a',display:'flex'}}>

        <Box className="left" sx={{width:'33vw',backgroundColor:'',display:'flex',justifyContent:'center',alignItems:'center'}} >
            {/* <LanternScene/> */}
        </Box>
       

        <Box className="middle" sx={{width:'34vw', position:'relative',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <div style={{ height:'600px',width:'600px',backgroundImage: `url(${ultron})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position : 'absolute',
                top : '55%',
                left : '50%',
                transform : 'translate(-50%,-50%)',
                zIndex : '5'
               
                }}>
            </div>

            <style>
                {`
                @keyframes rotate {
                    from { transform: translate(-50%,-50%) rotate(0deg); }
                    to { transform: translate(-50%,-50%) rotate(360deg); }
                }
                `}
            </style>


            <div style={{ height:'50vh',width:'50vh',backgroundImage: `url(${circleImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position : 'absolute',
                top : '40%',
                left : '50%',
                transform : 'translate(-50%,-50%)',
                animation: 'rotate 2s linear infinite',
                zIndex:'3'
                }}>  

                <div style={{height:'300px' ,width: '300px',backgroundColor:'white', position : 'absolute',
                top : '50%',
                left : '50%',
                transform : 'translate(-50%,-50%)',
                borderRadius : '50%',
                border : '5px solid black'
                }}></div>


            </div>

            <div style={{height:'20vh',width:'100%',backgroundColor:'#1e262a',position:'absolute',top : '85%',
                boxShadow:'0px -30px 30px #1e262a',
                left : '50%',
                transform : 'translate(-50%,-50%)',
                zIndex:'10'
                }}>
                
            </div>


           
            


        </Box>


        
        <Box
            sx={{

                flexGrow: "0",
                width: "33vw",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
                display:'flex',
                justifyContent:'center',
                alignItems : 'center'
            }}
            >
            <Box
                
                component="img"
                src={Bubbles1}
                alt="First"
                sx={{
                position: "absolute",
                width: "100%",
                height: "85%",
                transition: "opacity 2s ease-in-out",
                opacity: showFirstImage ? 1 : 0,
                }}
            />
            <Box
                component="img"
                src={Bubbles2}
                alt="Second"
                sx={{
                position: "absolute",
                width: "100%",
                height: "85%",
                transition: "opacity 2s ease-in-out",
                opacity: showFirstImage ? 0 : 1,
                }}
            />
        </Box>

    </div>
  )
}

export default Home




