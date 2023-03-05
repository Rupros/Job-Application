import '../css/header.scss';
import ChangeRoute from '../functions/RouteChanger';
import config from '../config';
import MassDelete from '../functions/MassDelete';

function ListInfo() {
    return (
    <>
        <h1>Product List</h1>

        <div className='buttonList'>
       
            <button onClick={ChangeRoute(config.addPath)}>
                ADD
            </button>

            <button onClick={MassDelete}>
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
            <button id='submit'>
                SAVE
            </button>

            <button onClick={ChangeRoute(config.listPath)}>
                CANCEL
            </button>
        </div>
    </>
    );
}

function Header(listView : boolean) {
  return (
    <div className='headerSpacing'>
        <div className='header'>
            <div className='verticalBox'>
                <div className='horizontalBox'>
                
                    { listView ? <ListInfo/> : <AddInfo/> }

                </div>
                
                <div className='line'></div>
            </div>
        </div>
    </div>
  );
}

export function ListHeader() {
    return (
        Header(true)
    )
}

export function AddHeader() {
    return (
        Header(false)
    )
}