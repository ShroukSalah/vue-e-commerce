import api from '../api'

 
export const products = async () => {
    const data = await api.post('/products')
    console.log(data)
    return data
}
