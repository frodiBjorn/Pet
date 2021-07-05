import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogs = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Maskim" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Svyatoslav" },
    { id: 5, name: "Valeria" },
    { id: 6, name: "John" },
]
let messages = [
    { id: 1, message: "Hi" },
    { id: 1, message: "How are you?" },
    { id: 1, message: "What is your name?" },

]

let dialogsElements = dialogs.map(
    (d) => <DialogItem name={d.name} id={d.id} />
)

let messagesElements = messages.map(
    (m) => <Message message={m.message} />
)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;