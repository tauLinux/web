import { Trans, useTranslation } from 'react-i18next'
import { Button } from '../components/Button'
import { Download } from '../components/Download'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
import { TauLinux } from '../components/TauLinux'
import '../styles/download.scss'

const DnldBox = ({
    version,
    style,
    links,
    archs,
    description,
    others,
}: {
    version: string
    style: 'primary' | 'secondary'
    links: Array<string>
    archs: Array<string>
    description?: string
    others?: Array<string>
}) => {
    const { t } = useTranslation()

    return (
        <Download
            title={
                <>
                    <TauLinux /> {version}
                </>
            }
            description={description}
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
                    {others && (
                        <Button
                            style={'tertiary'}
                            icon={true}
                            href={others[0]}
                            content={others[1]}
                            key={others[0]}
                        />
                    )}
                </section>
            }
        />
    )
}

const Page = () => {
    const { t } = useTranslation()

    return (
        <Layout title={t('alt_download.title')}>
            <Hero title={t('alt_download.hero_title')} />
            <Section bg={'F8F9FA'}>
                <section className={'downloads-row'}>
                    <DnldBox
                        version={`Forward 35`}
                        style={'primary'}
                        links={['hsdfasg', 'zsgfdsaf']}
                        archs={['x86_64', 'aarch64']}
                    />
                    <DnldBox
                        version={'OSTree 35'}
                        style={'primary'}
                        links={['zsdfsag', 'sdfgdfsd']}
                        archs={['x86_64', 'aarch64']}
                    />
                </section>
                <section className={'downloads-row downloads-row-lower'}>
                    <DnldBox
                        version={'34'}
                        style={'secondary'}
                        links={['zdgfasg', 'zgsadf']}
                        archs={['x86_64', 'aarch64']}
                    />
                    <DnldBox
                        version={'OSTree 34'}
                        style={'secondary'}
                        links={['atvasf', 'bsdgfas']}
                        archs={['x86_64', 'aarch64']}
                    />
                </section>
                <section className={'downloads-row-content'}>
                    <h3>{t('alt_download.forward')}</h3>
                    <p>
                        {t('alt_download.forward_content')}{' '}
                        <a href="https://tau.innatical.com/forward">
                            https://tau.innatical.com/forward
                        </a>
                        .
                    </p>
                </section>
            </Section>
            <Section bg={'E9ECEF'}>
                <h3>{t('alt_download.spins.title')}</h3>
                <section className={'downloads-row'}>
                    <DnldBox
                        version={'Dragon 35'}
                        description={t('alt_download.spins.dragon_description')}
                        style={'primary'}
                        links={['fdasr', 'rewtre']}
                        archs={['x86_64', 'aarch64']}
                        others={[
                            'sfjhlsdf',
                            t('alt_download.spins.more_downloads'),
                        ]}
                    />
                    <DnldBox
                        version={'Dragon OSTree 35'}
                        description={t('alt_download.spins.dragon_description')}
                        style={'primary'}
                        links={['fdasdf', 'fdasdff']}
                        archs={['x86_64', 'aarch64']}
                        others={[
                            'sfjhlsdf',
                            t('alt_download.spins.more_downloads'),
                        ]}
                    />
                </section>
                <section className={'downloads-row'}>
                    <DnldBox
                        version={'Athens 35'}
                        description={t('alt_download.spins.athens_description')}
                        style={'primary'}
                        links={['asdf', 'fdasdf']}
                        archs={['x86_64', 'aarch64']}
                        others={[
                            'sfjhlsdf',
                            t('alt_download.spins.more_downloads'),
                        ]}
                    />
                    <DnldBox
                        version={'Athens OSTree 35'}
                        description={t('alt_download.spins.athens_description')}
                        style={'primary'}
                        links={['asdfdsfdsfsd', 'asdfdf']}
                        archs={['x86_64', 'aarch64']}
                        others={[
                            'sfjhlsdf',
                            t('alt_download.spins.more_downloads'),
                        ]}
                    />
                </section>
            </Section>
            <Section bg={'F8F9FA'} className={'lower-row'} fill>
                <section>
                    <h2>{t('download.iso_verification')}</h2>
                    <p>
                        <Trans
                            i18nKey={'download.iso_verification_content'}
                            t={t}
                        >
                            1<TauLinux />
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
