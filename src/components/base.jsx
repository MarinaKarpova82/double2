import 'firebase/storage';
import React, { Component } from 'react';

export class Base extends Component {
  render() { 
  const admin = require("firebase-admin");
  const serviceAccount = require("./tg-bot-8f788-firebase-adminsdk-jnsig-4fd1831197.json");
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "tg-bot-8f788.appspot.com" // замените на свой storage bucket
  });
  
  const bucket = admin.storage().bucket();
  
  const products = [
    { id: '1', img: 'cat (1).jpg', title: 'К', price: 200 },
    { id: '2', img: 'cat (2).jpg', title: 'К', price: 200 }
  ];
  
  const updateProductsWithStorageUrls = async () => {
    for (let product of products) {
      const filename = product.img;
      const file = bucket.file(filename);
      
      try {
        await file.makePublic(); // делаем файл публично доступным
        const url = `https://storage.googleapis.com/${bucket.name}/${filename}`;
        product.img = url;
      } catch (error) {
        console.error(`Ошибка при получении URL для файла ${filename}: ${error}`);
      }
    }

  
  updateProductsWithStorageUrls();
    return (
      <div>  
      console.log(products)
      </div>
    )
  }
}}