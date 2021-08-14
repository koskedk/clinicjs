import API from "../../../common/api";
import { StockDto } from "../models/stock.dto";

class InventoryService {
  async getDrugs() {
    try {
      const { data } = await API.get("/Drugs");
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

  async newStock(data: StockDto) {
    await API.post("/NewStock", data);
  }
  async fullDispense(orderId: String) {
    await API.post("/FullDispense", {}, { params: { orderId } });
  }
}

export default new InventoryService();
