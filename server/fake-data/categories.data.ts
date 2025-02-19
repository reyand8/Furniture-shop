export interface ICategory {
    name: string;
}

export const categories: Omit<ICategory, 'id'>[] = [
    {
        name: 'Furniture',
    },
    {
        name: 'Decor',
    },
    {
        name: 'Lighting',
    },
    {
        name: 'Storage',
    },
    {
        name: 'Textiles',
    },
    {
        name: 'Outdoor',
    },
    {
        name: 'Accessories',
    },
    {
        name: 'Bedding',
    },
    {
        name: 'Bathroom',
    }
];

