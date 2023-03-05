import axios from "axios";

function DeleteSpecifc(sku: string) {
    const url = `http://localhost/php-react/Job_Application/delete_specific.php`;
      
    axios.post(url, {sku})
    .then((response) => {
        console.log(response.data)
    }, (error) =>  {
        alert(`Error deleting data! \n ${error}`);
    });
}

export default DeleteSpecifc;