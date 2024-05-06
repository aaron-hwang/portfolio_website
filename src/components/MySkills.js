import React from 'react'

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

const MySkills = () => {
  return (
    <PaddingContainer
        id="Skills"
        top="10%"
        bottom="10%"
    >
        <FlexContainer fullWidthChild>
            <SkillsCardContainer>
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

            <div>
                <Heading as="h4" size="h4">
                    My Skills
                </Heading>

                <Heading as="h2" size="h2" top="0.5rem">
                    What <BlueText>I am capable of</BlueText>
                </Heading>

                <ParaText top="2rem" bottom="1.5rem">
                    I have a wide breadth of experience in mny different technologies. 
                </ParaText> 

                <ParaText>
                    This is sample text
                </ParaText>
            </div>

        </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills