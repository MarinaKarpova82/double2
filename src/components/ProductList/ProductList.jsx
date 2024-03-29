import React, { useCallback, useEffect, useState } from 'react';
import './ProductList.css';
import { useTelegram } from '../hooks/useTelegtam';
import ProductItem from '../ProductItem/ProductItem';



const getTotalPrice = (products = []) => {
    return products.reduce((acc, item) => {
        return acc += item.price
  
    }, 0)
  }

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();


/*     const onSendData = useCallback(() => {
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
    }) */



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
