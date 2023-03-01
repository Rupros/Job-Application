import React from 'react';
import '../css/productList.scss';

function ListPage() {
  return (
    <div className='header'>
      <div className='verticalBox'>
        <div className='horizontalBox'>
          <h1>Product List</h1>

          <div className='buttonList'>
            <div>ADD</div>
            <div>MASS DELETE</div>
          </div>
        </div>

        <div className='line'></div>
      </div>
    </div>
  );
}

export default ListPage;
