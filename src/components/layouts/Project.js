import React from 'react'

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

const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
        <div>
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

            <Button> Visit Website</Button>
        </div>

        {/* --right section project image-- */}
        <ProjectImageContainer justify="flex-end">
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