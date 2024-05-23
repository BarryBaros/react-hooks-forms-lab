import React from "react";
import Item from "./Item";

function ShoppingList({ items, search }) {
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="Items">
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ShoppingList;
