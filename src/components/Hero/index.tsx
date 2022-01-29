import { Container } from '@nextui-org/react'
import { StyledHero } from './style'

export const Hero = ({ children }: { children: React.ReactFragment }) => {
    return (
        <StyledHero>
            <Container style={{ padding: 0, margin: 0, height: '100%' }}>
                {children}
            </Container>
        </StyledHero>
    )
}
