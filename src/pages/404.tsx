import { Container, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Page: NextPage = () => {
    return (
        <Layout title={'Home'}>
            <Container
                style={{ padding: 0, margin: 0, height: '100%', width: '100%' }}
                justify="center"
                alignItems="center"
                display="flex"
                direction="column"
            >
                <Text h1 size="3rem" css={{ width: 'fit-content' }}>
                    404
                </Text>
                <Text h2 size="2rem" css={{ width: 'fit-content' }}>
                    Page Not Found
                </Text>
            </Container>
        </Layout>
    )
}

export default Page
