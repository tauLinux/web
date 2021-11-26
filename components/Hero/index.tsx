import './index.scss'

export const Hero = ({
    title,
    description,
}: {
    title: string | JSX.Element
    description?: string | JSX.Element
}) => (
    <>
        <section className={'hero'}>
            <span>
                <h2>{title}</h2>
                {description}
            </span>
        </section>
    </>
)
