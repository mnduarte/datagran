import React, { Fragment } from 'react'
import { Header } from '../Header'
import { StContainer, StContainerLoading } from './styles'

export const Layout = ({children}) => (
    <Fragment>
        <Header />
            <StContainerLoading>
            </StContainerLoading>
            <StContainer>
                {children}
            </StContainer>
    </Fragment>
)