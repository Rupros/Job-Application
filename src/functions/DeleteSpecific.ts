import axios from "axios";

function DeleteSpecifc(sku: string) {
    const url = `http://localhost/php-react/Job_Application/delete_specific.php`;
    
    const deleteSpecific = () => {
        axios.post(url, {sku})
        .then((response) => {
            console.log(response.data)
        }, (error) =>  {
            alert(`Error deleting data! \n ${error}`);
        });
    }

    return deleteSpecific;
}

export default DeleteSpecifc;