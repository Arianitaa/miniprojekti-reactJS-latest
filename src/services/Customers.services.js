import http from "../http-common/http-common";

export class CustomersDataService {
    getCustomers(){
        return http.get("/customers");
    }
    static addCustomer(customer){
        return http.post("/customers", customer);
    }
    deleteCustomer(id){
        return http.delete("/customers/" + id);
    }
}
export default new CustomersDataService();