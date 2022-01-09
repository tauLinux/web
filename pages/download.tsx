import { useTranslation } from 'react-i18next'
import { Button } from '../components/Button'
import { Download } from '../components/Download'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import '../styles/download.scss'

const DnldBox = ({
    version,
    description,
    style,
    links,
    archs,
    changelog,
}: {
    version: string | JSX.Element
    description: string
    style: 'primary' | 'secondary'
    links: Array<string>
    archs: Array<string>
    changelog: JSX.Element
}) => {
    const { t } = useTranslation()
    return (
        <Download
            title={<>{version}</>}
            description={description}
            btnStyle={style}
            btnOnly={true}
            btnList={
                <section className={'download-section'}>
                    <>
                        {links.map((button) => (
                            <Button
                                style={style}
                                icon={true}
                                href={links[links.indexOf(button)]}
                                content={t('download.btns.download_link', {
                                    arch: archs[links.indexOf(button)],
                                })}
                                key={button}
                            />
                        ))}
                        {changelog}
                    </>
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
                        version={
                            <>
                                <span style={{ fontWeight: 'lighter' }}>
                                    tau
                                </span>
                                OS 1
                            </>
                        }
                        description={t('download.btns.default_description')}
                        style={'primary'}
                        links={['']}
                        archs={['x86_64']}
                        changelog={
                            <>
                                <p>Changelog</p>
                                <ul>
                                    <li>Feature A</li>
                                </ul>
                            </>
                        }
                    />
                    <DnldBox
                        version={t('download.btns.devkit_title')}
                        description={t('download.btns.devkit_description')}
                        style={'secondary'}
                        links={['']}
                        archs={['x86_64']}
                        changelog={
                            <>
                                <p>Changelog</p>
                                <ul>
                                    <li>Feature A</li>
                                </ul>
                            </>
                        }
                    />
                </section>
            </Section>
            <Section bg={'E9ECEF'} className={'lower-row'} fill>
                <section>
                    <h2>{t('download.iso_verification')}</h2>
                    <p>{t('download.iso_verification_content')}</p>
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
