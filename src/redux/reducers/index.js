import { combineReducers } from "redux";
import { userReducer, selectedUserReducer } from "./usersReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    whitelist:['allUsers','user']
}

 const rootReducer =combineReducers(
    {
        allUsers:userReducer,
        user:selectedUserReducer
    }
)
 export default persistReducer(persistConfig,rootReducer);