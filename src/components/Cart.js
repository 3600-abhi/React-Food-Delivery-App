import { useSelector, useDispatch } from "react-redux";
import store from "../store/store";
import { clearCart } from "../store/slice/cart-slice";

function Cart() {

    // subscribing the items array
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const clearCart = () => {
        // dispatch(addItem("random"));
        // dispatch(clearCart());
        dispatch(removeItem());
    }

    return (
        <div>
            <h1 className="p-2 m-2 font-bold text-3xl">Cart Items</h1>

            {
                cartItems.map((itemName, index) => (
                    <h1 className="m-2 p-2 bg-yellow-500 text-white" key={index}>{itemName}</h1>
                ))
            }

            <button
                className="bg-red-500 text-white m-3 p-2 rounded-lg"
                onClick={() => clearCart()}
            >
                Clear Cart
            </button>

        </div>
    );
}

export default Cart;