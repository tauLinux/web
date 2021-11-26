import { HeaderLinks } from '.'

export const Mobile = ({ visible }: { visible: boolean }) => {
    return (
        <div
            className={`mobile-container ${
                visible ? 'mobile-visible' : 'mobile-invisible'
            }`}
        >
            <HeaderLinks />
        </div>
    )
}
