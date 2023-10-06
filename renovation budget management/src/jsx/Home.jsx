import  { useEffect, useState } from 'react';
import SubpageTable from './SubpageTable';
import { db } from '../firebase';
import {collection, getDocs} from 'firebase/firestore';

const Home = () => {
    const [allItems, setAllItems] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const allData = [];
                const roomNames = ['salon', 'lazienka','gabinet', 'sypialnia', 'kuchnia'];
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
        </div>
    );
};

export default Home;
