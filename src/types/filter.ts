import { Category } from "./category"

export interface Filter {
    sortBy?: string,
    is_new?: boolean,
    discount?: number,
    limit?: number,
    page?: number,
    totalPages?: number
    categories?: Category[]
}