interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    zipCode: string;
    city: string;
    region: string;
    country: string;
    createdAt: string;
}

export const users: IUser[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        phone: '+34 612 345 678',
        address: 'Calle Gran Vía 1, 2B',
        zipCode: '28013',
        city: 'Madrid',
        region: 'Madrid',
        country: 'Spain',
        createdAt: '2025-02-11T17:05:13.000Z',
    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        password: 'password456',
        phone: '+34 612 345 679',
        address: 'Avenida de la Constitución 25, 3A',
        zipCode: '41004',
        city: 'Seville',
        region: 'Andalusia',
        country: 'Spain',
        createdAt: '2025-02-11T17:05:13.000Z',
    },
    {
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael.johnson@example.com',
        password: 'password789',
        phone: '+34 612 345 680',
        address: 'Carrer de Pau Claris 17, 1C',
        zipCode: '08010',
        city: 'Barcelona',
        region: 'Catalonia',
        country: 'Spain',
        createdAt: '2025-02-11T17:05:13.000Z',
    },
    {
        firstName: 'Carlos',
        lastName: 'Garcia',
        email: 'carlos.garcia@example.com',
        password: 'password101',
        phone: '+34 612 345 681',
        address: 'Calle de la Paz 4, 5D',
        zipCode: '15001',
        city: 'A Coruña',
        region: 'Galicia',
        country: 'Spain',
        createdAt: '2025-02-11T17:05:13.000Z',
    },
    {
        firstName: 'Ana',
        lastName: 'Martinez',
        email: 'ana.martinez@example.com',
        password: 'password202',
        phone: '+34 612 345 682',
        address: 'Plaza Mayor 3, 4E',
        zipCode: '13001',
        city: 'Ciudad Real',
        region: 'Castilla-La Mancha',
        country: 'Spain',
        createdAt: '2025-02-11T17:05:13.000Z',
    }
];
