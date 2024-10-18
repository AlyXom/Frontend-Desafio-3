import { Product } from "./product";

export interface ModalProps {
    content: Product[] | undefined,
    isOpen: boolean,
    headerText: string,
}