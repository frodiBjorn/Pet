import { rerenderEntireTree } from "../render"

let state = {
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

}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
    export default state;