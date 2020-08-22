import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.messagesPage;
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (text) => {
        let newText = text.target.value;
        props.updateNewMessageText(newText)
    }

    let dialogsItems = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageItems = state.messagesData.map(m => <Message message={m.message} />)
    let newMessageText = state.newMessageText;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                <div>{messageItems}</div>
                <div>
                    <div> <textarea onChange={onNewMessageChange} value={newMessageText} placeholder='Enter your message'></textarea> </div>
                    <div> <button onClick={onSendMessageClick}>Send</button> </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;