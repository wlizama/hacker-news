import React from 'react'
import Header from './Header'
import BodyContainer from './BodyContainer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <BodyContainer>
                {children}
            </BodyContainer>
        </>
    )
}

export default Layout