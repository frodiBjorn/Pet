const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAG';
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 4 },
                { id: 2, message: "It is my first post", likesCount: 12 },
                { id: 3, message: "My name is Ivan", likesCount: 2 },
            ],
            newPostText: "Введите текст"

        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Ivan" },
                { id: 2, name: "Maskim" },
                { id: 3, name: "Ivan" },
                { id: 4, name: "Svyatoslav" },
                { id: 5, name: "Valeria" },
                { id: 6, name: "John" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 1, message: "How are you?" },
                { id: 1, message: "What is your name?" },

            ],
            newMessageBody: ''

        }

    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if ((action.type === UPDATE_NEW_POST_TEXT)) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if ((action.type === UPDATE_NEW_MESSAGE_BODY)) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if ((action.type === SEND_MESSAGE)) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id:6, message: body});
            this._callSubscriber(this._state);
    }  
}
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
  }
   
export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;