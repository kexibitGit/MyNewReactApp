import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/message-reducer';


const Dialogs = (props) => {


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextCreator(text))
    }

    let dialogsItems = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageItems = props.messagesData.map(m => <Message message={m.message} />)
    let newMessageText = props.state.newMessageText;
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