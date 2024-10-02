import React from 'react'
import { motion } from 'framer-motion'

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

import {
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle,
} from '../styles/Showcase.styled';

import { BsLinkedin, BsYoutube, BsInstagram, BsTwitterX, BsGithub } from "react-icons/bs";

import ShowcaseImg from '../assets/emptyprofile.png';
import BackgroundImg from '../assets/particle.png';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
  return (
    <PaddingContainer
        id = "Home"
        left = "3%"
        right = "10%"
        top = "15%"
        bottom = "10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="8rem"
        >
        <FlexContainer align="left" fullWidthChild>
            {/* -- left-content-- */}
            <motion.div
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">Hello!</Heading>

                <Heading
                    as="h2"
                    size="h2"
                    top="0.5rem"
                    bottom="1rem"
                >

                    I'm <BlueText>Aaron</BlueText>

                </Heading>

                <Heading as="h3" size="h3">
                    I'm a <BlueText>Software Developer</BlueText>
                </Heading>

                <ParaText as="p" top="2rem" bottom="4rem">
                    Hello, my name is Aaron Huang and I'm a Rising Junior CS student at Northeastern University. 
                </ParaText>
                {/* --Social icons-- */}
                <FlexContainer gap="50px"
                    responsiveFlex
                >
                    <IconContainer color="blue" size="1.5rem" onClick={() => window.open("https://www.linkedin.com/in/aaron-huang-a19074238/")}>
                        <BsLinkedin />
                    </IconContainer>

                    <IconContainer color="blue" size="1.5rem" onClick={() => window.open("https://github.com/aaron-hwang")}>
                        <BsGithub></BsGithub>
                    </IconContainer>

                </FlexContainer>
            </motion.div>

            <FlexContainer
                as={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible" 
                justify="flex-end"
            >
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src={ShowcaseImg} alt="showcase" width={250} height="auto"/>
                    </ShowcaseImageCard>

                    <Particle 
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        top="-80px"
                        left="20px"
                        rotate="60deg"
                    >

                    </Particle>

                    <Particle
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate: 360,
                            scale: [1, 0.8, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }} 
                        src={BackgroundImg}
                        alt="particle"
                        top="50px"
                        right="-70px"
                        rotate="0deg"
                    >

                    </Particle>

                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, 100, 0],
                            x: [100, 0, 100],
                            rotate: 360,
                            scale: [1, 0.5, 2],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }} 
                        src={BackgroundImg}
                        alt="particle"
                        bottom="10px"
                        left="-70px"
                        rotate="50deg"
                    >

                    </Particle>
                </ShowcaseParticleContainer>
            </FlexContainer>
        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase