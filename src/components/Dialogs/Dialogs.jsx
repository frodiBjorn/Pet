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
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Ivan" id="1" />
                <DialogItem name="Maskim" id="2" />
                <DialogItem name="Svyatoslav" id="3" />
                <DialogItem name="Valeria" id="4" />
                <DialogItem name="Sveta" id="5" />
                <DialogItem name="John" id="6" />
            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="What is your name?" />
            </div>
        </div>
    )
}

export default Dialogs;