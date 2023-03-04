import { FormValidators, Values } from "../types/FormTypes";

export default function ValidateForm(form: string, values: Values, setError: any) {
    let validated =  true;

    if (!ValidatedBasics(values, setError)) validated = false;
    if (!GetValidator(form, values, setError)) validated = false;

    return validated;
}

function GetValidator(form: string, values: Values, setError: any) {

    const validators: FormValidators = {
        "dvd": ValidatedDvd(form, values, setError),
        "book": ValidatedBook(form, values, setError),
        "furniture": ValidatedFurniture(form, values, setError),
    }
    
    return validators[form];
}

function ValidatedBasics(values: Values, setError: any) {
    let basicsValidated = true;

    const sku = document.getElementById("sku") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;
    const price = document.getElementById("price") as HTMLInputElement;

    if (values.sku == null) {
        setError("Please fill in the sku information");
        basicsValidated = false;
        SetValidatedField(sku, false)
    }
    else {
        SetValidatedField(sku, true)
    }

    if (values.name == null) {
        setError("Please fill in the name information");
        basicsValidated = false;
        SetValidatedField(name, false)
    }
    else {
        SetValidatedField(name, true)
    }

    if (values.price == null) {
        setError("Please fill in the price information");
        basicsValidated = false;
        SetValidatedField(price, false)
    }
    else if (values.price.value == "") {
        setError("Please fill in correct type");
        basicsValidated = false;
        SetValidatedField(price, false)
    }
    else {
        SetValidatedField(price, true)
    }

    return basicsValidated;
}

function ValidatedDvd(form: string, values: Values, setError: any) {
    if(form !== "dvd") return true;

    const size = document.getElementById("size") as HTMLInputElement;

    if (values.size == null) {
        SetValidatedField(size, false);

        setError("Please fill in the dvd size field");
        return false;
    }

    if (values.size.value == "") {
        SetValidatedField(size, false);

        setError("Please fill in correct type");
        return false;
    }

    
    SetValidatedField(size, true);

    return true;
}

function ValidatedBook(form: string, values: Values, setError: any) {
    if(form !== "book") return true;

    const weight = document.getElementById("weight") as HTMLInputElement;

    if (values.weight == null) {
        SetValidatedField(weight, false);

        setError("Please fill in the dvd size field");
        return false;
    }

    if (values.weight.value == "") {
        SetValidatedField(weight, false);

        setError("Please fill in correct type");
        return false;
    }

    
    SetValidatedField(weight, true);

    return true;
}

function ValidatedFurniture(form: string, values: Values, setError: any) {
    if(form !== "furniture") return true;

    let basicsValidated = true;

    const height = document.getElementById("height") as HTMLInputElement;
    const width = document.getElementById("width") as HTMLInputElement;
    const length = document.getElementById("length") as HTMLInputElement;

    if (values.height == null) {
        setError("Please fill in the dimensions");
        basicsValidated = false;
        SetValidatedField(height, false)
    }
    else {
        SetValidatedField(height, true)
    }

    if (values.width == null) {
        setError("Please fill in the dimensions");
        basicsValidated = false;
        SetValidatedField(width, false)
    }
    else {
        SetValidatedField(width, true)
    }

    if (values.length == null) {
        setError("Please fill in the dimensions");
        basicsValidated = false;
        SetValidatedField(length, false)
    }
    else if (values.length.value == "") {
        setError("Please fill in the dimensions");
        basicsValidated = false;
        SetValidatedField(length, false)
    }
    else {
        SetValidatedField(length, true)
    }

    return basicsValidated;
}

function SetValidatedField (field: HTMLElement, validated: boolean) {
    if(validated) {
        field.style.borderColor = "black";
    }
    else {
        field.style.borderColor = "red";
    }
}