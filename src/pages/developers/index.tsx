import { Card, Container, Grid, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from '../../components/Layout'

const Page: NextPage = () => {
    return (
        <Layout title={'Home'}>
            <Grid.Container
                gap={2}
                style={{
                    backgroundColor: '#1F2937',
                    padding: '0 0 0 1rem',
                    margin: 0,
                    width: '100%',
                }}
            >
                <Grid xs>
                    <Link href="#">
                        <Card cover hoverable clickable>
                            <Card.Header
                                css={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    height: '100%',
                                    top: '-1rem',
                                    width: '100%',
                                }}
                            >
                                <Container justify="center" alignItems="center">
                                    <Text h1 css={{ width: 'fit-content' }}>
                                        tauOS SDK
                                    </Text>
                                    <Text css={{ width: 'fit-content' }} h4>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam vehicula
                                        fringilla eros sed dapibus.
                                    </Text>
                                </Container>
                            </Card.Header>

                            <Card.Image
                                src={'/assets/images/background.png'}
                                width="100%"
                                height={340}
                            />
                        </Card>
                    </Link>
                </Grid>
                <Grid xs>
                    <Link href="#">
                        <Card cover hoverable clickable>
                            <Card.Header
                                css={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    height: '100%',
                                    top: '-1rem',
                                    width: '100%',
                                }}
                            >
                                <Container justify="center" alignItems="center">
                                    <Text h1 css={{ width: 'fit-content' }}>
                                        Developer Docs
                                    </Text>
                                    <Text css={{ width: 'fit-content' }} h4>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam vehicula
                                        fringilla eros sed dapibus.
                                    </Text>
                                </Container>
                            </Card.Header>

                            <Card.Image
                                src={'/assets/images/background.png'}
                                width="100%"
                                height={340}
                            />
                        </Card>
                    </Link>
                </Grid>
            </Grid.Container>
            <Grid.Container
                gap={2}
                style={{
                    backgroundColor: '#1F2937',
                    padding: '0 0 0 1rem',
                    margin: 0,
                    width: '100%',
                }}
            >
                <Grid xs>
                    <Link href="#">
                        <Card cover hoverable clickable>
                            <Card.Header
                                css={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    height: '100%',
                                    top: '-1rem',
                                    width: '100%',
                                }}
                            >
                                <Container justify="center" alignItems="center">
                                    <Text h1 css={{ width: 'fit-content' }}>
                                        Developer Downloads
                                    </Text>
                                    <Text css={{ width: 'fit-content' }} h4>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam vehicula
                                        fringilla eros sed dapibus.
                                    </Text>
                                </Container>
                            </Card.Header>

                            <Card.Image
                                src={'/assets/images/background.png'}
                                width="100%"
                                height={340}
                            />
                        </Card>
                    </Link>
                </Grid>
                <Grid xs>
                    <Link href="#">
                        <Card cover hoverable clickable>
                            <Card.Header
                                css={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    height: '100%',
                                    top: '-1rem',
                                    width: '100%',
                                }}
                            >
                                <Container justify="center" alignItems="center">
                                    <Text h1 css={{ width: 'fit-content' }}>
                                        News and Updates
                                    </Text>
                                    <Text css={{ width: 'fit-content' }} h4>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam vehicula
                                        fringilla eros sed dapibus.
                                    </Text>
                                </Container>
                            </Card.Header>

                            <Card.Image
                                src={'/assets/images/background.png'}
                                width="100%"
                                height={340}
                            />
                        </Card>
                    </Link>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export default Page
