import { Container, Link, Row, Text } from '@nextui-org/react'
import { TauTheme } from '../../theme/theme'
import { StyledHeader } from './style'

export const Header = () => {
    return (
        <StyledHeader className={TauTheme}>
            <Container style={{ padding: 0, margin: 0 }}>
                <Row
                    justify="space-between"
                    align="center"
                    fluid
                    style={{ padding: 0, margin: 0 }}
                >
                    <Row
                        justify="flex-start"
                        align="center"
                        style={{ padding: 0, margin: 0, gap: '.5rem' }}
                    >
                        <img
                            src="/assets/images/icon.png"
                            width="24px"
                            height="24px"
                        />
                        {/* TODO: tau should be regular, OS should be bold */}
                        <Text h1>
                            tau<strong>OS</strong>
                        </Text>
                    </Row>

                    <Row
                        justify="flex-end"
                        align="center"
                        fluid
                        style={{ padding: 0, margin: 0, gap: '1rem' }}
                    >
                        {/* TODO change theme colour */}
                        <Link href="#">Home</Link>
                        <Link href="#">Download</Link>
                        <Link href="#">News</Link>
                        <Link href="#">Docs</Link>
                        <Link href="#">Developers</Link>
                        <div
                            style={{
                                width: '2rem',
                                height: '2rem',
                                backgroundColor: '#C4C4C4',
                                borderRadius: '100%',
                            }}
                        />
                    </Row>
                </Row>
            </Container>
        </StyledHeader>
    )
}
