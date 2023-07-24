import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"
import Model from "../Models/Headphone"
import { Typography, Container, Card } from '@mui/material'
import { styled } from '@mui/system';
import "../style/index.css"

function App() {


    const StyledH1 = styled(Typography)(({ theme }) => ({
        fontWeight: 650,
        fontSize: '6.5rem', // You can adjust the font size as needed
        marginBottom: theme.spacing(4), // Add some spacing at the bottom
        textTransform: 'uppercase', // Convert the text to uppercase
        display: "flex",
        flexDirection: "column",
        color: "white",
        [theme.breakpoints.down('md')]: {
            fontSize: '5.5rem', // Reduce the font size for mobile screens
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5rem', // Reduce the font size for mobile screens
        },
    }));

    const StyledH6 = styled(Typography)(({ theme }) => ({
        fontSize: '1.5rem', // You can adjust the font size as needed
        marginBottom: theme.spacing(2), // Add some spacing at the bottom
        fontWeight: 650,
        color: "white",
        width: "100%"

    }));











    return (


        <div sx={{ flexDirection: "row" }} className='parent'>

            <div className='left'>


                <StyledH1 className="title" sx={{ fontFamily: 'Ubuntu, sans-serif' }} align='center' mt={20} variant="h1">
                    Unrivaled
                    <span style={{ color: 'orange' }}>Durability.</span>
                </StyledH1>


                <StyledH6 mt={6} sx={{ fontFamily: 'Ubuntu, sans-serif', color: "gray" }} align='center' variant="subtitle1" component="h2">
                    Enjoy years of exceptional performance without compromise.
                </StyledH6>
            </div>


            <span className='model'>
                <Canvas>
                    <Stage environment="city" intensity={0.5}>
                        <Model />
                    </Stage>
                    <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} autoRotateSpeed={0.5} />
                </Canvas>
            </span>

        </div>



    )
}

export default App