import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import twitter from '../../assets/images/twitter.png'
import telegram from '../../assets/images/telegram.png'

interface MenuAreaProps {
    displayMenu: boolean;
}

interface MenuContainerProps {
    status: boolean;
}

const MenuContainer = styled.ul<MenuContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    @media (max-width: 960px) {
        flex-direction: column;
        transform: translateY(${props => props.status ? '-100%' : '40%'});
        background: rgb(${colors.main});
        opacity: 0.9;
        width: 100%;
        position: absolute;
        z-index: 10;
        border-radius: 20px;
        border: 1px solid rgba(${colors.border});
    }
`
const MmenuItem = styled.li`
    color: rgb(${colors.fontColor});
    font-size: 20px;
    font-weight: 400;
    margin: 0 1em;
    @media (max-width: 1100px) {
        margin: 0 0.3em;
    }
    @media (max-width: 960px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const SocialIcon = styled.img`
    width: 25px;
    height: 25px;
    margin: 0.5em;
    &:hover {
        cursor: pointer;
    }
`

const MenuArea: React.FC<MenuAreaProps> = ({ displayMenu }) => {
    return (
        <MenuContainer status={displayMenu}>
            <MmenuItem>Home</MmenuItem>
            <MmenuItem>Bermuda</MmenuItem>
            <MmenuItem>OTC</MmenuItem>
            {!displayMenu &&
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <SocialIcon src={twitter} />
                    <SocialIcon src={telegram} />
                </div>}
        </MenuContainer>
    )
}

export default MenuArea
