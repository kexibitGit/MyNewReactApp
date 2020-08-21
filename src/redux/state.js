import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import sidebarReducer from './sidebar-reducer';



let store = {
    _state: {
        profilePage: {
            

        }
        ,
        messagesPage: ,
        sidebar: {}


    },
    _renderEnitreTree() {
        console.log('state is changed');
    },

    addPost() {
    },
    updateNewPostText(newText) {

    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this._state.profilePage = sidebarReducer(this._state.profilePage, action)
        this._renderEnitreTree(this._state);


    },

    subscribe(observer) {
        this._renderEnitreTree = observer;
    },
    getState() {
        return this._state;
    }

}





export default store;
window.store = store;