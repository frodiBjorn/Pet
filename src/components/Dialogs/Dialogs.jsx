import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogItem';


let newMessageElement = React.createRef()
let addMessage = () => {
    let messageText = newMessageElement.current.value
    alert(messageText) 
}




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(
        (d) => <DialogItem name={d.name} id={d.id} />
    )

    let messagesElements = props.state.messages.map(
        (m) => <Message message={m.message} />
    )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea  ref = {newMessageElement} name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;