import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/message-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }

    return (<Dialogs messagesPage={state} updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} />)
}

export default DialogsContainer;