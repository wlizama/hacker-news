import React from 'react'

const NewsItem = ({ item, onClick }) => {
    return (
        <li className='NewsList--item'>
            <a href='#'>
                <small>
                    <img />
                    <span>{item.created_at}</span>
                </small>
                <h4>{item.story_title}</h4>
            </a>
            <button>
                <img />
            </button>
        </li>
    )
}

export default NewsItem