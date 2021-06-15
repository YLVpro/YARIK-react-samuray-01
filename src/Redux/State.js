let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 23 },
                { id: 2, message: 'All is well', likesCount: 16 },
                { id: 3, message: 'BlaBla', likesCount: 19 },
                { id: 4, message: 'OK', likesCount: 10 }
            ],
            newPostText: 'it-kamasutra.com'  
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
    },
    _callSubscriber() {
        console.log('State changed');       
    },
    
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },  
    
        dispatch(action) {
            if (action.type === 'ADD-POST') {
                    let newPost = {
                        id: 5,
                        message: this._state.profilePage.newPostText,
                        likesCount: 0
                    };
                    this._state.profilePage.posts.push(newPost);
                    this._state.profilePage.newPostText = '';
                    this._callSubscriber(this._state);
            } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
        }
}

export default store;
window.store = store;
