import { Container, Text } from '@nextui-org/react'
import { StyledFooter } from './style'

export const Footer = () => {
    return (
        <StyledFooter>
            <Container fluid style={{ padding: 0, margin: 0 }}>
                <Text color="#ffffff">Copyright © 2021 Innatical</Text>
                <Text color="#ffffff" weight={'bold'}>
                    Made with{' '}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{' '}
                    in California, Oregon & Minnesota
                </Text>
            </Container>
        </StyledFooter>
    )
}
