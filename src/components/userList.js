import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setUsers } from "../redux/actions/usersActions";
import { users } from "../../src/users";
import User from "../components/user";

const UserList = () => {

    const usersData = useSelector((state) => state.allUsers.users);
    const dispatch = useDispatch();

    const setData = () => {

        dispatch(setUsers(users));
    }

    useEffect(() => {
        if(usersData.length===0)
        {
            setData();
        }
       
    })

    return (
        <div className="ui grid container">
            <User />
        </div>

    );
};
export default UserList;
