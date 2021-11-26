import { Button } from '../Button'
import './index.scss'

export const NewsArticle = ({
    image,
    title,
    date,
    author,
    link,
}: {
    image: string
    title: string
    date: string
    author: string
    link: string
}) => (
    <>
        <a className={'news-blurb'} href={link}>
            <img src={image} />
            <h4>{title}</h4>
            <figcaption>
                {date} • {author}
            </figcaption>
        </a>
    </>
)
