import { useEffect, useState } from 'react';
import "../css/item.scss"
import DeleteSpecifc from '../functions/DeleteSpecific';
import axios from 'axios';
import GetInfo from '../functions/AdditionalInfo';

function Item({info}: {info: any}) {
  return (
    <>
      <div className='item-box'>
        <div className='delete-checkbox' onClick={DeleteSpecifc(info["sku"])}/>
          <div className='info'>
            {`SKU: ${info["sku"]}\n`}
            <br/>
            {`NAME: ${info["name"]}\n`}
            <br/>
            {`PRICE: ${info["price"]}\n`}
            <br/>
            {GetInfo(info)}
          </div>
      </div>
    </>
  );
}

function Items() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const url = `http://localhost/php-react/Job_Application/get_items.php`;
    
    axios.get(url)
    .then((response) => {
      setItems(response.data)
    }, (error) =>  {
        alert(`Error getting data! \n ${error}`);
    });
  })

  return (
    <>
    {items.map((info) => (
      <Item info={info}/>
    ))}
    </>
  );
}

export default Items;
