import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/cartSlice'
import ItemList from './ItemList'

function Cart() {
    const cartitems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()
    const handleClaerCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl  mx-auto font-bold bg-green-200 rounded-lg w-6/12'>Cart</h1>
            <div className='w-6/12 m-auto'>
                <ItemList items={cartitems} />
            </div>
            {cartitems.length !== 0 && <button className='bg-black text-white rounded-lg p-2' onClick={handleClaerCart}>Clear Cart</button>}
            {cartitems.length == 0 && <h1 className='font-bold'>Cart Is Empty. Please add some itmes</h1>}

        </div>
    )
}

export default Cart 