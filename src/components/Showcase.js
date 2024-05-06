import React from 'react'

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

import { BsLinkedin, BsYoutube, BsInstagram, BsTwitterX } from "react-icons/bs";

import ShowcaseImg from '../assets/Bronseele.jpeg';
import BackgroundImg from '../assets/particle.png';

const Showcase = () => {
  return (
    <PaddingContainer
        id = "Home"
        left = "3%"
        right = "10%"
        top = "15%"
        bottom = "10%">
        <FlexContainer align="left" fullWidthChild>
            {/* -- left-content-- */}
            <div>
                <Heading as="h4" size="h4">Hello!</Heading>

                <Heading
                    as="h2"
                    size="h2"
                    top="0.5rem"
                    bottom="1rem"
                >

                    I'm <BlueText>Amelia</BlueText>

                </Heading>

                <Heading as="h3" size="h3">
                    I'm a <BlueText>Software Developer</BlueText>
                </Heading>

                <ParaText as="p" top="2rem" bottom="4rem">
                    Hello, my name is Amelia Huang and I'm a Rising Junior CS student at XXX University. 
                </ParaText>
                {/* --Social icons-- */}
                <FlexContainer gap="50px">
                    <IconContainer color="blue" size="1.5rem">
                        <BsLinkedin />
                    </IconContainer>

                    <IconContainer color="blue" size="1.5rem">
                        <BsTwitterX />
                    </IconContainer>

                    <IconContainer color="blue" size="1.5rem">
                        <BsYoutube />
                    </IconContainer>

                    <IconContainer color="blue" size="1.5rem">
                        <BsInstagram />
                    </IconContainer>
                </FlexContainer>
            </div>

            <FlexContainer justify="flex-end">
                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src={ShowcaseImg} alt="showcase" width={250} height="auto"/>
                    </ShowcaseImageCard>

                    <Particle 
                    src={BackgroundImg}
                    alt="particle"
                    top="-80px"
                    left="20px"
                    rotate="60deg"
                    >

                    </Particle>

                    <Particle 
                    src={BackgroundImg}
                    alt="particle"
                    top="50px"
                    right="-70px"
                    rotate="0deg"
                    >

                    </Particle>

                    <Particle 
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