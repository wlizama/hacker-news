import React, { useState, useEffect } from 'react'
import DropdownWithIcon from '../../../components/DropdownWithIcon'
import NewsList from '../../../components/NewsList'

import imgAngular138 from '../../../assets/images/angular-138.png'
import imgAngular138_2x from '../../../assets/images/angular-138@2x.png'
import imgAngular138_3x from '../../../assets/images/angular-138@3x.png'
import imgReact140 from '../../../assets/images/react-140.png'
import imgReact140_2x from '../../../assets/images/react-140@2x.png'
import imgReact140_3x from '../../../assets/images/react-140@3x.png'
import imgVue141 from '../../../assets/images/vue-141.png'
import imgVue141_2x from '../../../assets/images/vue-141@2x.png'
import imgVue141_3x from '../../../assets/images/vue-141@3x.png'

const AllNews = () => {

    const [news, setNews] = useState([])
    const [query, setQuery] = useState('')

    const NewsItemList = [
        {
            name: 'Angular', value: 'angularjs', defaultImage: imgAngular138, image2x: imgAngular138_2x, image3x: imgAngular138_3x
        },
        {
            name: 'React', value: 'reactjs', defaultImage: imgReact140, image2x: imgReact140_2x, image3x: imgReact140_3x
        },
        {
            name: 'Vue', value: 'vuejs', defaultImage: imgVue141, image2x: imgVue141_2x, image3x: imgVue141_3x
        },
    ]

    useEffect(() => {

        const fetchNews = async () => {
            const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=0`);
            const data = await response.json()
            setNews(data.hits)
        }

        fetchNews()
        
    }, [query])

    return (
        <>
            <div>
                <DropdownWithIcon 
                    options={NewsItemList}
                    defaultOption={NewsItemList[0]}
                    onChange={(selectedOption) => setQuery(selectedOption.value)}
                />
            </div>
            <div>
                <NewsList news={news} onNewsClick={() => console.log("nada por ahora")} />
            </div>
        </>
    )
}

export default AllNews

