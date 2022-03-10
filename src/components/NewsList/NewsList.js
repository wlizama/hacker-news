import React from 'react'
import NewsItem from './NewsItem'
import './NewsList.scss'

const NewsList = (props) => {

    const { news, onNewsClick } = props

    return (
        <ul className='NewsList'>
            {news.map((item, idx) => (
                <NewsItem 
                    key={idx}
                    item={item}
                    onClick={() => onNewsClick(item)}
                />
            ))}
        </ul>
    )
}

export default NewsList