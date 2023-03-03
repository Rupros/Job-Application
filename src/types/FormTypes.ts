export interface FormTypes {
    [key: string]: JSX.Element;
}

export interface FormValidators {
    [key: string]: boolean;
}

export interface FormValues {
    sku: string;
    name: string;
    price: number;

    size: number;

    weight: number;

    length: number;
    width: number;
    height: number;
}