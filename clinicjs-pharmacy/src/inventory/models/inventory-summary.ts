import {DrugStats} from "./drug-stats";

export interface InventorySummary {
    totalDrugs?: number;
    totalInStock?: number;
    totalOutOfStock?: number;
    inStockDrugStats?: DrugStats[];
    outOfStockDrugStats?: DrugStats[];
}

