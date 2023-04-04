import http from '../http-common';

class productService {
    getAllProducts(data) {
        return http.post("/getallproducts", data)
    }
    deleteProducts(id) {
        return http.delete(`deleteproducts/${id}`)
    }
    addProduct(data) {
        return http.post("/addproducts",data)
    }
    editProduct(data) {
        return http.post("/editproducts",data)
    }
}

export default new productService();