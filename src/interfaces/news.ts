import { iArticle } from './article'

export interface iNews {
    totalResults: number,
    articles: iArticle[]
}