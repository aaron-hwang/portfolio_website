import React from 'react'
import { motion } from 'framer-motion'

import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from '../../styles/Global.styled';

import { FaGithub } from 'react-icons/fa';

import { TechStackCard,
        ProjectImageContainer,
        ProjectImage,    
 } from '../../styles/MyProject.styled';

 import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Project = ({ data }) => {
  return (
    <FlexContainer 
        direction={data.reverse ? 'row-reverse' : false}
        fullWidthChild
    >
        <motion.div
            variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
        >
            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.project_name}
                </Heading>

                <IconContainer color="blue" size="2rem">
                    <FaGithub />
                </IconContainer>

            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    {data.tech_stack.map((stack) => (
                        <TechStackCard>
                            {stack}
                        </TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top ="1.5rem" bottom="2rem">
                {data.project_description}
            </ParaText>

            <Button onClick={() => window.open(data.project_url)}> Visit Website</Button>
        </motion.div>

        {/* --right section project image-- */}
        <ProjectImageContainer 
            as={motion.div}
            variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            justify={data.reverse ? "flex-start" : "flex-end"}
        >
            <ProjectImage src={data.project_img} 
            alt={data.project_name}>

            </ProjectImage>

        </ProjectImageContainer>

        <div>

        </div>
    </FlexContainer>
  )
}

export default Project