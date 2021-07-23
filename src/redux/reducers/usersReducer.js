import { ActionTypes } from "../constants/actionTypes";
import { users } from "../../users";

const initialState = {
    users: users,
    searchField: ""

}
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return { ...state, users: payload };

        case ActionTypes.DELETE_USER:
            return {
                ...state,
                users: [...state.users.filter((usr) => usr.id !== payload)],

            };

        case ActionTypes.CREATE_USER:
            return {
                ...state,
                users: [...state.users, payload],

            };
        case ActionTypes.UPDATE_USER:
            return {
                ...state,
                users: [...state.users.filter((evt) => evt.id !== payload.id), payload],

            };
        case ActionTypes.SET_SEARCH_BOX:
            return { ...state, searchField: payload };
        default:
            return state;

    }
}
export const selectedUserReducer = (state = null, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_USER:
            return { ...state, ...payload }

        case ActionTypes.REMOVE_SELECTED_USER:
            return null



        default:
            return state;
    }

}

