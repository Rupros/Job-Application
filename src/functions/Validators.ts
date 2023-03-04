import { FormValidators, Values } from "../types/FormTypes";

export default function ValidateForm(form: string, values: Values, setError: any) {
    let validated =  true;

    if (!ValidatedBasics(setError)) validated = false;
    if (!GetValidator(form, setError)) validated = false;

    return validated;
}

function GetValidator(form: string, setError: any) {

    const validators: FormValidators = {
        "dvd": ValidatedDvd(form, setError),
        "book": ValidatedBook(form, setError),
        "furniture": ValidatedFurniture(form, setError),
    }
    
    return validators[form];
}

function ValidatedBasics(setError: any) {
    let basicsValidated = true;

    const sku = document.getElementById("sku") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;
    const price = document.getElementById("price") as HTMLInputElement;

    console.log(price.value)

    if (sku.value == "") {
        setError("Please fill in the sku information");
        basicsValidated = false;
        SetValidatedField(sku, false)
    }
    else {
        SetValidatedField(sku, true)
    }

    if (name.value == "") {
        setError("Please fill in the name information");
        basicsValidated = false;
        SetValidatedField(name, false)
    }
    else {
        SetValidatedField(name, true)
    }

    if (price.value == "") {
        setError("Please fill in the price information");
        basicsValidated = false;
        SetValidatedField(price, false)
    }
    else if (!IsNumber(price.value)) {
        setError("Please fill the price with only numbers");
        basicsValidated = false;
        SetValidatedField(price, false)
    }
    else {
        SetValidatedField(price, true)
    }

    return basicsValidated;
}

function ValidatedDvd(form: string, setError: any) {
    if(form !== "dvd") return true;

    const size = document.getElementById("size") as HTMLInputElement;

    if (size.value == "") {
        SetValidatedField(size, false);

        setError("Please fill in the dvd size field");
        return false;
    }
    else if (!IsNumber(size.value)) {
        SetValidatedField(size, false);

        setError("Please fill the size with only numbers");
        return false;
    }

    
    SetValidatedField(size, true);

    return true;
}

function ValidatedBook(form: string, setError: any) {
    if(form !== "book") return true;

    const weight = document.getElementById("weight") as HTMLInputElement;

    if (weight.value == "") {
        SetValidatedField(weight, false);

        setError("Please fill in the book weight field");
        return false;
    }
    else if (!IsNumber(weight.value)) {
        SetValidatedField(weight, false);

        setError("Please fill the weight with only numbers");
        return false;
    }

    
    SetValidatedField(weight, true);

    return true;
}

function ValidatedFurniture(form: string, setError: any) {
    if(form !== "furniture") return true;

    let basicsValidated = true;

    const height = document.getElementById("height") as HTMLInputElement;
    const width = document.getElementById("width") as HTMLInputElement;
    const length = document.getElementById("length") as HTMLInputElement;

    if (height.value == "") {
        setError("Please fill in the height");
        basicsValidated = false;
        SetValidatedField(height, false)
    }
    else if (!IsNumber(height.value)) {
        setError("Please fill the height with only numbers");
        basicsValidated = false;
        SetValidatedField(height, false)
    }
    else {
        SetValidatedField(height, true)
    }
       

    if (width.value == "") {
        setError("Please fill in the width");
        basicsValidated = false;
        SetValidatedField(width, false)
    }
    else if (!IsNumber(width.value)) {
        setError("Please fill the width with only numbers");
        basicsValidated = false;
        SetValidatedField(width, false)
    }
    else {
        SetValidatedField(width, true)
    }
       

    if (length.value == "") {
        setError("Please fill in the length");
        basicsValidated = false;
        SetValidatedField(length, false)
    }
    else if (!IsNumber(length.value)) {
        setError("Please fill the length with only numbers");
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

function IsNumber (value: string){
    return /^\d+$/.test(value);
}