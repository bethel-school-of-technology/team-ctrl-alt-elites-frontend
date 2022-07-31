import React, { useEffect, useState} from "react";
import axios from "axios";


const User = () => {

    const [users, setUsers] = useState();
    useEffect(() => {
        axios.get('http://localhost:8080/users').then(result => {
        
        
        setUsers(result.data);
        console.log(result.data.data.users);
        
        });
    }, []);


   
    return (<div>
    <h1>Search Results</h1>
    <ul>
         { users.map(users => 
            <li key={users.id}>
                {users.profile}

            </li> ) }
    </ul>
 </div>);


}

export default User;