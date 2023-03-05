import axios from "axios";

function MassDelete() {
    const url = `http://localhost/php-react/Job_Application/mass_delete.php`;
      
    axios.get(url)
    .then((response) => {
        console.log(response.data)
    }, (error) =>  {
        alert(`Error deleting data! \n ${error}`);
    });
}

export default MassDelete;