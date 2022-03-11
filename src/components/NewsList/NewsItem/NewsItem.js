import React from 'react'
import imgTime2 from '../../../assets/images/time-2.png'
import imgTime2_2x from '../../../assets/images/time-2@2x.png'
import imgTime2_3x from '../../../assets/images/time-2@3x.png'

import imgFavorite2 from '../../../assets/images/favorite-2.png'
import imgFavorite2_2x from '../../../assets/images/favorite-2@2x.png'
import imgFavorite2_3x from '../../../assets/images/favorite-2@3x.png'

import imgFavorite3 from '../../../assets/images/favorite-3.png'
import imgFavorite3_2x from '../../../assets/images/favorite-3@2x.png'
import imgFavorite3_3x from '../../../assets/images/favorite-3@3x.png'

const NewsItem = ({ item, onClick }) => {

    const timeSince = (date) => {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1)
            return Math.floor(interval) + " years";
        
        interval = seconds / 2592000;

        if (interval > 1)
            return Math.floor(interval) + " months";
        
        interval = seconds / 86400;

        if (interval > 1)
            return Math.floor(interval) + " days";
        
        interval = seconds / 3600;

        if (interval > 1)
            return Math.floor(interval) + " hours";
        
        interval = seconds / 60;
        if (interval > 1) 
            return Math.floor(interval) + " minutes";
        
        return Math.floor(seconds) + " seconds";
    }

    return (
        <li className='NewsList__item'>
            <a 
                href={item.story_url}
                target='_blank'
                rel="noreferrer"
                className='NewsList__item-link'
            >
                <small>
                    <img 
                        src={imgTime2}
                        srcSet={`${imgTime2_2x} 2x, ${imgTime2_3x} 3x`}
                    />
                    <span>{`${timeSince(new Date(item.created_at))} ago by ${item.author}`}</span>
                </small>
                <h4>{item.story_title}</h4>
            </a>
            <button
                onClick={onClick}
                className='NewsList__item-btn'
            >
                {item.isFavorite ? (
                    <img 
                    src={imgFavorite3}
                    srcSet={`${imgFavorite3_2x} 2x, ${imgFavorite3_3x} 3x`}
                />
                ) : (
                    <img 
                    src={imgFavorite2}
                    srcSet={`${imgFavorite2_2x} 2x, ${imgFavorite2_3x} 3x`}
                /> 
                )}
            </button>
        </li>
    )
}

export default NewsItem