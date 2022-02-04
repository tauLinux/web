import { Col, Text } from '@nextui-org/react'
import type { GetServerSideProps } from 'next'
import React from 'react'
import { Hero } from '../../../components/Hero'
import { Layout } from '../../../components/Layout'

interface CVRFDoc {
    document_title: string
    document_distribution: string
    document_references: {
        reference: Array<{ description: string; type: string; url: string }>
    }
    aggregate_severity: string
    document_tracking: {
        initial_release_date: Date
        identification: {
            id: string
        }
        revision_history: {
            revision: {
                date: Date
                number: number
                description: string
            }
        }
        generator: {
            date: Date
            engine: string
        }
        current_release_date: Date
        version: number
        status: string
    }
    product_tree: {
        relationship: Array<{
            relates_to_product_reference: string
            product_reference: string
            full_product_name: {
                product_id: string
                cpe: string
                product_name: string
            }
            relation_type: string
        }>
        branch: Array<{
            name: string
            type: string
            branch: Array<{
                name: string
                full_product_name: {
                    product_id: string
                    cpe: string
                    product_name: string
                }
                type: string
            }>
        }>
    }
    document_publisher: {
        issuing_authority: string
        contact_details: string
        type: string
    }
    vulnerability: Array<{
        notes: {
            note: string
        }
        cve: string
        references: {
            reference: Array<{
                description: string
                url: string
            }>
        }
        release_date: Date
        involvements: {
            involvement: {
                party: string
                status: string
            }
        }
        product_statuses: {
            status: {
                product_id: Array<string>
                type: string
            }
        }
        remediations: {
            remediation: {
                description: string
                type: string
                url: string
            }
        }
        threats: {
            threat: {
                description: string
                type: string
            }
        }
        discovery_date: Date
        ordinal: number
    }>
    document_notes: {
        note: Array<string>
    }
    document_type: string
}

function Page({ data }: { data: CVRFDoc }) {
    return (
        <Layout title={data.document_tracking.identification.id}>
            <Hero>
                <Col>
                    <Text h1 size="3rem">
                        {data.document_tracking.identification.id}
                    </Text>
                    <Text>
                        Public on{' '}
                        {new Date(
                            data.document_tracking.current_release_date
                        ).toDateString()}
                    </Text>
                    <Text>Security Advisory: {data.aggregate_severity}</Text>
                </Col>
            </Hero>
        </Layout>
    )
}

export default Page

export const getServerSideProps: GetServerSideProps = async (context) => {
    let { cvrf } = context.query

    cvrf = (cvrf as string).toUpperCase()

    const res = await fetch(
        `https://access.redhat.com/hydra/rest/securitydata/cvrf/${cvrf}.json`
    )
    const data = await res.json()

    if (data.message) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data: data.cvrfdoc },
    }
}
