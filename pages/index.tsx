import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'

const Page = () => {
    return (
        <Layout>
            <Hero />
            <Section bg={'F8F9FA'}>
                <p>
                    This Section would contain the fucking downloads but I don't
                    wanna write that atm
                </p>
            </Section>
            <Section bg={'E9ECEF'}>
                <p>News Section</p>
            </Section>
            <Section bg={'F8F9FA'}>
                <p>
                    This Section would contain the fucking downloads but I don't
                    wanna write that atm
                </p>
            </Section>
        </Layout>
    )
}

export default Page
