import React from 'react';
import "../css/item.scss"

function Item(info: JSON) {
  return (
    <>
      <div className='box'>
        <div className='delete-checkbox'/>

        <div className='info'/>
      </div>
    </>
  );
}

export default Item;
