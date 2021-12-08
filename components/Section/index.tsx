import { ReactFragment } from 'react'
import './index.scss'

export const Section = ({
    children,
    bg,
    className,
}: {
    children: ReactFragment
    bg: 'F8F9FA' | 'E9ECEF'
    className?: string
}) => (
    <>
        <section className={`section bg-${bg} ${className}`}>
            {children}
        </section>
    </>
)
