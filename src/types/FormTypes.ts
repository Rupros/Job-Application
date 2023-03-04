export interface FormTypes {
    [key: string]: JSX.Element;
}

export interface FormValidators {
    [key: string]: boolean;
}

export interface Values {
        "sku": HTMLInputElement | null, "name": HTMLInputElement | null, "price": HTMLInputElement | null,
        "size": HTMLInputElement | null,
        "weight": HTMLInputElement | null,
        "height": HTMLInputElement | null, "width": HTMLInputElement | null, "length": HTMLInputElement | null
}