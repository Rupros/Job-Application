import React, { ChangeEvent, useState } from 'react';
import "../css/productAdd.scss"
import { FormTypes, Values } from '../types/FormTypes';
import ValidateForm from '../functions/Validators';


function GetForm(form: string, handleChange: any) {
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
            <input name='sku' type="text" id='sku' onChange={handleChange}/>
            </div>

            <div>
            <label>Name</label>
            <input name='name' type="text" id='name' onChange={handleChange}/>
            </div>

            <div>
            <label>Price ($)</label>
            <input name='price' type="number" id='price' onChange={handleChange}/>
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
            <input name='size' type="number" id='size' onChange={handleChange}/>
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
            <input name='weight' type="number" id='weight' onChange={handleChange}/>
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
            <input name='height' type="number" id='height' onChange={handleChange}/>
        </div>

        <div>
            <label>Width (CM)</label>
            <input name='width' type="number" id='width' onChange={handleChange}/>
        </div>

        <div>
            <label>Length (CM)</label>
            <input name='length' type="number" id='length' onChange={handleChange}/>
        </div>
        </>
    );
}

function Form() {
    const [error, setError] = useState("");

    const initial: Values = {
        "sku": null, "name": null, "price": null,
        "size": null,
        "weight": null,
        "height": null, "width": null, "length": null}

    const [values, setValues] = useState(initial);
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setValues({...values, [target.name]: target.value.length > 0 ? target : null})
    }

    const [formType, setFormType] = useState<string>("dvd") ;

    const submit = document.getElementById("submit") as HTMLButtonElement;
    if(submit) {
        submit.onclick = () => {
            if (!ValidateForm(formType, values, setError)) return;
            setError("");
            
            console.log("validated");
            const form = document.getElementById("product_form") as HTMLFormElement;
            form.submit();
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    }

    return (
        <>
            <form method='POST' id='product_form' action={`add_${formType}.php`} onSubmit={(e) => handleSubmit(e)}>
                <InputFields handleChange={handleChange}/>

                <div className='box'>
                    <label>Type:</label>
        
                    <select name="type" id="productType" onChange={(e) => setFormType(e.target.value)}>
                        <option value="dvd">DVD</option>
                        <option value="book">Book</option>
                        <option value="furniture">Furniture</option>
                    </select> 
                </div>

                <div className='box'>
                    { GetForm(formType, handleChange) }
                </div>

                <div className='errorMsg'>
                    {error}
                </div>
            </form>
        </>
    );
}

export default Form;
