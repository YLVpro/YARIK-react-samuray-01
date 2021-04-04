import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messagesPage.map( m => <Message message={m.message}/> );

    let dialogsElement = React.createRef();

    let add = () => {
        let text = dialogsElements.current.value;
        alert(text);
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div className={s.postsBlock}></div>
            <h3> </h3>
                <div>
                    <textarea ref={dialogsElements}></textarea>
                </div>

                <div>
                    <button onClick={ add }>Add</button>
                </div>
            </div >
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;