import React from "react"
import {   useSelector , useDispatch } from "react-redux";
import { increment , decrement} from '../../actions/';
import './cart.css'
import Button from '../button/button.js'
function ShoppingCart (props) {

    const items = props.Items;
    const count = useSelector (state => state.counter)
    const dispatch = useDispatch();


    let itemsTotal = 0;
     items.map(item => {
        if(count[item.id]>0)
        {
            return (
                itemsTotal = itemsTotal + count[item.id] *item.price
            )
        }
        else
        return null;
    })
 
    
 
    const itemsIterated = items.map(item => {

       
            if(count[item.id]>0){
                return (<div className='item' >
                    <div className="product"><img className="shop-image" src={item.imageUrl} alt={item.name}/>{item.name}</div>
                    <div>{count[item.id]}</div>
                    <div>{item.price}</div>
                    <div>{(count[item.id]*item.price).toFixed(2)}</div>
                    <div><Button primary onClick={()=>dispatch(increment(item.id))}>Add</Button>
                    <Button  onClick={()=>dispatch(decrement(item.id))}>Remove</Button>
                    </div>
                </div>
                )
            }
            else
                return false
    })
    

    return (
        <div  className='shopCart'>
                <div className="heading">
                    <div className="product">Product</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Total</div>
                    <div>Actions</div>
                </div>
                
                    {itemsIterated}
                <tr className='total-area'>
                    <div className='total-number'>Total:</div>
                    <div className='total-value'> {(itemsTotal).toFixed(2)} </div>
                </tr>
                
        </div> 
        )
 }
export default ShoppingCart;




