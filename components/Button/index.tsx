import { CornerUpRight } from 'react-feather'
import './index.scss'

export const Button = ({
    style,
    icon,
    content,
    onClick,
    href,
    className,
}: {
    style: 'primary' | 'secondary' | 'tertiary'
    icon?: boolean
    content: string | JSX.Element
    onClick?: () => void
    href?: string
    className?: string
}) => (
    <>
        {onClick ? (
            <button
                className={`button button-${style} ${className}`}
                onClick={onClick}
            >
                {icon && <CornerUpRight size={14} />} {content}
            </button>
        ) : (
            <a className={`button button-${style} ${className}`} href={href}>
                {icon && <CornerUpRight size={14} />} {content}
            </a>
        )}
    </>
)
