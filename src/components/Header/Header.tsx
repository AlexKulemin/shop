import { Container, Flex, Heading } from "@chakra-ui/react"

export default function Header() {
	return (
		<Flex boxShadow="sm" h="65px" alignItems="center">
			<Container>
				<Heading textAlign="left">Cat's shop App</Heading>
			</Container>
		</Flex>
	)
}
