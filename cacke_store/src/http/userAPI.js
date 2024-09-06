import { $authHost, $host } from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (userName) => {
    try{
        const {data} = await $host.post('api/user/login', {userName})
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    }
    catch(e){
        alert(e?.response?.statusText);
    }
};

//для моего проекта не нужна данная функция тк авторизация происходит автоматически,
//при запуске приложения
export const check = async () => {
    try{
        const {data} = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.token);
        return jwtDecode(data.token);
    }
    catch(e){
        alert(e.response.statusText);
    }
};