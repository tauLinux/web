import { Button } from '../components/Button'
import { Download } from '../components/Download'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { Section } from '../components/Section'
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
    return (
        <Download
            title={
                <>
                    <span className={'text-tau'}>
                        tau
                        <span className={'text-linux'}>Linux</span>
                    </span>{' '}
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
                            content={`Download for ${
                                archs[links.indexOf(button)]
                            }`}
                            key={button}
                        />
                    ))}
                </section>
            }
        />
    )
}

const Page = () => {
    return (
        <Layout title={'Download'}>
            <Hero title={'Download Tau'} />
            <Section bg={'F8F9FA'}>
                <section className={'downloads-row'}>
                    <DnldBox
                        version={'35'}
                        style={'primary'}
                        links={['', '']}
                        archs={['x86_64', 'ARM64']}
                    />
                    <DnldBox
                        version={'Forward 35'}
                        style={'secondary'}
                        links={['', '']}
                        archs={['x86_64', 'ARM64']}
                    />
                </section>
                <section className={'downloads-row downloads-row-lower'}>
                    <DnldBox
                        version={'OSTree 35'}
                        style={'primary'}
                        links={['', '']}
                        archs={['x86_64', 'ARM64']}
                    />
                    <DnldBox
                        version={'OSTree Forward 35'}
                        style={'secondary'}
                        links={['', '']}
                        archs={['x86_64', 'ARM64']}
                    />
                </section>
                <section className={'downloads-row-content'}>
                    <h3>What's Tau Forward?</h3>
                    <p>
                        Tau Forward is the name given to the current development
                        versions of Tau Linux. It is primarily meant for
                        advanced users, testers and package maintainers. Learn
                        more at{' '}
                        <a href="https://tau.innatical.com/forward">
                            https://tau.innatical.com/forward
                        </a>
                        .
                    </p>
                </section>
            </Section>
        </Layout>
    )
}

export default Page
