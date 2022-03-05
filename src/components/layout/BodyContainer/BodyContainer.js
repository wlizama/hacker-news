import React from 'react'
import './BodyContainer.scss'

const BodyContainer = ({ children }) => {
    return (
        <section className='BodyContainer'>
            {children}
        </section>
    )
}

export default BodyContainer