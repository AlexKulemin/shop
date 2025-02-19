import { Flex } from "@chakra-ui/react"

import { ProductDto } from "@/models/product.dto"

import ProductItem from "../ProductItem/ProductItem"

export default function Products({ items }: { items: ProductDto[] }) {
	return (
		<>
			<Flex overflowX="auto" marginX="-5px" h="350px">
				{items.map(item => (
					<ProductItem key={item.id} data={item} />
				))}
			</Flex>
		</>
	)
}
