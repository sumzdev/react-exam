export default function SearchBar({
  onlyStock,
  onlyClickCheckbox,
  onChangeSearch,
}) {
  return (
    <form>
      <input type="text" placeholder="Search..." onChange={onChangeSearch} />
      <div>
        <input type="checkbox" value={onlyStock} onClick={onlyClickCheckbox} />
        {" Only show products in stock"}
      </div>
    </form>
  );
}
