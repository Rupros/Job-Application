import React, { useState } from 'react';
import "../css/productAdd.scss"
import { FormTypes } from '../types/FormTypes';

const forms: FormTypes = {
    "dvd": DvdForm(),
    "book": BookForm(),
    "furniture": FurnitureForm(),
}

function InputFields(){
    return (
        <div className='box'>
            <div>
            <label>SKU</label>
            <input type="text" id='#sku'/>
            </div>

            <div>
            <label>Name</label>
            <input type="text" id='#name'/>
            </div>

            <div>
            <label>Price ($)</label>
            <input type="number" id='#price'/>
            </div>
        </div>
    );
}

function DvdForm() {
    return (
        <> dvd
        </>
    );
}

function BookForm() {
    return (
        <> book
        </>
    );
}

function FurnitureForm() {
    return (
        <> furniture
        </>
    );
}

function FormType() {
    const [formType, setFormType] = useState<string>("dvd") ;

    return (
        <>
            <div className='box'>
                <label>Type:</label>
    
                <select name="types" id="#productType" onChange={(e) => setFormType(e.target.value)}>
                    <option value="dvd">DVD</option>
                    <option value="book">Book</option>
                    <option value="furniture">Furniture</option>
                </select> 
            </div>

            <div className='box'>
                {forms[formType]}
            </div>
        </>
    );
}

function Form() {
    return (
        <>
            <form id='#product_form' action='/add_item.php'>
                <InputFields/>
                <FormType/>
            </form>
        </>
    );
}

export default Form;
