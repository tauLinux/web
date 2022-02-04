import { Col, Text } from '@nextui-org/react'
import type { GetServerSideProps } from 'next'
import React from 'react'
import { Hero } from '../../../components/Hero'
import { Layout } from '../../../components/Layout'

interface PackageState {
    product_name: string
    fix_state: string
    package_name: string
    cpe: string
}

interface CVE {
    threat_severity: string
    public_date: Date
    bugzilla: {
        description: string
        id: number
        url: String
    }
    cvss3: {
        cvss3_base_score: number
        cvss3_scoring_vector: string
        status: string
    }
    cwe: string
    details: Array<string>
    package_state: Array<PackageState>
    upstream_fix: string
    references: Array<string>
    name: string
    csaw: boolean
}

function Page({ data }: { data: CVE }) {
    return (
        <Layout title={data.name}>
            <Hero>
                <Col>
                    <Text h1 size="3rem">
                        {data.name}
                    </Text>
                    <Text>
                        Public on {new Date(data.public_date).toDateString()}
                    </Text>
                    <Text>{data.threat_severity} Impact</Text>
                </Col>
            </Hero>
            <Text h1>Description</Text>
            <Text h3>The MITRE CVE dictionary describes this issue as:</Text>

            {data.details.map(
                (
                    details:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined
                ) => (
                    <Text>{details}</Text>
                )
            )}

            <Text h1>Additional Information</Text>
            <Text>
                Bugzilla {data.bugzilla.id}: {data.bugzilla.description}
            </Text>
            <Text>{data.cwe}</Text>

            <Text h1>Affected Packages and Issued Security Errata</Text>

            {data.package_state.map((details) => (
                <Text>{details.product_name}</Text>
            ))}

            <Text h1>External References</Text>
            {data.references.map((details) => (
                <Text>{details}</Text>
            ))}
        </Layout>
    )
}

export default Page

export const getServerSideProps: GetServerSideProps = async (context) => {
    let { cve } = context.query

    cve = (cve as string).toUpperCase()

    const res = await fetch(
        `https://access.redhat.com/hydra/rest/securitydata/cve/${cve}.json`
    )
    const data = await res.json()

    if (data.message) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}
