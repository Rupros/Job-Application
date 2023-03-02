import React from 'react';
import '../css/productList.scss';
import ChangeRoute from '../functions/RouteChanger';

function ListInfo() {
    return (
        <>
        <h1>Product List</h1>

        <div className='buttonList'>
       
            <button onClick={ChangeRoute("/add-products")}>
                ADD
            </button>

            <button>
                MASS DELETE
            </button>
        </div>
        </>
    );
}

function AddInfo() {
    return (
        <>
        <h1>Product Add</h1>

        <div className='buttonList'>
            <button>
                SAVE
            </button>
            
            <button>
                CANCEL
            </button>
        </div>
        </>
    );
}

function Header(listView : boolean) {
  return (
    <div className='header'>
      <div className='verticalBox'>
        <div className='horizontalBox'>
        
            { listView ? <ListInfo/> : <AddInfo/> }

        </div>
        <div className='line'></div>
      </div>
    </div>
  );
}

export default Header;
