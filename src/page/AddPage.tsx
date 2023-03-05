import {AddHeader} from '../parts/header';
import "../css/productAdd.scss"
import Form from '../parts/form';

function AddPage() {
  return (
    <>
      <AddHeader/>

      <div className='center'>
        <div className='verticalBox'>
          <Form/>
        </div>
      </div>

    </>
  );
}

export default AddPage;
