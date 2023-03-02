import React from 'react';
import {AddHeader} from '../parts/header';
import "../css/productAdd.scss"

function AddPage() {
  return (
    <>
      <AddHeader/>

      <div className='center'>
        <div className='verticalBox'>
          <form id='#product_form'>
            <div className='inputFields'>
              <div>
                <label>SKU</label>
                <input type="text" id='#sku'/>
              </div>

              <div>
                <label>Name</label>
                <input type="text" id='#name'/>
              </div>

              <div>
                <label>Price ($)</label>
                <input type="text" id='#price'/>
              </div>
            </div>
          </form>
        </div>
      </div>


    </>
  );
}

export default AddPage;
