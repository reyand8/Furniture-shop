export interface IProduct {
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    currency: string;
    images: string[];
    categoryId: number;
    type: 'FURNITURE' | 'DECOR' | 'ACCESSORIES';
    color: string;
    isBestSeller: boolean;
    sizes: string[];
}


export const products: IProduct[] = [
    {
        name: 'Wooden Dining Table',
        description: 'A spacious and stylish wooden dining table, perfect for family dinners.',
        price: 299.0,
        discountPrice: 249.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/tarsele-extendable-table-oak-veneer-black__0916857_pe785431_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/tarsele-extendable-table-oak-veneer-black__0944977_pe797515_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/tarsele-extendable-table-oak-veneer-black__0916859_pe785430_s5.jpg?f=xl'
        ],
        categoryId: 1,
        type: 'FURNITURE',
        color: 'Natural wood',
        isBestSeller: true,
        sizes: ['200cm x 90cm x 75cm']
    },
    {
        name: 'Leather Office Chair',
        description: 'Ergonomic leather office chair for maximum comfort during long working hours.',
        price: 150.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/markus-office-chair-vissle-dark-grey__0724714_pe734597_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/markus-office-chair-vissle-dark-grey__1030304_pe836200_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/markus-office-chair-vissle-dark-grey__0854850_pe563377_s5.jpg?f=xl'
        ],
        categoryId: 1,
        type: 'FURNITURE',
        color: 'Black',
        isBestSeller: false,
        sizes: ['60cm x 60cm x 110cm']
    },
    {
        name: 'Rattan Coffee Table',
        description: 'A rustic rattan coffee table, ideal for creating a cozy living room vibe.',
        price: 89.0,
        discountPrice: 69.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/falskar-coffee-table-outdoor-brown__1205155_pe906956_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/falskar-coffee-table-outdoor-brown__1180849_pe896476_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/falskar-coffee-table-outdoor-brown__1180856_pe896484_s5.jpg?f=xl'
        ],
        categoryId: 1,
        type: 'FURNITURE',
        color: 'Brown',
        isBestSeller: false,
        sizes: ['90cm x 50cm x 40cm']
    },
    {
        name: 'Sofa Bed',
        description: 'A comfortable and space-saving sofa that can be converted into a bed.',
        price: 499.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/fridhult-sofa-bed-knisa-light-grey__1194665_pe902051_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/fridhult-sofa-bed-knisa-light-grey__1194667_pe902050_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/fridhult-sofa-bed-knisa-light-grey__1194663_pe902049_s5.jpg?f=xl'
        ],
        categoryId: 1,
        type: 'FURNITURE',
        color: 'Grey',
        isBestSeller: false,
        sizes: ['200cm x 90cm x 75cm']
    },
    {
        name: 'Industrial Bookshelf',
        description: 'A stylish industrial bookshelf made of metal and wood for an urban look.',
        price: 120.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/ladmakare-storage-combination-w-sliding-doors-with-2-shelves-oak-effect__1377060_pe960725_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/ladmakare-storage-combination-w-sliding-doors-with-2-shelves-oak-effect__1380184_pe961659_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/ladmakare-storage-combination-w-sliding-doors-with-2-shelves-oak-effect__1376784_pe960516_s5.jpg?f=xl'
        ],
        categoryId: 1,
        type: 'FURNITURE',
        color: 'Black & Wood',
        isBestSeller: false,
        sizes: ['100cm x 40cm x 180cm']
    },
    {
        name: 'Decorative Floor Lamp',
        description: 'An elegant floor lamp with a modern design to brighten up your living space.',
        price: 75.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/lauters-floor-lamp-ash-white__0663863_pe712536_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/lauters-floor-lamp-ash-white__0879908_pe714870_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/lauters-floor-lamp-ash-white__0879933_pe714873_s5.jpg?f=xl'
        ],
        categoryId: 2,
        type: 'DECOR',
        color: 'Gold',
        isBestSeller: false,
        sizes: ['160cm x 40cm x 40cm']
    },
    {
        name: 'Woven Throw Blanket',
        description: 'A cozy, soft throw blanket perfect for adding texture to your sofa or bed.',
        price: 40.0,
        discountPrice: 29.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/klippoxel-throw-beige-yellow__1284698_pe933105_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/klippoxel-throw-beige-yellow__1284696_pe933107_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/klippoxel-throw-beige-yellow__1284695_pe933104_s5.jpg?f=xl'
        ],
        categoryId: 2,
        type: 'DECOR',
        color: 'Beige',
        isBestSeller: false,
        sizes: ['150cm x 200cm']
    },
    {
        name: 'Modern Art Print',
        description: 'A striking art print to bring contemporary style to any room.',
        price: 30.0,
        discountPrice: 19.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/bild-poster-love-ritual__1176634_pe895084_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/bild-poster-love-ritual__1194026_pe901776_s5.jpg?f=xl',
        ],
        categoryId: 2,
        type: 'DECOR',
        color: 'Multi-color',
        isBestSeller: true,
        sizes: ['50cm x 70cm']
    },
    {
        name: 'Decorative Throw Pillows',
        description: 'A set of decorative pillows for added comfort and style in any room.',
        price: 25.0,
        discountPrice: 19.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/vattenvan-cushion-cover-pink-striped__1138914_pe880143_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/vattenvan-cushion-cover-pink-striped__1138913_pe880146_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/vattenvan-cushion-cover-pink-striped__1138911_pe880144_s5.jpg?f=xl'
        ],
        categoryId: 2,
        type: 'DECOR',
        color: 'Blue & White',
        isBestSeller: true,
        sizes: ['40cm x 40cm']
    },
    {
        name: 'Wall Clock',
        description: 'A sleek and minimalistic wall clock that fits any modern space.',
        price: 45.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/pluttis-wall-clock-black__1013114_pe829054_s5.jpg?f=xxxl',
            'https://www.ikea.com/es/en/images/products/pluttis-wall-clock-black__1013115_pe829056_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/pluttis-wall-clock-black__1013116_pe829055_s5.jpg?f=xl'
        ],
        categoryId: 2,
        type: 'DECOR',
        color: 'Silver',
        isBestSeller: false,
        sizes: ['30cm diameter']
    },
    {
        name: 'Bamboo Storage Basket',
        description: 'A versatile bamboo basket for organizing your home.',
        price: 22.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/mjolkkanna-basket-bamboo__1224558_pe915027_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/mjolkkanna-basket-bamboo__1230130_pe915705_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/mjolkkanna-basket-bamboo__1224573_pe915040_s5.jpg?f=xl'
        ],
        categoryId: 3,
        type: 'ACCESSORIES',
        color: 'Natural Bamboo',
        isBestSeller: false,
        sizes: ['40cm x 30cm x 20cm']
    },
    {
        name: 'Adjustable Wall Shelf',
        description: 'A sleek, adjustable wall shelf for books and decorative items.',
        price: 70.0,
        discountPrice: 65.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/kallax-lagkapten-desk-combination-white-white-stained-oak-effect__1090558_pe862095_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/kallax-lagkapten-desk-combination-white-white-stained-oak-effect__1097508_pe865006_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/kallax-lagkapten-desk-combination-white-white-stained-oak-effect__1215325_pe911962_s5.jpg?f=xl'
        ],
        categoryId: 1,
        type: 'FURNITURE',
        color: 'Black & Silver',
        isBestSeller: false,
        sizes: ['120cm x 20cm x 40cm']
    },
    {
        name: 'Decorative Vase',
        description: 'A beautiful ceramic vase to add charm to your living space.',
        price: 50.0,
        discountPrice: 40.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/myrmosaik-vase-blue__1317948_pe940761_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/myrmosaik-vase-blue__1317947_pe940762_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/myrmosaik-vase-blue__1327368_pe944419_s5.jpg?f=xl'
        ],
        categoryId: 2,
        type: 'DECOR',
        color: 'White',
        isBestSeller: true,
        sizes: ['25cm height']
    },
    {
        name: 'Outdoor Lounge Chair',
        description: 'Perfect for outdoor spaces, this lounge chair offers comfort and style.',
        price: 150.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/tumholmen-rocking-chair-in-outdoor-white-multicolour__1148177_pe883706_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/tumholmen-rocking-chair-in-outdoor-white-multicolour__1148175_pe883705_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/tumholmen-rocking-chair-in-outdoor-white-multicolour__1148176_pe883707_s5.jpg?f=xl'
        ],
        categoryId: 6,
        type: 'FURNITURE',
        color: 'Grey & Beige',
        isBestSeller: true,
        sizes: ['80cm x 70cm x 90cm']
    },
    {
        name: 'LED Desk Lamp',
        description: 'A modern LED desk lamp with adjustable brightness and color temperature.',
        price: 40.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/navlinge-led-work-lamp-white__0709828_pe727111_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/navlinge-led-work-lamp-white__0709828_pe727111_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/navlinge-led-work-lamp-white__1384279_ph199258_s5.jpg?f=xl'
        ],
        categoryId: 3,
        type: 'ACCESSORIES',
        color: 'White',
        isBestSeller: false,
        sizes: ['40cm x 15cm x 25cm']
    },
    {
        name: 'Cotton Bed Sheet Set',
        description: 'A soft cotton bed sheet set with a modern design.',
        price: 50.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/bergpalm-duvet-cover-and-2-pillowcases-green-stripe__0720377_pe732520_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/bergpalm-duvet-cover-and-2-pillowcases-green-stripe__1356047_pe953272_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/bergpalm-duvet-cover-and-2-pillowcases-green-stripe__1356048_pe953273_s5.jpg?f=xl'
        ],
        categoryId: 5,
        type: 'ACCESSORIES',
        color: 'Grey & White',
        isBestSeller: false,
        sizes: ['King size']
    },
    {
        name: 'Metal Desk Organizer',
        description: 'A sleek metal organizer to keep your desk neat and tidy.',
        price: 35.0,
        currency: 'USD',
        images: [
            'https://www.ikea.com/es/en/images/products/pahl-desk-white__0735887_pe740242_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/pahl-desk-white__0879081_pe646893_s5.jpg?f=xl',
            'https://www.ikea.com/es/en/images/products/pahl-desk-white__0879076_pe608685_s5.jpg?f=xl'
        ],
        categoryId: 3,
        type: 'ACCESSORIES',
        color: 'Silver',
        isBestSeller: false,
        sizes: ['30cm x 15cm x 20cm']
    },
]

// IMAGES: https://www.ikea.com