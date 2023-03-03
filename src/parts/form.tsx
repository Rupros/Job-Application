import React, { ChangeEvent, useState } from 'react';
import "../css/productAdd.scss"
import { FormTypes } from '../types/FormTypes';
import { FormValues } from '../types/FormTypes';

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
            <input name='sku' type="text" id='#sku'/>
            </div>

            <div>
            <label>Name</label>
            <input name='name' type="text" id='#name'/>
            </div>

            <div>
            <label>Price ($)</label>
            <input name='price' type="number" id='#price'/>
            </div>
        </div>
    );
}

function DvdForm() {
    return (
        <>
        <div>
            Please provide DVD size in MB
        </div>

        <div>
            <label>Size (MB)</label>
            <input name='size' type="number" id='#size'/>
        </div>
        </>
    );
}

function BookForm() {
    return (
        <>
        <div>
            Please provide weight in KG
        </div>

        <div>
            <label>Weight (KG)</label>
            <input name='weight' type="number" id='#weight'/>
        </div>
        </>
    );
}

function FurnitureForm() {
    return (
        <>
        <div>
            Please provide furniture's height, width and length in CM
        </div>

        <div>
            <label>Height (CM)</label>
            <input name='height' type="number" id='#height'/>
        </div>

        <div>
            <label>Width (CM)</label>
            <input name='width' type="number" id='#width'/>
        </div>

        <div>
            <label>Length (CM)</label>
            <input name='length' type="number" id='#length'/>
        </div>
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
                { forms[formType] }
            </div>
        </>
    );
}

function Form() {
    return (
        <>
            <form id='#product_form' onSubmit={handleSubmit}>
                <InputFields/>
                <FormType/>
            </form>
        </>
    );
}

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
}

export default Form;
