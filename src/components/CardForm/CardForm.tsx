import { Button, Card, HStack, Separator, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router"

export default function CardFrom({
	children,
	title,
	description,
	link
}: CardFormProps) {
	return (
		<Card.Root maxW="92vw" w="350px">
			<Card.Header>
				<Card.Title>{title}</Card.Title>
				<Card.Description>{description}</Card.Description>
			</Card.Header>
			<Card.Body pb="0.5rem">{children}</Card.Body>
			<Card.Footer flexDirection="column">
				<Stack w="full">
					<HStack>
						<Separator flex="1" />
						<Text flexShrink="0" fontSize="sm">
							or
						</Text>
						<Separator flex="1" />
					</HStack>
				</Stack>
				<Button variant="outline" w="full" asChild>
					<Link to={`${link.to}`}>{link.name}</Link>
				</Button>
			</Card.Footer>
		</Card.Root>
	)
}

interface CardFormProps {
	children: React.ReactNode
	title: string
	description: string
	link: {
		name: string
		to: string
	}
}
