import React from 'react'

import {
    PaddingContainer, 
    Heading,
    BlueText,   
} from '../styles/Global.styled';

import { projectDetails } from '../utils/Data';
import Project from './layouts/Project';

const MyProjects = () => {
  return (
    <PaddingContainer
        id="projects"
        top="5%"
        bottom="5%"
    >
        <Heading as="h4" size="h4">
            My Projects 
        </Heading>

        <Heading as="h2" size="h2">
            What <BlueText> I have created </BlueText>
        </Heading>

        {projectDetails.map((project) => (
            <PaddingContainer key={project.id} top="3rem" bottom="3rem">
                <Project data={project}/>
            </PaddingContainer>
        ))}

    </PaddingContainer>
  )
}

export default MyProjects