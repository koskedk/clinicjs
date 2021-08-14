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

  async newStock(data: StockDto[]) {
    await API.post("/Drugs/NewStock", data);
  }
  async adjustStock(data: StockDto) {
    await API.post("/Drugs/AdjustStock", data);
  }
  async fullDispense(orderId: String) {
    await API.post("/Drugs/FullDispense", {}, { params: { orderId } });
  }
}

export default new InventoryService();
