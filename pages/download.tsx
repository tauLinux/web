import { Trans, useTranslation } from 'react-i18next'
import { Button } from '../components/Button'
import { Download } from '../components/Download'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { TauOS } from '../components/tauOS'
import '../styles/download.scss'

const DnldBox = ({
    version,
    style,
    links,
    archs,
}: {
    version: string
    style: 'primary' | 'secondary'
    links: Array<string>
    archs: Array<string>
}) => {
    const { t } = useTranslation()
    return (
        <Download
            title={
                <>
                    <TauOS />
                    {version}
                </>
            }
            btnOnly={true}
            btnList={
                <section className={'download-section'}>
                    {links.map((button) => (
                        <Button
                            style={style}
                            icon={true}
                            href={links[links.indexOf(button)]}
                            content={t('download.download_link', {
                                arch: archs[links.indexOf(button)],
                            })}
                            key={button}
                        />
                    ))}
                </section>
            }
        />
    )
}

const Page = () => {
    const { t } = useTranslation()

    return (
        <Layout title={t('download.title')}>
            <Hero title={`${t('download.hero_title')}`} />
            <Section bg={'F8F9FA'}>
                <section className={'downloads-row'}>
                    <DnldBox
                        version={'35'}
                        style={'primary'}
                        links={['', '']}
                        archs={['x86_64', 'aarch64']}
                    />
                    <DnldBox
                        version={'OSTree 35'}
                        style={'primary'}
                        links={['', '']}
                        archs={['x86_64', 'aarch64']}
                    />
                </section>
                <section className={'downloads-row downloads-row-lower'}>
                    <DnldBox
                        version={'34'}
                        style={'secondary'}
                        links={['', '']}
                        archs={['x86_64', 'aarch64']}
                    />
                    <DnldBox
                        version={'OSTree 34'}
                        style={'secondary'}
                        links={['', '']}
                        archs={['x86_64', 'aarch64']}
                    />
                </section>
            </Section>
            <Section bg={'E9ECEF'} className={'lower-row'} fill>
                <section>
                    <h2>{t('download.iso_verification')}</h2>
                    <p>
                        <Trans
                            i18nKey={'download.iso_verification_content'}
                            t={t}
                        >
                            1<TauOS />
                        </Trans>
                    </p>
                    <Button
                        style={'tertiary'}
                        icon={true}
                        href={''}
                        content={t('download.verify_download')}
                        className={'download-button'}
                    />
                </section>
                <section>
                    <h2>{t('download.respins')}</h2>
                    <p>{t('download.respins_content')}</p>
                    <Button
                        style={'tertiary'}
                        icon={true}
                        href={'/alt-download'}
                        content={t('download.alternative_downloads')}
                        className={'download-button'}
                    />
                </section>
            </Section>
        </Layout>
    )
}

export default Page
