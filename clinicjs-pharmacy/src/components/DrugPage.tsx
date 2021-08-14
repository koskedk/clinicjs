import React, { useState } from "react";
import { DrugList } from "./DrugList";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

interface Drug {
  id: string;
  code: string;
  name: string;
  inStock: boolean;
}

export const DrugPage = () => {
  const [show, setShow] = useState(false);

  const fetchDrugs = () =>
    fetch("http://localhost:9001/Drug").then((res) => res.json());

  const { isLoading, isError, data: drugs, error: any } = useQuery<
    Drug[],
    Error
  >("drugs", fetchDrugs);

  const mutation = useMutation((newStock) =>
    axios.post("/Drug/NewStock", newStock)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    // @ts-ignore
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {drugs.map((drug, index) => {
        return (
          <DrugList
            {...drug}
            show={show}
            onAdjust={() => setShow(!show)}
            key={index}
          />
        );
      })}
    </div>
  );
};
