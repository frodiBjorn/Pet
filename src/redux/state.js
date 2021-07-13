const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

            ]

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
        }
    }  
}

export const addPostActionCreator = () => {
    return { type: ADD_POST}
  }
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
  }

export default store;
window.store = store;