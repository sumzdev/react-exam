export default function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <div>
        <input type="checkbox" />
        {" Only show products in stock"}
      </div>
    </form>
  );
}
