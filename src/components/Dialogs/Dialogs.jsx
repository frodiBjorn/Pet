import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className = {s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className = {s.dialog + " " + s.active}>
                    Ivan
                </div>
                <div className = {s.dialog}>
                    Maskim
                </div>
                <div className = {s.dialog}>
                    Svyatoslav
                </div>
                <div className = {s.dialog}>
                    Valeria
                </div>
                <div className = {s.dialog}>
                    Sveta
                </div>
                <div className = {s.dialog}>
                    John
                </div>

            </div>
            <div className = {s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What is your name?</div>
            </div>
        </div>
    )
}

export default Dialogs;