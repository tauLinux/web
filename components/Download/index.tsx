import React from 'react'
import { Button } from '../Button'
import './index.scss'

export const Download = ({
    title,
    description,
    link,
    btnStyle,
    btnOnly,
    btnList,
}: {
    title: string | JSX.Element
    description?: string
    link?: string
    btnStyle?: 'primary' | 'secondary'
    btnOnly?: boolean
    btnList?: JSX.Element
}) => (
    <>
        <section
            className={`download-box ${
                btnStyle === 'secondary' ? 'download-secondary' : ''
            }`}
        >
            <h3>{title}</h3>
            {/* whitespace haha 
                TODO make this entire component better it's a goddamn mess
            */}
            {description ? (
                <p>{description}</p>
            ) : (
                <span className={'download-whitespace'} />
            )}
            {btnOnly ? (
                btnList && <>{React.cloneElement(btnList)}</>
            ) : (
                <>
                    <span className={'align-right'}>
                        <Button
                            style={btnStyle ? btnStyle : 'primary'}
                            icon={true}
                            href={link}
                            content={'Learn More'}
                        />
                    </span>
                </>
            )}
        </section>
    </>
)
