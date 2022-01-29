import { Button, Col, Grid, Row, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import { DownloadCard } from '../components/DownloadCard'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
    return (
        <Layout title={'Home'}>
            <Hero>
                <Row>
                    <Col style={{ height: '100%' }}>
                        <Text
                            h1
                            color="#FFFFFF"
                            size="3rem"
                            style={{ marginBottom: '1rem' }}
                        >
                            A RPM-OSTree Distro <br /> that needs <br /> a new
                            tagline
                        </Text>
                        <Text color="#FFFFFF" style={{ marginBottom: '2rem' }}>
                            THREE LINES OF BULLSHIT
                            <br />
                            THREE LINES OF BULLSHIT
                            <br />
                            THREE LINES OF BULLSHIT
                        </Text>
                        <Button rounded>Learn More</Button>
                    </Col>
                    <img
                        src="/assets/images/background.png"
                        width="500em"
                        height="300em"
                    />
                </Row>
            </Hero>
            <Grid.Container
                gap={2}
                style={{
                    backgroundColor: '#1F2937',
                    padding: '0 0 0 1rem',
                    margin: 0,
                    width: '100%',
                }}
            >
                <Grid xs={6}>
                    <DownloadCard title={'tauOS'} description={'wheeeeeee'} />
                </Grid>
                <Grid xs={3}>
                    <DownloadCard
                        title={'tauOS Enterprise'}
                        description={'wheeeeeee'}
                    />
                </Grid>
                <Grid>
                    <DownloadCard
                        title={'tauOS Forward'}
                        description={'wheeeeeee'}
                    />
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
                <Grid xs={2} alignItems="center">
                    <Button rounded ghost>
                        Security
                    </Button>
                </Grid>
                <Grid alignItems="center">
                    <Button rounded ghost>
                        Documentation
                    </Button>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export default Home
