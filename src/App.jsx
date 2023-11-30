import AddItemsForm from "../components/AddItemsForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemsList from "../components/ItemsList";
import React from 'react'

export default function App() {
  const [itemsList, setItemsList] = React.useState([])
  
  function handleClear() {
    const isConfirmed = confirm("Are you sure you want to clear all the items in the list? \nClick either OK or Cancel.");
    isConfirmed ? setItemsList([]) : ''
  }
function togglePacked(id) {
    setItemsList((itemsList) => itemsList.map((item) => item.id === id ? {...item, packed: !item.packed} : item))
  }

  function handleDeleteItems(id) {
    setItemsList((itemsList) => itemsList.filter((item) => item.id !== id))
  }

  function handleAddItemsList(item) {
    setItemsList((itemsList) => [...itemsList, item])
  }
  return (
    <div>
      <Header />
      <AddItemsForm onAddItems={handleAddItemsList} />
      <ItemsList itemsList={itemsList} onDeleteItems={handleDeleteItems} onTogglePacked={togglePacked} onHandleClear={handleClear} />
      <Footer itemsList={itemsList} />
    </div>
  )
}

