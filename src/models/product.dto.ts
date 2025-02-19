export interface ProductsDto {
	current_page: number
	limit: number
	pages: number
	products: ProductDto[]
}

export interface ProductDto {
	id: number
	images: string[]
	name: string
	stock: number
	price: number
	brand: string
	rating: number
	reviews_count: number
	barcode: string
}
