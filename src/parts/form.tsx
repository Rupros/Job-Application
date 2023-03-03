import React, { ChangeEvent, useState } from 'react';
import "../css/productAdd.scss"
import { FormTypes } from '../types/FormTypes';


function GetForm(form: string, handleChange: void) {
    const forms: FormTypes = {
        "dvd": <DvdForm handleChange={handleChange}/>,
        "book": <BookForm handleChange={handleChange}/>,
        "furniture": <FurnitureForm handleChange={handleChange}/>,
    }

    return forms[form];
}

function InputFields({handleChange}: { handleChange: any }) {
    return (
        <div className='box'>
            <div>
            <label>SKU</label>
            <input name='sku' type="text" id='#sku' onChange={handleChange}/>
            </div>

            <div>
            <label>Name</label>
            <input name='name' type="text" id='#name' onChange={handleChange}/>
            </div>

            <div>
            <label>Price ($)</label>
            <input name='price' type="number" id='#price' onChange={handleChange}/>
            </div>
        </div>
    );
}

function DvdForm({handleChange}: { handleChange: any }) {
    return (
        <>
        <div>
            Please provide DVD size in MB
        </div>

        <div>
            <label>Size (MB)</label>
            <input name='size' type="number" id='#size' onChange={handleChange}/>
        </div>
        </>
    );
}

function BookForm({handleChange}: { handleChange: any }) {
    return (
        <>
        <div>
            Please provide weight in KG
        </div>

        <div>
            <label>Weight (KG)</label>
            <input name='weight' type="number" id='#weight' onChange={handleChange}/>
        </div>
        </>
    );
}

function FurnitureForm({handleChange}: { handleChange: any }) {
    return (
        <>
        <div>
            Please provide furniture's height, width and length in CM
        </div>

        <div>
            <label>Height (CM)</label>
            <input name='height' type="number" id='#height' onChange={handleChange}/>
        </div>

        <div>
            <label>Width (CM)</label>
            <input name='width' type="number" id='#width' onChange={handleChange}/>
        </div>

        <div>
            <label>Length (CM)</label>
            <input name='length' type="number" id='#length' onChange={handleChange}/>
        </div>
        </>
    );
}

function FormType({handleChange}: { handleChange: any }) {
    const [formType, setFormType] = useState<string>("dvd") ;

    return (
        <>
            <div className='box'>
                <label>Type:</label>
    
                <select name="type" id="#productType" onChange={(e) => setFormType(e.target.value)}>
                    <option value="dvd">DVD</option>
                    <option value="book">Book</option>
                    <option value="furniture">Furniture</option>
                </select> 
            </div>

            <div className='box'>
                { GetForm(formType, handleChange) }
            </div>
        </>
    );
}

function Form() {
    const initial = {
        "sku": '', "name": '', "price": '',
        "size": '',
        "weight": '',
        "height": '', "width": '', "length": ''}

    const [values, setValues] = useState(initial);
    const handleChange = (e: ChangeEvent) => {
        const {name, value} = e.target as HTMLInputElement;
        setValues({...values, [name]: value})
        console.log(values);
    }

    return (
        <>
            <form action="../../backend/add_item.php" id='#product_form' onSubmit={handleSubmit}>
                <InputFields handleChange={handleChange}/>
                <FormType handleChange={handleChange}/>
            </form>
        </>
    );
}

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
}

export default Form;
