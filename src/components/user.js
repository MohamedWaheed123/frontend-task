import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../components/SearchBox";
import { Button } from 'semantic-ui-react'
import { deleteUser, removeSelectedUser, selectedUser } from "../redux/actions/usersActions";
import { ExportCSV } from '../ExportCSV ';
import { useHistory } from "react-router-dom";
import { Segment } from "semantic-ui-react";




const User = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector((state) => state.allUsers.users);
    const searchfield = useSelector((state) => state.allUsers.searchField);
    const fileName = 'usersData';
    const filteredUsers = users.filter((user) => {
        return user.name
            .toLowerCase()
            .includes(searchfield.toLowerCase());
         });

    filteredUsers.sort((a, b) => a.name.localeCompare(b.name))

    const onDeleteUser = (id) => {
        dispatch(deleteUser(id));
    }
    const onSelectUser = (user) => {
        dispatch(selectedUser(user));
        history.push('/form');
    }
    const onCreateUser = () => {
        dispatch(removeSelectedUser());
        history.push('/form');
    }

    

    return (
        <div style={{
            margin: "auto",
            width: "70%",
            padding: "10px"
        }} className="ui segments">
            <div className="ui segment">

                <Segment clearing>
                    <SearchBox />
                    <ExportCSV csvData={filteredUsers} fileName={fileName} />
                    <Button onClick={() => onCreateUser()} floated='right' icon='add user' size='big' link  ></Button>
                </Segment>

            </div>
            <div className="ui secondary segment">
                <table style={{ width: "90%", margin: "auto" }} className="ui celled table">
                    <thead>
                        <tr><th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>

                        </tr></thead><tbody>
                        {
                            filteredUsers.map((user) => (

                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td> <Button.Group size='mini'>
                                        <Button onClick={() => onSelectUser(user)}>Edit</Button>
                                        <Button.Or />
                                        <Button onClick={() => onDeleteUser(user.id)} negative>Delete</Button>
                                    </Button.Group>
                                    </td>


                                </tr>))

                        }


                    </tbody>
                </table>
            </div>
        </div>

    );
};






export default User;
