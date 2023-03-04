export interface FormTypes {
    [key: string]: JSX.Element;
}

export interface FormValidators {
    [key: string]: boolean;
}

export interface Values {
        "sku":string, "name": string, "price": string,
        "size": string,
        "weight": string,
        "height": string, "width": string, "length": string
}