import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github, Twitter, Facebook, YouTube } from '../AllSvg';
import { darkTheme } from '../Themes'
import { motion } from 'framer-motion';

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    & > *:not(:last-child) {
        margin: 0.5rem 0;
    }
`

const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.color === "dark" ? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div 
                initial={{ transform: "scale" }}
                animate={{ scale: [0, 1, 1.5, 1]}}
                transition={{ type: "spring", duration: 1, delay: 1}}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to="https://github.com/Mihir611">
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale" }}
                animate={{ scale: [0, 1, 1.5, 1]}}
                transition={{ type: "spring", duration: 1, delay: 1}}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to="/">
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale" }}
                animate={{ scale: [0, 1, 1.5, 1]}}
                transition={{ type: "spring", duration: 1, delay: 1}}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to="/">
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale" }}
                animate={{ scale: [0, 1, 1.5, 1]}}
                transition={{ type: "spring", duration: 1, delay: 1}}
            >
                <NavLink style={{ color: 'inherit' }} target="_blank" to="/">
                    <YouTube width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>

            <Line color={props.theme}
                initial={{
                    height: 0
                }}
                animate={{
                    height: '8rem'
                }}
                transition={{
                    type:'spring', duration: 1, delay: 0.8
                }}
            />
        </Icons>
    )
}

export default SocialIcons
