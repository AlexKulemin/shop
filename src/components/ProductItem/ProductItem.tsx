import { Box, Card, Flex, Icon, Image, Text } from "@chakra-ui/react"
import { LuMessageSquareMore } from "react-icons/lu"

import { Rating } from "@/components/ui/rating"
import { ProductDto } from "@/models/product.dto"
export default function ProductItem({ data }: { data: ProductDto }) {
	const { name, images, price, brand, stock, rating, reviews_count } = data
	return (
		<Box
			h="full"
			paddingX="5px"
			flexShrink="0"
			flexGrow="0"
			flexBasis="50%"
			sm={{ flexBasis: "33%" }}
			md={{ flexBasis: "25%" }}
			lg={{ flexBasis: "20%" }}
		>
			<Card.Root h="full" overflow="hidden">
				<Image
					h="130px"
					minH="130px"
					src={`${import.meta.env.VITE_BASE_URL}${images[0]}`}
					alt="Green double couch with wooden legs"
					loading="lazy"
				/>
				<Card.Body gap="0.5" padding="4">
					<Card.Title>{name}</Card.Title>

					<Text fontSize="md" fontWeight="bold">
						{brand}
					</Text>
					<Flex>
						<Box>In stock:&nbsp;</Box>
						<Box fontWeight="medium">{stock}</Box>
					</Flex>

					<Text
						textStyle="2xl"
						fontWeight="medium"
						letterSpacing="tight"
						mt="2"
					>
						${price}
					</Text>
				</Card.Body>
				<Card.Footer gap="2" flexDirection="column" alignItems="flex-start">
					<Flex alignItems="center">
						<Icon mr="2">
							<LuMessageSquareMore />
						</Icon>
						<Text>{reviews_count}</Text>
					</Flex>
					<Rating
						defaultValue={rating}
						size="sm"
						colorPalette="red"
						allowHalf
						readOnly
					/>
				</Card.Footer>
			</Card.Root>
		</Box>
	)
}
