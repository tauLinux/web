import { useTranslation } from 'react-i18next'
import { Button } from '../components/Button'
import { Download } from '../components/Download'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { NewsArticle } from '../components/NewsArticle'
import { Section } from '../components/Section'
import { TauLinux } from '../components/TauLinux'
import '../styles/index.scss'

const Page = () => {
    const { t } = useTranslation()

    return (
        <Layout title={'Home'}>
            <Hero
                title={
                    <p className={'text-tau'}>
                        tau<span className={'text-linux'}>Linux</span>
                    </p>
                }
            />
            <Section bg={'F8F9FA'}>
                <section className={'downloads-row'}>
                    <Download
                        title={
                            <>
                                <TauLinux />
                            </>
                        }
                        description={t('home.default.description')}
                        link={'/about'}
                        btnStyle={'primary'}
                    />
                    <Download
                        title={
                            <>
                                <TauLinux /> Forward
                            </>
                        }
                        description={t('home.forward.description')}
                        link={'/forward'}
                        btnStyle={'secondary'}
                    />
                </section>
                <section className={'downloads-row-lower'}>
                    <Button
                        style={'tertiary'}
                        icon={true}
                        content={t('home.view_other_editions')}
                        href={'/download'}
                    />
                </section>
            </Section>
            <Section bg={'E9ECEF'}>
                <h3>News</h3>
                <section className={'news-row'}>
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
            <Section bg={'F8F9FA'} fill>
                <h5>{t('home.notices')}</h5>
                <p>
                    Kernel 5.17 in Forward Breaks on Intel Wireless Cards. Do
                    Not Update.
                </p>
            </Section>
        </Layout>
    )
}

export default Page
