import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItems((items) => [...items, newItem]);
  }

   const itemsToDisplay = items.filter((item) => {
     if (selectedCategory !== "All" && item.category !== selectedCategory) {
       return false;
     }
     if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
       return false;
     }
     return true;
   });
  
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList
        items={itemsToDisplay}
        search={search}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
