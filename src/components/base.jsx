import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

export default function Base() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBPvOWwtbFjWoBrx2_qYKvD2RnTjPODXFA",
  authDomain: "tg-bot-8f788.firebaseapp.com",
  projectId: "tg-bot-8f788",
  storageBucket: "gs://tg-bot-8f788.appspot.com",
  messagingSenderId: "894049454952",
  appId: "1:894049454952:web:984275f94d43f39d7564dd",
  measurementId: "G-9GTV1W2G9E"
            });
        }

        const storage = firebase.storage();
        const storageRef = storage.ref();

        storageRef.child('cat.jpg').getDownloadURL().then((url) => {
            setProducts([
                { id: '1', img: url, title: 'Коть раз', price: 200, description: 'летучий', descriptionss: 'маленький крылатый котёнок рыже-белого окраса. сидит сидя.' },
                { id: '2', img: url, title: 'Коть два', price: 230, description: 'летучий', descriptionss: 'горелый летучий кошк. питается исключительно мухами с красными глазами, не приемлет гусениц и жёлтые обои, будьте внимательны перед покупкой' },
                { id: '3', img: url, title: 'Коть три', price: 999, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий' },
                { id: '4', img: url, title: 'Коть четь', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий' },
                { id: '5', img: url, title: 'Коть пять', price: 750, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий' },
                { id: '6', img: url, title: 'Коть шесь', price: 5, description: 'летучий', descriptionss: 'Кот Бибуп. Бибуп спит, не тревожьте его...' },
                { id: '7', img: url, title: 'Коть семь', price: 3000, description: 'летучий', descriptionss: 'Блеск данной модели столь велик, что в условиях эксплуатации прямо прописано смотреть нанего исключительно в сварочной маске. Внимательно ознакомьтесь с инструкцией перед покупкой и не дарите ему комплименты, иначе он может засиять ярче.' },
                { id: '8', img: url, title: 'Коть вось', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий' },
                { id: '9', img: url, title: 'Коть девь', price: 5000, description: 'летучий', descriptionss: 'летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий летучий' }
            ]);
        }).catch((error) => {
            console.error("Error getting image from Firebase Storage: ", error);
        });
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <img src={product.img} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: {product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.descriptionss}</p>
                </div>
            ))}
        </div>
    );
}
