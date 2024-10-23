import { Category } from "./category";
import { Product } from "./product";

export interface Filtered {
    is_new?: boolean,
    category?: number,
    discount?: number,
    order?: string,
    limit?: number,
    total?: number,
    currentPage?: number,
    totalPages?: number,
    categories?: Category[]
    products?: Product[] 
    showing?: number
}