import {useParams} from 'react-router-dom';
import SubpageTable from './SubpageTable';
import {useState} from "react";
import '../scss/elements/_room.scss';

const Room = () => {
    const {roomName} = useParams();
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({name: '', quantity: 0, price: 0});

    const availableRooms = ['salon', 'lazienka', 'gabinet', 'sypialnia', 'kuchnia'];

    const checkIfRoomExists = (roomName) => {
        return availableRooms.includes(roomName);
    };

    const roomExists = checkIfRoomExists(roomName);
    if (!roomExists) {
        return (
            <div className="error"> Nie znaleziono pokoju o nazwie: {roomName}</div>
        );
    }

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
