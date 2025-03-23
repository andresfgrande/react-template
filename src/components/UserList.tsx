import { useEffect, useState } from "react";
import { User } from "../types/User";
import getUsers from "../services/getUsers";
import "../styles/userList.css"; 
import { UserDialog } from "./UserDialog";
import loadingGif from "../assets/loading.gif"; 

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getUsersData = async () => {
            setLoading(true)
            const usersData = await getUsers();
            if(!usersData){
                setUsers([]);
                return;
            }
            setLoading(false);
            setUsers(usersData);
        };
        getUsersData();
      }, []);

      return(
        <div className="user-list-container">
            {loading ? 
            (<div className="loading-gif">
                <img src={loadingGif} alt="Loading..." />
            </div>) 
            : 
            (
                <div className="user-list">
                {users.map((user)=>(
                <UserDialog key={user.id} user={user}></UserDialog>
            ))}
            </div>) }
            
        </div>
    
    )
}