import { User } from "../types/User";

export default async function getUsers(): Promise<User[] | undefined> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            console.error('Bad response', response);
            return undefined;
        }
        const data = await response.json();
     
        return data as User[];
      } catch (error) {
        console.error('Error fetching users: ', error);
        return undefined
      }
}