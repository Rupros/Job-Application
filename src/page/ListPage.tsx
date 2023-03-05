import React from 'react';
import { ListHeader } from '../parts/header';
import "../css/productList.scss"
import Item from '../parts/item';
import axios from 'axios';

function ListPage() {

  const getItems = () => {
      const url = `http://localhost/php-react/Job_Application/get_items.php`;
      
      axios.get(url)
      .then((response) => {
          console.log(response.data)
      }, (error) =>  {
          alert(`Error getting data! \n ${error}`);
      });
  }

  getItems();

  return (
    <>
      <ListHeader/>

      <div className='center'>
        <div className='verticalBox'>
          <div className='grid'>

          </div>
        </div>
      </div>
    </>
  );
}

export default ListPage;
