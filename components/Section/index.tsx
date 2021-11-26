import { ReactChildren, ReactFragment } from "react"
import "./index.scss"

export const Section = ({
    children, bg
}: {
    children: ReactFragment,
    bg: "F8F9FA" | "E9ECEF"
}) => (
    <>
        <section className={`section bg-${bg}`}>
            {children}
        </section>
    </>
)