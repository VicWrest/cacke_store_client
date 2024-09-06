import axios from 'axios';

//запросы для всех пользователей
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//запросы для авторизованных пользователей
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

//интерцептор - функция для получения токена
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
//подставляем токен при запросе
$authHost.interceptors.request.use(authInterceptor);


$authHost.interceptors.response.use((config) => {
    return config;
},async (err) => {
    const error = err.response;
    if (err.response.status == 400 || err.response.status == 401) {
        try {
            console.log(error)
            return Promise.reject(error);
        } catch (e) {
            console.log(e)
        }
    }
    else{
        return Promise.reject({...error, data: "Упс произошла серверная ошибка, перезгрузите страницу"})
    }
    throw err;
})

export {
    $host,
    $authHost
}