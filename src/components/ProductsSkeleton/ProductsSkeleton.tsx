import { Flex, HStack, Stack } from "@chakra-ui/react"

import { Skeleton, SkeletonText } from "@/components/ui/skeleton"

export default function ProductsSkeleton() {
	const items = Array.from({ length: 5 })
	return (
		<Flex w="full" gap="3" h="350px">
			{items.map((_, index) => (
				<Stack flex="1 0 auto" key={index}>
					<Skeleton height="200px" />

					<HStack width="full">
						<SkeletonText noOfLines={2} />
					</HStack>

					<HStack width="full">
						<SkeletonText noOfLines={2} />
					</HStack>
				</Stack>
			))}
		</Flex>
	)
}
