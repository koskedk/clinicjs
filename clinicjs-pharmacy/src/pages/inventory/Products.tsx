import React from "react";
import { ProductList } from "./ProductList";
import { useQuery } from "react-query";
import { Drug } from "./models/drug";
import service from "./services/inventory.service";

export const Products = () => {
  const { data, isLoading, error } = useQuery<Drug[], Error>("drugs", () =>
    service.getDrugs()
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    // @ts-ignore
    // eslint-disable-next-line no-console
    console.log(">>>", error);
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>Manage Products</h1>
      <ProductList drugs={data} />
    </div>
  );
};
