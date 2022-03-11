import React, { useState, useEffect, useContext } from 'react'
import { MainContext } from '../../../context/MainContext'
import NewsList from '../../../components/NewsList'
import Pagination from '../../../components/Pagination'

const FavsNews = () => {

	const { globalState } = useContext(MainContext)
    const { favoritedPosts } = globalState
    const [favNews, setFavNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const hitsPerPage = 20;

    useEffect(() => {
        const favsPaginaded = favoritedPosts.slice((currentPage - 1) * hitsPerPage, currentPage * hitsPerPage)
        setFavNews(favsPaginaded)
    }, [currentPage, favoritedPosts])

    return (
        <>
            <NewsList news={favNews} onNewsClick={() => console.log("nothing")} />
            <Pagination
                className="full-width-center"
                currentPage={currentPage}
                totalCount={favoritedPosts.length}
                pageSize={hitsPerPage}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}

export default FavsNews