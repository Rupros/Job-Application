import { FormValidators, Values } from "../types/FormTypes";

export function GetValidator(form: string, values: Values) {

    const validators: FormValidators = {
        "dvd": ValidatedDvd(values),
        "book": ValidatedBook(values),
        "furniture": ValidatedFurniture(values),
    }

    return validators[form];
}

export function ValidatedBasics(values: Values) {
    if (values.sku == "" || values.name == "") {
        console.log("Please fill in the fields");
        return false;
    }

    if (values.price == ""){
        console.log("Please fill in correct type");
        return false;
    }

    return true;
}

function ValidatedDvd(values: Values) {
    if (values.size == "") {
        console.log("Please fill in correct type");
        return false;
    }

    return true;
}

function ValidatedBook(values: Values) {
    if (values.weight == "") {
        console.log("Please fill in correct type");
        return false;
    }

    return true;
}

function ValidatedFurniture(values: Values) {
    if (values.height == "" || values.width == "" || values.length == "") {
        console.log("Please fill in correct type");
        return false;
    }

    return true;
}