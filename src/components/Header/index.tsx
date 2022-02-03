import { Container, Link, Row, Text } from '@nextui-org/react'
import NextLink from 'next/link'
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
                    <NextLink href="/">
                        <Link>
                            <Row
                                justify="flex-start"
                                align="center"
                                style={{
                                    padding: 0,
                                    margin: 0,
                                    gap: '.5rem',
                                    cursor: 'pointer',
                                }}
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
                        </Link>
                    </NextLink>

                    <Row
                        justify="flex-end"
                        align="center"
                        fluid
                        style={{ padding: 0, margin: 0, gap: '1rem' }}
                    >
                        <NextLink href="/">
                            <Link>Home</Link>
                        </NextLink>
                        <NextLink href="/download">
                            <Link>Download</Link>
                        </NextLink>
                        <NextLink href="#">
                            <Link>News</Link>
                        </NextLink>
                        <NextLink href="#">
                            <Link>Docs</Link>
                        </NextLink>
                        <NextLink href="#">
                            <Link>Developers</Link>
                        </NextLink>
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
