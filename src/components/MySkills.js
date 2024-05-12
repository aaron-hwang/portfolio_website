import React from 'react'
import { motion } from 'framer-motion'

import {
    FlexContainer, 
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';

import {
    SkillsCard,
    SkillsCardContainer
} from '../styles/MySkills.styled';

import { Skils } from '../utils/Data';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const MySkills = () => {
  return (
    <PaddingContainer
        id="Skills"
        top="10%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"

    >
        <FlexContainer 
            responsiveFlex 
            fullWidthChild
            responsiveDirection="column-reverse"
        >
            <SkillsCardContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                {Skils.map((skill) => (
                    <SkillsCard>
                        <IconContainer size="5rem" color ="blue">
                            {skill.icon}
                        </IconContainer>

                        <Heading as="h4" size="h4">
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                ))}
            </SkillsCardContainer>

            <motion.div
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">
                    My Skills
                </Heading>

                <Heading as="h2" size="h2" top="0.5rem">
                    What <BlueText>I am capable of</BlueText>
                </Heading>

                <ParaText top="2rem" bottom="1.5rem">
                    I have a wide breadth of experience in many different technologies. 
                </ParaText> 

                <ParaText>
                    I have a passion for all things technology, and am particularly experienced with Object Oriented programming. 
                </ParaText>
            </motion.div>

        </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills