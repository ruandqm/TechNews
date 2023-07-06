'use client'

// React and Hooks
import React, { useState } from 'react'
import useSWR from 'swr'

// Services
import { api } from '../services/api'

// Components
import ArticleCard from './ArticleCard'
import Pagination from './Pagination'
import IsLoading from './IsLoading'
import ErrorSection from './ErrorSection'

//Interfaces
import { iArticle } from '@/interfaces/article'
import { iNews } from '@/interfaces/news'


export default function News() {

    const [currentPage, setCurrentPage] = useState(1)
    const params = `?category=technology&page=${currentPage}`
    const { data, error } = useSWR<iNews>(params, api)

    if (error) {
        return (
            <ErrorSection />
        )
    }

    return (
        <>
            {data !== undefined ? (
                <>
                    <main className="flex justify-center">
                        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 md:p-10 max-w-screen-xl">
                            {data.articles.map((article: iArticle) => {
                                return (
                                    <ArticleCard
                                        key={article.url}
                                        title={article.title}
                                        url={article.url}
                                        urlToImage={article.urlToImage}
                                    />
                                )
                            })}
                        </ul>
                    </main>

                    <Pagination
                        totalPages={data.totalResults}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />

                </>
            ) : (
                <IsLoading />
            )}
        </>
    )
}