import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

interface Props {
}

const AppContainer = styled.div`
    background-color: rgb(${colors.main});
    width: 100%;
    min-height: 100vh;
`

const ScreenWrapper: React.FC<Props> = ({ children }) => {
    return <AppContainer>{children}</AppContainer>
}

export default ScreenWrapper
