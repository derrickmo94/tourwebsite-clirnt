export interface Tour {
    id: number;
    name: string;
    image: string;
    destination: string;
    category: string;
    description: string;
    discount: number;
    price: number;
    status: boolean;
}

export interface Destination {
    id: number;
    name: string;
    image: string;
    tag: string;
    hype: SVGStringList; 
    description: string;
    status: boolean;
}

export interface TourCategory {
    id: number;
    name: string;
    image: string;
    description: String;
    status: boolean;
}

export interface Settings {
    company: String;
    description: string;
    metaTitle: string;
    metaDecsription: string;
    metaKeywords: string;
    logo: string;
    icon: string;
    address: string;
    email: string;
    telephone: number;
    location: string;
    status: boolean;
}

export interface Customer {
    id: number;
    fullname: string;
    email: string;
    telephone: number;
    password: string;
    status: boolean;

}

export interface Booking{
    id: number;
    bookingDate: Date
}

export interface BlogCategory {
    id: number;
    name: string;
    image: string;
    description: string;
    status: boolean;
}

export interface BlogArticle {
    id: number;
    title: string;
    image: string;
    category: number;
    publicationDate: Date;
    intro: string;
    articleText: string;
    status:boolean
}