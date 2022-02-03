import {
    Button,
    Card,
    Col,
    Divider,
    Grid,
    Link,
    NormalColors,
    Row,
    Text,
} from '@nextui-org/react'
import type { NextPage } from 'next'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'

const DnldCard = ({
    version,
    description,
    links,
    archs,
    changelog,
    color,
}: {
    version: string
    description: string
    links: Array<string>
    archs: Array<string>
    changelog: JSX.Element
    color: NormalColors
}) => (
    <Card style={{ backgroundColor: '#111827' }}>
        <Card.Header>
            <Text h4>tauOS {version}</Text>
        </Card.Header>
        <Divider />
        <Card.Body>
            <Text>{description}</Text>
        </Card.Body>
        <Card.Footer>
            <Col>
                {links.map((button) => (
                    <Button
                        color={color}
                        bordered
                        style={{ marginBottom: '.5rem' }}
                    >
                        <Link href={links[links.indexOf(button)]}>
                            Download for {archs[links.indexOf(button)]}
                        </Link>
                    </Button>
                ))}
                <Text h5 style={{ marginTop: '1rem' }}>
                    Changelog
                </Text>
                <Text>{changelog}</Text>
            </Col>
        </Card.Footer>
    </Card>
)

const Page: NextPage = () => {
    return (
        <Layout title={'Download'}>
            <Hero>
                <Row align="center">
                    <Text h1 size="3rem">
                        Download tauOS
                    </Text>
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
                <Grid xs>
                    <DnldCard
                        version={'1'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula fringilla eros sed dapibus. Nam mauris sapien, laoreet vitae nibh in, porttitor faucibus felis. Etiam sapien enim, laoreet ut viverra rutrum, malesuada a nisi. Curabitur sagittis mattis dui, sit amet placerat dui.'
                        }
                        links={['asdfds', 'asjhdfksd']}
                        archs={['x86_64', 'i386']}
                        changelog={
                            <ul>
                                <li>Test</li>
                            </ul>
                        }
                        color={'primary'}
                    />
                </Grid>
                <Grid xs>
                    <DnldCard
                        version={'Tools for Developers'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula fringilla eros sed dapibus.'
                        }
                        links={['asdfds', 'asjhdfksd']}
                        archs={['x86_64', 'i386']}
                        changelog={
                            <ul>
                                <li>Test</li>
                            </ul>
                        }
                        color={'primary'}
                    />
                </Grid>
            </Grid.Container>
            <Grid.Container
                gap={2}
                style={{
                    backgroundColor: '#111827',
                    padding: '0 0 0 1rem',
                    margin: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <Grid xs>
                    <Card style={{ backgroundColor: '#111827' }} shadow={false}>
                        <Card.Header>
                            <Text h2>ISO Verification</Text>
                        </Card.Header>
                        <Divider />
                        <Card.Body>
                            <Text>
                                Once you have downloaded tauOS, make sure to
                                verify it for security and integrity.
                            </Text>
                        </Card.Body>

                        <Card.Footer>
                            <Button
                                color="secondary"
                                bordered
                                style={{ marginBottom: '.5rem' }}
                            >
                                <Link href={'#'}>Verify Your Download</Link>
                            </Button>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid xs>
                    <Card style={{ backgroundColor: '#111827' }} shadow={false}>
                        <Card.Header>
                            <Text h2>Looking for something else?</Text>
                        </Card.Header>
                        <Divider />
                        <Card.Body>
                            <Text>
                                If these aren’t what you need, other downloads
                                including Remixes, Old Versions, and alternate
                                architectures are available on Sourceview.
                            </Text>
                        </Card.Body>

                        <Card.Footer>
                            <Button
                                color="secondary"
                                bordered
                                style={{ marginBottom: '.5rem' }}
                            >
                                <Link href={'#'}>Alternative Downloads</Link>
                            </Button>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export default Page
