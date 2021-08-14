import React from "react";

interface IProps {
  id?: String;
  code?: String;
  name?: String;
  inStock?: Boolean;
  show?: Boolean;
  onAdjust(): void;
}
export const DrugList = (props: IProps) => {
  const saveStock = (e) => {
    e.preventDefault();
  };

  return (
    <li>
      {props.id}|{props.code}|{props.name}|{props.inStock ? "Yes" : "No"} |
      <button type="button" onClick={props.onAdjust}>
        {props.show ? "Cancel" : "Adjust"}
      </button>
      <br />
      <form style={{ display: props.show ? "block" : "none" }}>
        <label>
          Quantity:
          <input type="text" name="Quantity" />
        </label>
        <input type="submit" value="Save" />
      </form>
    </li>
  );
};
