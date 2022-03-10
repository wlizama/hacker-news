import React, { useState } from 'react'
import imgArrowDown from '../../assets/images/arrow-down.png'
import './DropdownWithIcon.scss'

const DropdownWithIcon = (props) => {

    const { options, selectedOption, defaultOption, onChange } = props
    const [selected, setSelected] = useState(selectedOption || defaultOption)
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState)
    }

    const setSelectedOption = option => {
        // const selectedOption = event.target.getAttribute('value')

        setIsOpen(false)

        setSelected(option)

        if (onChange)
            onChange(option)
        
    }

    return (
        <div className='DropdownWithIcon'>
            <div 
                onClick={toggleDropdown}
                className='DropdownWithIcon__container'
            >
                <span>{selected.name}</span>
                <img 
                    alt='Arrow down'
                    src={imgArrowDown}
                />
            </div>
            <ul 
                className={`DropdownWithIcon__list ${isOpen ? 'DropdownWithIcon__list--open' : ''}`}>
            {
                options.map((option, index) => (
                <li 
                    key={index}
                    value={option.value}
                    onClick={(evt) => setSelectedOption(option)}
                    className='DropdownWithIcon__list-item'
                >
                    <img 
                        src={option.defaultImage}
                        srcSet={`${option.image2x} 2x, ${option.image3x} 3x`}
                    />
                    <span>{option.name}</span>
                </li>
                ))
            }
            </ul>
        </div>
    )
}

export default DropdownWithIcon