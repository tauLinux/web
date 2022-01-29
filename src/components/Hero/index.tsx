import { Container } from '@nextui-org/react'
import { StyledHero } from './style'

export const Hero = ({ children }: { children: React.ReactFragment }) => {
    return (
        <StyledHero>
            <Container style={{ padding: 0, margin: 0 }}>{children}</Container>
        </StyledHero>
    )
}
