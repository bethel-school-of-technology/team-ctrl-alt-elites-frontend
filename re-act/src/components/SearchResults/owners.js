import React, { useEffect, useState} from "react";
import axios from "axios";


const Owners = () => {

    const [owners, setOwners] = useState();
    useEffect(() => {
        axios.get('http://localhost:8080/owners').then(result => {
        
        
        setOwners(result.data);
        console.log(result.data.data.owners);
        
        });
    }, []);


   
    return (<div>
    <h1>Search Results</h1>
    <ul>
         { owners.map(owner => 
            <li key={owner.id}>
                {owner.profile}

            </li> ) }
    </ul>
 </div>);


}

export default Owners;