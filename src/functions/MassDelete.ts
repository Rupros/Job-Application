import axios from "axios";
import config from "../config";

function MassDelete() {
    const url = `${config.url}/php-react/Job_Application/mass_delete.php`;
      
    axios.get(url)
    .then((response) => {
        console.log(response.data)
        window.location.reload();
    }, (error) =>  {
        alert(`Error deleting data! \n ${error}`);
    });
}

export default MassDelete;