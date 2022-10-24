import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ products, search, onlyStock }) {
  let rowsByCategory = {};

  for (let product of products) {
    // 검색어가 있는 경우
    if (search !== "" && !product.name.includes(search.trim())) {
      continue;
    }

    // onlyStock이 체크된 경우
    if (onlyStock && !product.stocked) {
      continue;
    }

    if (Object.keys(rowsByCategory).includes(product.category)) {
      rowsByCategory[product.category] =
        rowsByCategory[product.category].concat(product);
    } else {
      rowsByCategory[product.category] = [product];
    }
  }

  let rows = [];

  Object.entries(rowsByCategory).forEach(([category, products]) => {
    rows.push(<ProductCategoryRow category={category} />);

    products.map((row) => rows.push(<ProductRow product={row} />));
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
