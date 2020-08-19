let renderEnitreTree = () => {
    console.log('state is changed');
}

let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 11 }
        ],
        newPostText: 'Dimka'

    }
    ,
    messagesPage: {
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ],
        dialogsData: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ]
    }

}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 100
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderEnitreTree(state);


}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEnitreTree(state);
}

export const subscribe = (observer) => {
    renderEnitreTree = observer;
}

export default state;