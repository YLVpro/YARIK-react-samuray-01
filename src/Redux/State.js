import {rerenderEntireTree} from "../render";

  let state = {
      profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 23 },
             { id: 2, message: 'All is well', likesCount: 16 },
             { id: 3, message: 'BlaBla', likesCount: 19 },
             { id: 4, message: 'OK', likesCount: 10 }
            ]   
        },
        dialogsPage: {
            dialogs: [  
                {id: 1, name: 'Vasya' },
                { id: 2, name: 'Petya' },
                { id: 3, name: 'Kolya' },
                { id: 4, name: 'Anya' },
                { id: 5, name: 'Vetal' }
            ],
            messagesPage: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'It-man' },
                { id: 3, message: 'USA' },
                { id: 4, message: 'USA' },
                { id: 5, message: 'USA' }
            ],
            sidebar:{}
        } 
    }

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export default state;