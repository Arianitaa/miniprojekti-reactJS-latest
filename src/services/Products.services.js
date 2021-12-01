import http from "../http-common/http-common"

class ProductDataServices {
    getProducts(){
        return http.get("/products");
    }
}
export default new ProductDataServices;