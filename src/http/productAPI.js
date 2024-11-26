import { $authHost, $host } from "./index"

export const createNewType = async (formData) => {
    const {data} = await $authHost.post('api/type/', formData)
    return data;
}

export const getTypes = async () => {
    const {data} = await $host.get('api/type/');
    return data;
}

export const deleteTypeById = async (typeId) => {
    console.log(typeId)
    const {data} = await $authHost.delete('api/type/'+typeId, {withCredentials: true})
    return data;
}

export const createNewProduct = async (formData) => {
    const {data} = await $authHost.post('api/product/', formData)
    return data;
}

export const getProducts = async (typeId) => {
    try{
        const {data} = await $host.get('api/product/', {params: {typeId}})
        return data;
    }
    catch(err){
        return new Error;
    }
    
}

export const getProductById = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data;
}

export const deleteProduct = async (params) => {
    const {data} = await $authHost.delete('api/product/', {params}, {withCredentials: true})
    return data;
}
export const createNewKorzh = async (formData) => {
    const {data} = await $authHost.post('api/korzh/', formData)
    return data;
}
export const getKorzhType = async () => {
    const {data} = await $host.get('api/korzh/')
    return data;
}
export const deleteKorzhById = async (params) => {
    const {data} = await $authHost.delete('api/korzh/', {params}, {withCredentials: true})
    return data;
}
export const addProductToBasket = async (product) => {
    const {data} = await $authHost.post('api/basket/', product);
    return data;
}

export const getProductsInBasket = async () => {
    const {data} = await $authHost.get('api/basket/', {withCredentials: true});
    console.log(data)
    return data;
}

export const increment = async (body) => {
    const {productId, weightId, korzhId} = body;
    const {data} = await $authHost.put('api/basket/'+productId + '/increment', {korzhId, weightId}, {withCredentials: true})
    return data;
}

export const decrement = async (body) => {
    const {productId, weightId, korzhId} = body;
    const {data} = await $authHost.put('api/basket/'+productId + '/decrement', {korzhId, weightId}, {withCredentials: true})
    return data;
}

export const updateProductData = async (formData) => {
    const {productId} = formData;
    const body = {korzhId: formData.korzhId, weightId: formData.weightId}
    const {data} = await $authHost.put('api/basket/'+productId +'/update', body, {withCredentials: true})
    return data;
}

export const deleteProductById = async (productId) => {
    const {data} = await $authHost.delete('api/basket/'+productId, {withCredentials: true})
    return data;
}

export const deleteAllProducts = async () => {
    const {data} = await $authHost.delete('api/basket/', {withCredentials: true})
    return data;
}

export const createOrder = async (body) => {
    const {data} = await $authHost.post('api/order/',  {body}, {withCredentials: true})
    return data;
}

export const getOrder = async () => {
    const {data} = await $authHost.get('api/order/', {withCredentials: true})
    return data;
}