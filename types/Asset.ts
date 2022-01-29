export interface Asset {
    id: string;
    name: string;
    symbol: string;
}

export interface Crypto extends Asset {}

export interface Stock extends Asset {}
