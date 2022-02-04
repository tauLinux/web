import { Row, Spacer, Text } from '@nextui-org/react'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'
import { Hero } from '../../components/Hero'
import { Layout } from '../../components/Layout'

interface CVEList {
    CVE: string
    severity: string
    public_date: Date
    advisories: Array<string>
    bugzilla: number
    bugzilla_description: string
    cvss_score: number | null
    cvss_scoring_vector: number | null
    CWE: string
    affected_packages: Array<string>
    resource_url: string
    cvss3_scoring_vector: string
    cvss3_score: number
}

interface CVE {
    CVE: string
    CWE: string
    name: string
    details: string
}

function Page({
    data,
    CVEData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Layout title={'Security'}>
            <Hero>
                <Row align="center">
                    <Text h1 size="3rem">
                        tauOS Security Centre
                    </Text>
                </Row>
            </Hero>
            {data.map((cve: CVEList) => (
                <Text>
                    {cve.CVE} - {cve.CWE} - {cve.bugzilla_description} -{' '}
                    {cve.public_date} - {cve.severity}
                </Text>
            ))}
            <Spacer y={3} />
            {CVEData.map((cve: CVE) => (
                <Text>
                    {cve.name} - {cve.details}
                </Text>
            ))}
        </Layout>
    )
}

export default Page

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        'https://access.redhat.com/hydra/rest/securitydata/cve.json?per_page=10'
    )
    const data = await res.json()
    let CVEData: any[] = []

    for (let i in data) {
        await fetch(
            `https://access.redhat.com/hydra/rest/securitydata/cve/${
                (data[i] as CVEList).CVE
            }.json`
        ).then(async (body) => {
            CVEData.push(await body.json())
        })
    }

    return {
        props: { data, CVEData },
    }
}
