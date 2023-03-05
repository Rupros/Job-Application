import { ListHeader } from '../parts/header';
import "../css/productList.scss"
import Items from '../parts/item';

function ListPage() {
  return (
    <>
      <ListHeader/>

      <div className='center'>
        <div className='verticalBox'>
          <div className='grid'>
            <Items/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPage;
