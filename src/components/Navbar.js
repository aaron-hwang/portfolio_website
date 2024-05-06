import React, { useState } from 'react'

import {
    FlexContainer,
    PaddingContainer,
    Container,
    BlueText
} from '../styles/Global.styled'

import { NavbarContainer,
    Logo,
    MenuIcon
 } from '../styles/Navbar.styled'

import { GiHamburgerMenu } from 'react-icons/gi'
import { theme } from '../utils/Theme'
import NavMenu from './layouts/NavMenu'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavbarContainer bgColor="transparent">
        <PaddingContainer
            top="1.2rem"
            bottom="1.2rem"
        >
            <Container>
                <FlexContainer justify="space-between">
                    <Logo>
                        JustA<BlueText>Dev</BlueText>   
                    </Logo>

                    <MenuIcon 
                        onClick={() => { setOpenMenu(true) }}
                    >
                        <GiHamburgerMenu />
                    </MenuIcon>
                </FlexContainer>
            </Container>
        
            {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar