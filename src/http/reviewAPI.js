import { $authHost, $host } from "./index"

export const createNewReview = async (formData) => {
        const {data} = await $authHost.post('api/review/', formData)
        return data;
}

export const getAllReview = async () => {
    const {data} = await $host.get('api/review/');
    return data;
}