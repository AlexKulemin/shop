import { Flex, HStack } from "@chakra-ui/react"

import {
	PaginationItems,
	PaginationNextTrigger,
	PaginationPrevTrigger,
	PaginationRoot
} from "@/components/ui/pagination"
export default function Pagination({
	limit,
	pages,
	currentPage,
	onChangePage
}: PaginationProps) {
	return (
		<Flex alignItems="center" justifyContent="center" mt="10">
			<PaginationRoot
				variant="solid"
				colorPalette="teal"
				count={limit * pages}
				pageSize={limit}
				defaultPage={currentPage}
				onPageChange={onChangePage}
			>
				<HStack>
					<PaginationPrevTrigger />
					<PaginationItems />
					<PaginationNextTrigger />
				</HStack>
			</PaginationRoot>
		</Flex>
	)
}

interface PaginationProps {
	limit: number
	pages: number
	currentPage: number
	onChangePage: ({ page }: { page: number }) => void
}
