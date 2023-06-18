import { useState } from "react";
import {
	AddItemBox,
	AddItemButton,
	AddItemInput,
	DeleteButton,
	Item,
	ItemsContainer,
} from "./styles";

export function IngredientSelector({ state }) {
  const [items, setItems] = state;
  const [itemToAdd, setItemToAdd] = useState("");

  const deleteItem = (item) => {
    setItems(items.filter((x) => x !== item));
  };

  const addItem = (e) => {
    e.preventDefault();

    if (items.find((x) => x.toLowerCase() === itemToAdd.toLowerCase())) {
      alert("Este item já foi adicionado");
      return;
    }

    setItems([...items, itemToAdd]);
    setItemToAdd("");
  };

  return (
    <ItemsContainer>
      {items &&
        items.map((item, index) => (
          <Item key={index}>
            {item}{" "}
            <DeleteButton onClick={() => deleteItem(item)}>x</DeleteButton>
          </Item>
        ))}
      <AddItemBox>
        <AddItemInput
          placeholder="Adicionar"
          value={itemToAdd}
          onChange={(e) => setItemToAdd(e.target.value)}
        />
        <AddItemButton onClick={addItem}>+</AddItemButton>
      </AddItemBox>
    </ItemsContainer>
  );
}
