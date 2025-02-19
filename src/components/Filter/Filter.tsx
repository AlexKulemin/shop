import { createListCollection, Flex } from "@chakra-ui/react"

import {
	SelectContent,
	SelectItem,
	SelectLabel,
	SelectRoot,
	SelectTrigger,
	SelectValueText
} from "@/components/ui/select"

export default function Filter({ sorted, onChange }: FilterProps) {
	const frameworks = createListCollection({
		items: [
			{ label: "Name", value: "name" },
			{ label: "Most popular", value: "rating" },
			{ label: "Low price", value: "price" },
			{ label: "Reviews", value: "review" },
			{ label: "Stock in", value: "stock" }
		]
	})

	return (
		<Flex justifyContent="flex-end" mt="5">
			<SelectRoot
				defaultValue={sorted ? [sorted] : undefined}
				collection={frameworks}
				size="sm"
				width="320px"
				mb="5"
				onValueChange={e => onChange(e.value[0])}
			>
				<SelectLabel textAlign="left">Sort by:</SelectLabel>
				<SelectTrigger>
					<SelectValueText />
				</SelectTrigger>
				<SelectContent>
					{frameworks.items.map(movie => (
						<SelectItem item={movie} key={movie.value}>
							{movie.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectRoot>
		</Flex>
	)
}

interface FilterProps {
	sorted: string | undefined
	onChange: (value: string) => void
}
