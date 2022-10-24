export default function SearchBar({
  onlyStock,
  onClickCheckbox,
  onChangeSearch,
}) {
  return (
    <form>
      <input type="text" placeholder="Search..." onChange={onChangeSearch} />
      <div>
        <input type="checkbox" value={onlyStock} onClick={onClickCheckbox} />
        {" Only show products in stock"}
      </div>
    </form>
  );
}
