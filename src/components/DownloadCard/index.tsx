import { Card, Link, Text } from '@nextui-org/react'

export const DownloadCard = ({
    title,
    description,
}: {
    title: string
    description: string
}) => {
    return (
        <Card style={{ backgroundColor: '#111827' }}>
            <Text h4>{title}</Text>
            <Text>{description}</Text>
            <Card.Footer>
                <Link color="secondary">Download Now</Link>
            </Card.Footer>
        </Card>
    )
}
