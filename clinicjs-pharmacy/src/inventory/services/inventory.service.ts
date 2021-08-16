import API from "../../common/api";
import { RecieptDto } from "../models/reciept.dto";

class InventoryService {

  async getInventorySummary() {
    try {
      const { data } = await API.get("/Inventory");
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

  async newStock(data: RecieptDto[]) {
    await API.post("/Drugs/NewStock", data);
  }
  async adjustStock(data: RecieptDto) {
    await API.post("/Drugs/AdjustStock", data);
  }
  async fullDispense(orderId: String) {
    await API.post("/Drugs/FullDispense", {}, { params: { orderId } });
  }
}

export default new InventoryService();
