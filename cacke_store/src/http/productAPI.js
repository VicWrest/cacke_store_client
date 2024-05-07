import { $host } from "./index"

export const createNewProduct = async (name, price, type) => {
    const response = await $host.post('api/product/', {name, price, type})
    console.log(response)
    return;
} 