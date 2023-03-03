import { FormValidators } from "../types/FormTypes";

const validators: FormValidators = {
    "dvd": ValidateDvdForm(),
    "book": ValidateBookForm(),
    "furniture": ValidateFurnitureForm(),
}

function ValidateBasics() {
    const sku = (document.getElementById("#sku") as HTMLInputElement).value;
    const name = (document.getElementById("#name") as HTMLInputElement).value;
    const price = (document.getElementById("#price") as HTMLInputElement).value;

    if (sku == "" || name == "" || price == "") {
        console.log("no data")
        return false;
    }

    return true;
}

function ValidateDvdForm() {
    const size = (document.getElementById("#size") as HTMLInputElement);
    if(size == null) return false;
    
    if (size.value === "") {
        console.log("invalid data type")
        return false;
    }

    return true;
}

function ValidateBookForm() {
    const weight = (document.getElementById("#weight") as HTMLInputElement);
    if(weight == null) return false;
    
    if (weight.value === "") {
        console.log("invalid data type")
        return false;
    }

    return true;
}

function ValidateFurnitureForm() {
    const width = (document.getElementById("#width") as HTMLInputElement);
    const height = (document.getElementById("#height") as HTMLInputElement);
    const length = (document.getElementById("#length") as HTMLInputElement);
    if(width == null) return false;
    
    if (width.value === "" || height.value === "" || length.value === ""){
        console.log("invalid data type")
        return false;
    }

    return true;
}

function Validate() {
    if(!ValidateBasics()) return false;

    const dropdown = document.getElementById("#productType") as HTMLSelectElement;
    console.log(dropdown.value)
    const validated = validators[dropdown.value];
    console.log(validated)
    return validated;
}

export default Validate;