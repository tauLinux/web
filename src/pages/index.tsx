import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
    return (
        <Layout title={'Home'}>
            <p>A RPM-OSTree Distro that needs a new tagline</p>
        </Layout>
    )
}

export default Home
