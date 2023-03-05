import "../css/productAdd.scss"
import { FormTypes } from '../types/FormTypes';

function GetInfo(info: any) {
    const forms: FormTypes = {
        "dvd": <DvdForm info={info}/>,
        "book": <BookForm info={info}/>,
        "furniture": <FurnitureForm info={info}/>,
    }
  
    return forms[info["type"]];
}

function DvdForm({info}: { info: any }) {
    return (
        <>
            {`Size (MB): ${info["size"]}`}
        </>
    );
}

function BookForm({info}: { info: any }) {
    return (
        <>
            {`Weight (KG): ${info["weight"]}`}
        </>
    );
}

function FurnitureForm({info}: { info: any }) {
    return (
        <>
             {`Dimensions: ${info["width"]}x${info["length"]}x${info["height"]}`}
        </>
    );
}



export default GetInfo;