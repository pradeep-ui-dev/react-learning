import React, {useState} from "react";

export default function AddItems(){
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const addListItem = () => {
        if(newItem && newItem.trim()){
            setItems([...items, newItem]);
            setNewItem('');
        }
    }

    return (
        <div>
            <input type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addListItem}>Add Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>No.{index + 1} Value: {item}</li>
                ))}
            </ul>
        </div>
    )

}