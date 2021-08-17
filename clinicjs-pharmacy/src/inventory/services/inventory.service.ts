import API from "../../common/api";
import { RecieptDto } from "../models/reciept.dto";

class InventoryService {

  async getInventorySummary() {
    try {
      const { data } = await API.get("/Inventory/Summary");
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
  async receiveDrug(data: RecieptDto) {
    await API.post("/Inventory/Receipt", data);
  }

  async receiveDrugBatch(data: RecieptDto[]) {
    await API.post("/Inventory/Receipt/Batch", data);
  }


}

export default new InventoryService();
