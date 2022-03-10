import React from 'react'
import './BodyContainer.scss'

const BodyContainer = ({ children }) => {
    return (
        <main className='BodyContainer'>
            {children}
        </main>
    )
}

export default BodyContainer