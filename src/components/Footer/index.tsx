import { Container, Text } from '@nextui-org/react'
import { TauTheme } from '../../theme/theme'
import { StyledFooter } from './style'

export const Footer = () => {
    return (
        <StyledFooter className={TauTheme}>
            <Container fluid style={{ padding: 0, margin: 0 }}>
                <Text>Copyright © 2021 Innatical</Text>
                <Text weight={'bold'}>
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
