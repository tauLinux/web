import { Button } from '../components/Button'
import { Download } from '../components/Download'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import '../styles/index.scss'

const Page = () => {
    return (
        <Layout>
            <Hero />
            <Section bg={'F8F9FA'}>
                <section className={'downloads-row'}>
                    <Download
                        title={
                            <>
                                <span className={'text-tau'}>
                                    tau
                                    <span className={'text-linux'}>Linux</span>
                                </span>{' '}
                                Desktop
                            </>
                        }
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Remove the word-break here'
                        }
                        link={'test'}
                        btnStyle={'primary'}
                    />
                    <Download
                        title={
                            <>
                                <span className={'text-tau'}>
                                    tau
                                    <span className={'text-linux'}>Linux</span>
                                </span>{' '}
                                OSTree
                            </>
                        }
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Remove the word-break here'
                        }
                        link={'test'}
                        btnStyle={'secondary'}
                    />
                </section>
                <section className={'downloads-row-lower'}>
                    <Button
                        style={'tertiary'}
                        icon={true}
                        content={'View Other Editions'}
                        href={'test'}
                    />
                </section>
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
