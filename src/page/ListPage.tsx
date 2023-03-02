import React from 'react';
import { ListHeader } from '../parts/header';
import "../css/productList.scss"
import Item from '../parts/item';

function ListPage() {
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
