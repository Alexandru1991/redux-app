import React from 'react';
import { increment } from '../../actions/';
import { useDispatch } from 'react-redux';
import './shop.css';




function ShoppingList(props) {

    const dispatch = useDispatch();
    
    const Item = props.Items.map((el,index) => {
        return <img key={index} src={el.imageUrl} alt = {el.name} onClick = {()=>dispatch(increment(el.id))} />
    })
    return <div className="shopping-list">{Item}</div>
}
export default ShoppingList;

