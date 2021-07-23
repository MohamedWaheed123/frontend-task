import { createStore } from "redux";
import rootReducer from "../redux/reducers/index";
import { persistStore } from "redux-persist";

export const store=createStore(rootReducer,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor=persistStore(store);
const exportedObject = {
    store,
    persistor,
};
export default exportedObject;