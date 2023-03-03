import '../css/header.scss';
import ChangeRoute from '../functions/RouteChanger';
import config from '../config';

function ListInfo() {
    return (
    <>
        <h1>Product List</h1>

        <div className='buttonList'>
       
            <button onClick={ChangeRoute(config.addPath)}>
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
            <button onClick={SubmitForm}>
                SAVE
            </button>

            <button onClick={ChangeRoute(config.listPath)}>
                CANCEL
            </button>
        </div>
    </>
    );
}

function SubmitForm(){
    const form = document.getElementById("#product_form") as HTMLFormElement;
    form.submit();
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