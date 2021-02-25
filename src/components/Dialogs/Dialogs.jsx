import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Vasya' },
        { id: 2, name: 'Petya' },
        { id: 3, name: 'Kolya' },
        { id: 4, name: 'Sanya' },
        { id: 5, name: 'Vetal' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'It-man' },
        { id: 3, message: 'USA' },
        { id: 4, message: 'USA' },
        { id: 5, message: 'USA' }
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messages.map(message => <Message message={message.message} />);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>

                {dialogsElements}
            </div >
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;