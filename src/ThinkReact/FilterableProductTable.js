import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }) {
  let [search, setSearch] = useState("");
  let [onlyStock, setOnlyStock] = useState(false);

  const onClickCheckbox = () => {
    setOnlyStock(!onlyStock);
    console.log(onlyStock);
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <SearchBar
        onlyStock={onlyStock}
        onClickCheckbox={onClickCheckbox}
        onChangeSearch={onChangeSearch}
      />
      <ProductTable products={products} search={search} onlyStock={onlyStock} />
    </>
  );
}
