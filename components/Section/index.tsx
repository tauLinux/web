import { ReactFragment } from 'react'
import './index.scss'

export const Section = ({
    children,
    bg,
    fill,
    className,
}: {
    children: ReactFragment
    bg: 'F8F9FA' | 'E9ECEF'
    fill?: boolean
    className?: string
}) => (
    <>
        <section
            className={`section bg-${bg} ${
                fill ? 'to-bottom' : ''
            } ${className}`}
        >
            {children}
        </section>
    </>
)
