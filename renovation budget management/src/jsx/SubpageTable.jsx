import {useEffect, useState} from 'react';
import '../scss/elements/_subpageTable.scss';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase';
import PropTypes from 'prop-types';

const SubpageTable = ({roomName, items, setItems}) => {

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

    useEffect(() => {
        const fetchData = async () => {
            if (!roomName) {
                console.error('Wartość roomName jest pusta lub niepoprawna.');
                return;
            }

            try {
                const roomCollection = collection(db, roomName);
                const querySnapshot = await getDocs(roomCollection);
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setItems(data);
            } catch (error) {
                console.error('Wystąpił błąd podczas pobierania danych:', error);
            }
        };

        fetchData();
    }, [roomName, setItems]);


    return (
        <div>
            <table className="subpage-table">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                    <th>Cena</th>
                    <th>Akcje</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={item.id}>
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
SubpageTable.propTypes = {
    roomName: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    setItems: PropTypes.func.isRequired,
};
export default SubpageTable;
