import React, { useCallback, useEffect, useState } from 'react';
import './ProductList.css';
import { useTelegram } from '../hooks/useTelegtam';
import ProductItem from '../ProductItem/ProductItem';

const products = [
    {id: '1', title: 'Коть раз', price: 200, description: 'подгоревший'},
    {id: '2', title: 'Коть два', price: 230, description: 'подгоревший'},
    {id: '3', title: 'Коть три', price: 999, description: 'подгоревший'},
    {id: '4', title: 'Коть четыри', price: 5000, description: 'подгоревший'},
    {id: '5', title: 'Коть пять', price: 750, description: 'подгоревший'},
    {id: '6', title: 'Коть шесть', price: 5, description: 'подгоревший'},
    {id: '7', title: 'Коть семь', price: 3000, description: 'подгоревший'},
    {id: '8', title: 'Коть восемь', price: 5000, description: 'подгоревший'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price

    }, 0)
} 

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();


    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,

        }
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [])

    useEffect( () => {
        tg.onEvent()
    })



    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];
        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id === product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show(); 
            tg.MainButton.setParams( {
                text: `Купить: ${getTotalPrice(newItems)}` 
            });
        }
    }
return (
<div className={'list'}>
    {products.map (item => (
        <ProductItem
        product={item}
        onAdd={onAdd}
        className={'item'}
        />
    ))}

</div>
);
};

export default ProductList;
