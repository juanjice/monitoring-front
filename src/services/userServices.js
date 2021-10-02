import axios from 'axios'
const USERS_URL='http://localhost:8080/api/v1/users';
class UserServices{
    getUsers(){
        return axios.get(USERS_URL);
    }
    addUser(user){
        return axios.post(USERS_URL,user);
    }
    delUser(id){
        return axios.delete(USERS_URL+'/'+id);
    }
    updateUser(id,user){
        return axios.put(USERS_URL+'/'+id,user);
    }
}
export default new UserServices();