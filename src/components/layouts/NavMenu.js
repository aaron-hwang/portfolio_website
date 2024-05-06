import React from 'react'

import {
    PaddingContainer,
    FlexContainer,    
} from '../../styles/Global.styled'

import { MenuIcon, NavMenuContainer, MenuItem

 } from '../../styles/Navbar.styled'

import { AiOutlineClose } from 'react-icons/ai'

const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer>
        <PaddingContainer left="5%" right="5%" top="2rem">
            <FlexContainer justify="flex-end">
                <MenuIcon
                    onClick={() => setOpenMenu(false)}
                >
                    <AiOutlineClose />
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        <PaddingContainer top="8%">
            <FlexContainer
                direction="column"
                align="center"
            >
                <MenuItem>
                Home    
                </MenuItem>
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu