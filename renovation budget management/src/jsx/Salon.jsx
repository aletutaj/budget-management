import React, { useState, useEffect } from 'react';
import SubpageTable from './SubpageTable';
import '../scss/elements/_subpage.scss';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
const Salon = () => {
    const [items, setItems] = useState([]);

    const getSalonItems = async () => {
        const itemsCollection = collection(db, 'salon');
        const querySnapshot = await getDocs(itemsCollection);
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        return data;
    };

    useEffect(() => {
        getSalonItems()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.error('Wystąpił błąd podczas pobierania danych:', error);
            });
    }, []);

    return (
        <div className="subpage-container">
            <SubpageTable items={items} setItems={setItems} />
        </div>
    );
};

export default Salon;