import React, {useState} from 'react';
import '../scss/elements/_subpageTable.scss';

const SubpageTable = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({name: '', quantity: 0, price: 0});

    const handleAddItem = () => {
        setItems([...items, newItem]);
        setNewItem({name: '', quantity: 0, price: 0});
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div>
            <table className="subpage-table">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                    <th>Cena</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => handleRemoveItem(index)}>Usuń</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="add-item-container">
                <input
                    type="text"
                    placeholder="Nazwa"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Ilość"
                    value={newItem.quantity}
                    onChange={(e) =>
                        setNewItem({...newItem, quantity: parseInt(e.target.value)})
                    }
                />
                <input
                    type="number"
                    placeholder="Cena"
                    value={newItem.price}
                    onChange={(e) =>
                        setNewItem({...newItem, price: parseFloat(e.target.value)})
                    }
                />
                <button onClick={handleAddItem}>Dodaj</button>
            </div>
        </div>
    );
};

export default SubpageTable;
