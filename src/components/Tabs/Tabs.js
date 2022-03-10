import React, { useState } from 'react'

const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState(props.children[0].props.label)

    const onClickTabItem = (label) => {
        setActiveTab(label)
    }

    return (
        <div className='Tabs'>
            <ul className='Tabs__buttons'>
                {props.children.map((child, idx) => {
                    const { label } = child.props
                    return (
                        <li
                            key={idx}
                            className={`Tabs__button ${activeTab == label? 'Tabs__button--active' : ''}`}
                            onClick={() => onClickTabItem(label)}
                        >
                            {label}
                        </li>
                    )
                })}
            </ul>
            <div className='Tab__content'>
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined
                    return child.props.children
                })}
            </div>
        </div>
    )
}

export default Tabs