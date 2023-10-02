import {useParams} from 'react-router-dom';
import SubpageTable from './SubpageTable';
import {useState} from "react";

const Room = () => {
    const {roomName} = useParams();
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({name: '', quantity: 0, price: 0});

    const addItem = () => {
        if (newItem.name && newItem.quantity && newItem.price) {
            setItems([...items, newItem]);
            setNewItem({name: '', quantity: 0, price: 0});
        }
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };


    return (
        <div className="subpage-container">
            <SubpageTable
                subpage={roomName}
                roomName={roomName}
                items={items}
                addItem={addItem}
                removeItem={removeItem}
                setItems={setItems}
            />
        </div>
    );
};

export default Room;
