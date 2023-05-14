import api from '../api'



export const postQuestion = async () => {
    const data = await api.post('/products')
    return data
}
