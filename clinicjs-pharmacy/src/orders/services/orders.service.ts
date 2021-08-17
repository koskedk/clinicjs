import API from "../../common/api";

class OrdersService {

  async getActive() {
    try {
      const {data} = await API.get("/Orders/Active");
      return data;
    } catch (e) {
      if (e.response) {
        // eslint-disable-next-line no-console
        console.log(e);
        throw new Error(e.response.data);
      }
      throw e;
    }
  }

  async getActiveOrder(orderId: string) {
    try {
      const {data} = await API.get(`/Orders/Active/Order/${orderId}`);
      return data;
    } catch (e) {
      if (e.response) {
        // eslint-disable-next-line no-console
        console.log(e);
        throw new Error(e.response.data);
      }
      throw e;
    }
  }

  async fullDispense(orderId: String) {
    try {
      await API.post("/Orders/FullDispense", {}, { params: { orderId } });
    }catch (e){
      if (e.response) {
        // eslint-disable-next-line no-console
        console.log(e);
        throw new Error(e.response.data);
      }
      throw e;
    }

  }
}

export default new OrdersService();
