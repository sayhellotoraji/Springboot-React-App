import axios from 'axios'

const BASE_URI = 'http://localhost:8080'
const VYNTRA_API_URL = `${BASE_URI}/admin`

class ProductService {

    retrieveAllProducts() {
        return axios.get(`${VYNTRA_API_URL}/products`);
    }

    retrieveProduct(id) {
        return axios.get(`${VYNTRA_API_URL}/products/${id}`);
    }

    deleteProduct(id) {
        console.log('delete product');
        return axios.delete(`${VYNTRA_API_URL}/products/${id}`);
    }

    updateProduct(id, product) {
        console.log('update product');
        return axios.put(`${VYNTRA_API_URL}/products/${id}`, product);
    }

    createProduct(product) {
        console.log('create product');
        return axios.post(`${VYNTRA_API_URL}/products/`, product);
    }
}

export default new ProductService()