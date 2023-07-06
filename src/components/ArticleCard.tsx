import React from 'react'
import Link from 'next/link'
import { iArticle } from '@/interfaces/article'


export default function ArticleCard({ title, url, urlToImage }: iArticle) {

    return (
        <article className={'bg-black shadow-xl w-80 rounded-lg hover:scale-105 duration-300 overflow-hidden'}>
            <Link href={url}>
                <div
                    style={urlToImage != null ? { backgroundImage: `url(${urlToImage})` } : { backgroundImage: 'url(/tech-news-cover.jpg)' }}
                    className={'bg-zinc-600 bg-cover h-44 p-1'}
                >
                </div>

                <p className='p-3'>{title}</p>
            </Link>
        </article>
    )
} 
