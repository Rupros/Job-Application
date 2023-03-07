import axios from "axios";
import config from "../config";

function DeleteSpecifc(sku: string) {
    const url = `${config.url}/php-react/Job_Application/delete_specific.php`;
    
    const deleteSpecific = () => {
        axios.post(url, {sku})
        .then((response) => {
            console.log(response.data)
            window.location.reload();
        }, (error) =>  {
            alert(`Error deleting data! \n ${error}`);
        });
    }

    return deleteSpecific;
}

export default DeleteSpecifc;