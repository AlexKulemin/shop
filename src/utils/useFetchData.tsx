import { useEffect, useState } from "react"

import getProducts from "@/api/actions/get-products"
import { ProductDto, ProductsDto } from "@/models/product.dto"

export default function useFetchData() {
	const [isLoading, setIsLoading] = useState(true)
	const [products, setProducts] = useState<ProductDto[]>([])
	const [pages, setPages] = useState(0)
	const [limit, setLimit] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)
	const [sorted, setSorted] = useState<string | undefined>()

	const fetchData = async (page?: number) => {
		setIsLoading(true)

		const { products, limit, pages, current_page }: ProductsDto =
			await getProducts(page)

		setPages(pages)
		setLimit(limit)
		setCurrentPage(current_page)

		if (sorted) {
			handleSortItems(sorted, products)
		} else {
			setProducts(products)
		}

		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const handleChangePage = ({ page }: { page: number }) => {
		fetchData(page)
	}

	const handleSortItems = (
		sortId: string | undefined,
		items: ProductDto[] = products
	) => {
		if (sortId === "name") {
			setProducts(items.sort((a, b) => (a.name > b.name ? 1 : -1)))
		}

		if (sortId === "rating") {
			setProducts(items.sort((a, b) => b.rating - a.rating))
		}

		if (sortId === "price") {
			setProducts(items.sort((a, b) => a.price - b.price))
		}

		if (sortId === "review") {
			setProducts(items.sort((a, b) => b.reviews_count - a.reviews_count))
		}

		if (sortId === "stock") {
			setProducts(items.sort((a, b) => b.stock - a.stock))
		}

		setSorted(sortId)
	}

	return {
		sorted,
		isLoading,
		products,
		pages,
		limit,
		currentPage,
		handleChangePage,
		handleSortItems
	}
}
