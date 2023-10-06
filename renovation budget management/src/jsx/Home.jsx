import  { useEffect, useState } from 'react';
import SubpageTable from './SubpageTable';
import { db } from '../firebase';
import {collection, getDocs} from 'firebase/firestore';
// import {addDoc, collection, getDocs} from 'firebase/firestore';

const Home = () => {
    const [allItems, setAllItems] = useState([]);
    // const [newItem, setNewItem] = useState({ name: '', quantity: 0, price: 0 });

    // const handleAddItem = async () => {
    //     try {
    //         const newItemRef = collection(db, '/');
    //         const docRef = await addDoc(newItemRef, newItem);
    //         const newItemWithId = { id: docRef.id, ...newItem };
    //         setAllItems([...allItems, newItemWithId]);
    //         console.log('Data added to the database.');
    //     } catch (error) {
    //         console.error('Error while adding data:', error);
    //     }
    //
    //     setNewItem({ name: '', quantity: 0, price: 0 });
    // };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allData = [];
                const roomNames = ['salon', 'lazienka','gabinet', 'sypialnia', 'kuchnia' ];
                for (const roomName of roomNames) {
                    const roomData = await getDataFromRoom(roomName);
                    allData.push(...roomData);
                }

                setAllItems(allData);
            } catch (error) {
                console.error('Error while retrieving data:', error);
            }
        };

        fetchData();
    }, []);

    const getDataFromRoom = async (roomName) => {
        const querySnapshot = await getDocs(collection(db, roomName));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data;
    };

    return (
        <div>
            <SubpageTable items={allItems} setItems={setAllItems} />
            <div className="add-item-container">
            </div>
        </div>
    );
};

export default Home;
