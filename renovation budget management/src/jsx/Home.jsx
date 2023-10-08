import houseImage from '../assets/house.jpeg';
import {useEffect, useState} from 'react';
import {db} from '../firebase';
import {collection, getDocs} from 'firebase/firestore';
import Chart from 'chart.js/auto';

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

    useEffect(() => {
        if (allItems.length > 0) {
            const labels = allItems.map((item) => item.name);
            const prices = allItems.map((item) => item['cena łącznie']);

            const ctx = document.getElementById('myChart').getContext('2d');

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            data: prices,
                            backgroundColor: [
                                'red',
                                'blue',
                                'green',
                                'orange',
                                'purple',
                            ],
                        },
                    ],
                },
                options: {
                    responsive: false,
                },
            });
        }
    }, [allItems]);

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
            <div className="images" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                paddingTop: '50px'
            }}>
                <canvas id="myChart" className="my-chart" style={{width: '320px'}}></canvas>
                <img src={houseImage} alt="home" style={{width: '320px'}}/>
            </div>
        </div>
    );
};

export default Home;