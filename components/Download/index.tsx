import { Button } from '../Button'
import './index.scss'

export const Download = ({
    title,
    description,
    link,
    btnStyle,
}: {
    title: string | JSX.Element
    description: string
    link: string
    btnStyle: 'primary' | 'secondary'
}) => (
    <>
        <section className={'download-box'}>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className={'align-right'}>
                <Button
                    style={btnStyle}
                    icon={true}
                    href={link}
                    content={'Learn More'}
                />
            </span>
        </section>
    </>
)
