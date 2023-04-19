import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import LogoComponent from "./subComponents/LogoComponent";
import SocialIcons from "./subComponents/SocialIcons";
import PowerButton from "./subComponents/PowerButton";
import ParticleComponent from "./subComponents/ParticleComponent";

import astronaunt from "../assets/Images/spaceman.png";
import BigTitle from "./subComponents/BigTitle";

const Box = styled.div`
    background-color: ${(props) => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

const float = keyframes`
    0% {transform: translateY(-10px)}
    50% {transform: translateY(15px) translateX(15px)}
    100% {transform: translateY(-10px)}
`;

const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 20vw;
    animation: ${float} 4s ease infinite;
    img {
        width: 100%;
        height: auto;
    }
`;

const Main = styled.div`
    border: 2px solid ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);
    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;
    font-family: "Ubuntu Mono" . monospace;
    font-style: italic;
`;

const AboutPage = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme="dark" />
                <SocialIcons theme="dark" />
                <PowerButton />
                <ParticleComponent theme="dark" />
                <Spaceman>
                    <img src={astronaunt} alt="spaceman"></img>
                </Spaceman>
                <Main>
                    I'm a front-end developer located in India. I specialize in creating responsive and 
                    visually appealing user interfaces for web and mobile applications.
                    <br />
                    <br />
                    I have a strong command of HTML, CSS, and JavaScript, as well as experience with popular 
                    frontend frameworks such Svelte and libraries such as React. My goal is to create seamless user 
                    experiences that not only meet but exceed client expectations.
                    <br />
                    <br />I believe everything is an Art when you put your consciousness
                    in it. Check out my portfolio to see some of my recent projects and get in touch to discuss how I can bring your ideas to life.
                </Main>
                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    );
};

export default AboutPage;