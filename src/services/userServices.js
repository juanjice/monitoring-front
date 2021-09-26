import axios from 'axios'
const USERS_URL='http://localhost:8080/api/v1/users';
class UserServices{
    getUsers(){
        return axios.get(USERS_URL);
    }
    addUser(user){
        return axios.post(USERS_URL,user);
    }
}
export default new UserServices();