import { ChangeEvent, useState } from 'react';
import "../css/productAdd.scss"
import { FormTypes, Values } from '../types/FormTypes';
import ValidateForm from '../functions/Validators';
import axios from 'axios';
import ChangeRoute from '../functions/RouteChanger';
import config from '../config';

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
            <input name='price' type="text" id='price' onChange={handleChange}/>
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
            <input name='size' type="text" id='size' onChange={handleChange}/>
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
            <input name='weight' type="text" id='weight' onChange={handleChange}/>
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
            <input name='height' type="text" id='height' onChange={handleChange}/>
        </div>

        <div>
            <label>Width (CM)</label>
            <input name='width' type="text" id='width' onChange={handleChange}/>
        </div>

        <div>
            <label>Length (CM)</label>
            <input name='length' type="text" id='length' onChange={handleChange}/>
        </div>
        </>
    );
}

function Form() {
    const  returnToList = ChangeRoute(config.listPath);

    const [error, setError] = useState("");

    const initial: Values = {
        "sku": "", "name": "", "price": "",
        "size": "",
        "weight": "",
        "height": "", "width": "", "length": ""
    }

    const [values, setValues] = useState(initial);
    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setValues({...values, [target.name]: target.value})
    }

    const [formType, setFormType] = useState<string>("dvd") ;

    const submit = document.getElementById("submit") as HTMLButtonElement;
    if(submit) {
        submit.onclick = () => {
            if (!ValidateForm(formType, values, setError)) return;
            setError("");

            handleSubmit();
            returnToList();
        }
    }

    const handleSubmit = () => {
        const url = `http://localhost/php-react/Job_Application/add_item.php`;
        const formData = GetFormData(values, formType);
        
        axios.post(url, formData)
        .then((res) => {
            console.log(res)
        }, (error) =>  {
            alert(`Error submitting form! \n ${error}`);
        });
    }

    return (
        <>
            <form id='product_form'>
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

function GetFormData(values: Values, formType: string) {
    const formData = {
        type: formType,
        sku: values.sku, name: values.name, price: values.price,
        size: values.size,
        weight: values.weight,
        height: values.height, width: values.width, length: values.length
    }

    return formData;
}

export default Form;
