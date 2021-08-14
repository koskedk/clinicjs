import React from "react";

interface IProps {
  id?: String;
  code?: String;
  name?: String;
  inStock?: Boolean;
}
export const DrugHome = (props: IProps) => {
  return <h1>Home</h1>;
};
