import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const roomNames = ['salon', 'lazienka', 'gabinet', 'sypialnia', 'kuchnia'];
                const allData = [];

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
            'cena łącznie': doc.data().quantity * doc.data().price,
        }));
        return data;
    };

    const getTotalPrice = () => {
        return allItems.reduce((total, item) => total + item['cena łącznie'], 0);
    };

    return (
        <div>
            <table className="subpage-table">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                    <th>Cena</th>
                    <th>Cena łącznie</th>
                </tr>
                </thead>
                <tbody>
                {allItems.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item['cena łącznie'].toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="3">Podsumowanie wydatków</td>
                    <td>{getTotalPrice().toFixed(2)}</td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Home;
