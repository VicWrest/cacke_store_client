import axios from 'axios';

//запросы для всех пользователей
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//запросы для админа
const $adminHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

//интерцептор - функция для получения токена
const adminInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
//подставляем токен при запросе
$adminHost.interceptors.request.use(adminInterceptor);

export {
    $host,
    $adminHost
}