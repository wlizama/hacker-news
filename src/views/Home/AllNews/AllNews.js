import React, { useState, useEffect, useContext } from 'react'
import { MainContext, ACTIONS } from '../../../context/MainContext'
import DropdownWithIcon from '../../../components/DropdownWithIcon'
import Pagination from '../../../components/Pagination'
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

	const { globalDispatch, globalState } = useContext(MainContext)
    
    const hitsPerPage = 20;
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

    const [news, setNews] = useState([])
    const [query, setQuery] = useState(globalState.selectedFilter || NewsItemList[0].value)
    const [currentPage, setCurrentPage] = useState(1)
    const [nbHits, setNbHits] = useState(0)


    const defaultOption = NewsItemList.find(item => item.value === query) || NewsItemList[0]

    const handleChangeQuery = (selectedOption) => {
        setQuery(selectedOption.value)
        setCurrentPage(1)
    }

    const toggleFavorite = (item) => {
        setNews(news.map(newsItem => {
            if (newsItem.objectID === item.objectID) {
                newsItem.isFavorite = !newsItem.isFavorite
                
                globalDispatch({
                    type: newsItem.isFavorite ?  ACTIONS.FAVORITES_ADD : ACTIONS.FAVORITES_REMOVE,
                    payload: newsItem
                })
            }
            return newsItem
        }))
    }

    useEffect(() => {

        if (query !== '') {
            const fetchNews = async () => {
                const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${currentPage}`);
                const data = await response.json()
                setNews(data.hits.map(item => {
                    item.isFavorite = globalState.favoritedPosts.some(favoritedItem => favoritedItem.objectID === item.objectID)
                    return item
                }))
                setNbHits(data.nbHits)
            }
            globalDispatch({
                type: ACTIONS.FILTER_UPDATE,
                payload: query
            })

            fetchNews()
        }
        
    }, [query, currentPage])

    return (
        <>
            <DropdownWithIcon 
                options={NewsItemList}
                defaultOption={defaultOption}
                onChange={handleChangeQuery}
            />
            <NewsList news={news} onNewsClick={toggleFavorite} />
            <Pagination
                className="full-width-center"
                currentPage={currentPage}
                totalCount={nbHits}
                pageSize={hitsPerPage}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}

export default AllNews

