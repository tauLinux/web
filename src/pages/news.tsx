// I WILL SEE THIS PAGE IN HELL
import { Card, Col, Grid, Link, Row, Spacer, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'

const NewsCard = ({
    link,
    image,
    title,
    date,
    author,
}: {
    link: string
    image: string
    title: string
    date: string
    author: string
}) => (
    <Card style={{ backgroundColor: '#111827' }} hoverable clickable>
        <NextLink href={link}>
            <Link>
                <Col>
                    <img src={image} width="100%" height="100rem" />
                    <Spacer y={2} />
                    <Text h3>{title}</Text>
                    <Text small>
                        {date} • {author}
                    </Text>
                </Col>
            </Link>
        </NextLink>
    </Card>
)

const Page: NextPage = () => {
    return (
        <Layout title={'News'}>
            <Hero>
                <Row align="center">
                    <Text h1 size="3rem">
                        tauOS News
                    </Text>
                </Row>
            </Hero>
            <Grid.Container
                gap={5}
                style={{
                    backgroundColor: '#1F2937',
                    padding: '0 0 0 1rem',
                    margin: 0,
                    width: '100%',
                }}
            >
                <Grid xs>
                    <Card
                        style={{ backgroundColor: '#111827' }}
                        hoverable
                        clickable
                    >
                        <NextLink href="/">
                            <Link>
                                <Row
                                    justify="space-between"
                                    align="center"
                                    style={{ padding: '0 3rem' }}
                                >
                                    <img
                                        src="/assets/images/hero.png"
                                        height="200rem"
                                    />

                                    <Col style={{ width: 'fit-content' }}>
                                        <Text
                                            h2
                                            style={{
                                                width: 'fit-content',
                                                margin: 0,
                                            }}
                                        >
                                            This is potentially the worst news
                                            headline you’ve ever seen
                                        </Text>
                                        <Text
                                            style={{
                                                width: 'fit-content',
                                                margin: 0,
                                            }}
                                        >
                                            And if that’s the worst news
                                            headline, this is the worst news
                                            description :)
                                        </Text>
                                        <Text small>
                                            2 Feburary, 2022 • Jamie Lee
                                        </Text>
                                    </Col>
                                </Row>
                            </Link>
                        </NextLink>
                    </Card>
                </Grid>
            </Grid.Container>
            <Grid.Container
                gap={2}
                justify="center"
                style={{
                    backgroundColor: '#111827',
                    padding: '0 3rem 0 1rem',
                    margin: 0,
                    width: '100%',
                }}
            >
                <Grid xs>
                    <NewsCard
                        title={
                            'This is potentially the worst news headline you’ve ever seen'
                        }
                        image={'/assets/images/hero.png'}
                        link={''}
                        author={'Jamie Lee'}
                        date={'2 Feburary, 2022'}
                    />
                </Grid>
                <Grid xs>
                    <NewsCard
                        title={
                            'This is potentially the worst news headline you’ve ever seen'
                        }
                        image={'/assets/images/hero.png'}
                        link={''}
                        author={'Jamie Lee'}
                        date={'2 Feburary, 2022'}
                    />
                </Grid>
                <Grid xs>
                    <NewsCard
                        title={
                            'This is potentially the worst news headline you’ve ever seen'
                        }
                        image={'/assets/images/hero.png'}
                        link={''}
                        author={'Jamie Lee'}
                        date={'2 Feburary, 2022'}
                    />
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export default Page
