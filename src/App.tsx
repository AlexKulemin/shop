import "./App.css"

import { Container } from "@chakra-ui/react"

import Filter from "@/components/Filter/Filter"
import Header from "@/components/Header/Header"
import Products from "@/components/Products/Products"
import ProductsSkeleton from "@/components/ProductsSkeleton/ProductsSkeleton"
import useFetchData from "@/utils/useFetchData"

import Pagination from "./components/Pagination/Pagination"

function App() {
	const {
		limit,
		pages,
		products,
		isLoading,
		currentPage,
		sorted,
		handleChangePage,
		handleSortItems
	} = useFetchData()

	return (
		<>
			<Header />

			<Container>
				<Filter sorted={sorted} onChange={handleSortItems} />
				{isLoading && <ProductsSkeleton />}
				{!isLoading && (
					<>
						<Products items={products} />
					</>
				)}
				<Pagination
					limit={limit}
					pages={pages}
					currentPage={currentPage}
					onChangePage={handleChangePage}
				/>
			</Container>
		</>
	)
}

export default App
