import React, { useState } from "react";
import { useMutation } from "react-query";
import service from "./services/inventory.service";
import { StockDto } from "./models/stock.dto";
import axios from "axios";

interface Props {
  id?: string;
}

export const StockReceipt = (props: Props) => {
  const [stock, setStock] = useState<StockDto>({
    drugId: props.id,
  });

  const mutation = useMutation(() => service.adjustStock(stock), {
    onError: (err, variables, context) => {
      // eslint-disable-next-line no-console
      console.log(err);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // @ts-ignore
    mutation.mutate(stock);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="id"
          name="id"
          readOnly
          value={props.id}
          onChange={handleChange}
        />
        <label htmlFor="batchNo">BatchNo:</label>
        <input
          type="text"
          id="batchNo"
          name="batchNo"
          onChange={handleChange}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
