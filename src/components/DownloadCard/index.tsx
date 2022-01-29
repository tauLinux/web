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
            <Text h4 color="white">
                {title}
            </Text>
            <Text color="white">{description}</Text>
            <Card.Footer>
                <Link color="primary">Download Now</Link>
            </Card.Footer>
        </Card>
    )
}
