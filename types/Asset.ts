export interface Asset {
    symbol: string;
    name: string;
    type: string;
}

export interface Crypto extends Asset {}

export interface Stock extends Asset {}
