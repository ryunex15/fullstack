import React, {useState,useEffect} from 'react';
import axios from "axios";

const UserList = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
    getUsers();
},[]);

const getUsers = async () =>{
    const response = await axios.get('http//localhost:5000/users');
    console.log(response.data);
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Gender</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList