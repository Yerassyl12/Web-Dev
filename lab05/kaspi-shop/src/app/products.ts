export interface Products {
    id: number;
    category_id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    rating: number;
    link: string;
}
export interface Category {
    id: number;
    name: string;
    image: string;
}