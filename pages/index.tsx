import { Button } from '../components/Button'
import { Download } from '../components/Download'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { NewsArticle } from '../components/NewsArticle'
import { Section } from '../components/Section'
import '../styles/index.scss'

const Page = () => {
    return (
        <Layout title={'Home'}>
            <Hero
                title={
                    <p className={'text-tau'}>
                        tau<p className={'text-linux'}>Linux</p>
                    </p>
                }
            />
            <Section bg={'F8F9FA'}>
                <section className={'downloads-row'}>
                    <Download
                        title={
                            <>
                                <span className={'text-tau'}>
                                    tau
                                    <span className={'text-linux'}>Linux</span>
                                </span>
                            </>
                        }
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Remove the word-break here'
                        }
                        link={'/about'}
                        btnStyle={'primary'}
                    />
                    <Download
                        title={
                            <>
                                <span className={'text-tau'}>
                                    tau
                                    <span className={'text-linux'}>Linux</span>
                                </span>{' '}
                                Forward
                            </>
                        }
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Remove the word-break here'
                        }
                        link={'/forward'}
                        btnStyle={'secondary'}
                    />
                </section>
                <section className={'downloads-row-lower'}>
                    <Button
                        style={'tertiary'}
                        icon={true}
                        content={'View Other Editions'}
                        href={'/download'}
                    />
                </section>
            </Section>
            <Section bg={'E9ECEF'}>
                <h3>News</h3>
                <section className={'downloads-row'}>
                    <NewsArticle
                        link={'test'}
                        image={'/assets/images/background.png'}
                        title={'This is a news article title'}
                        date={'25 November, 2021'}
                        author={'Jamie Lee'}
                    />
                    <NewsArticle
                        link={'test'}
                        image={'/assets/images/background.png'}
                        title={'This is a news article title'}
                        date={'25 November, 2021'}
                        author={'Jamie Lee'}
                    />
                    <NewsArticle
                        link={'test'}
                        image={'/assets/images/background.png'}
                        title={'This is a news article title'}
                        date={'25 November, 2021'}
                        author={'Jamie Lee'}
                    />
                </section>
            </Section>
            <Section bg={'F8F9FA'}>
                <p>TODO: Use this section for something or remove it</p>
            </Section>
        </Layout>
    )
}

export default Page
