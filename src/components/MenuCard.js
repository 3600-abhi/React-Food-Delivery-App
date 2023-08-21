import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/cart-slice.js";

function MenuCard(props) {

    const dispatch = useDispatch();

    const addToCart = (data) => {
        dispatch(addItem(data));
    }

    return (
        <div className="bg-yellow-500 p-2 m-2 rounded-sm flex justify-between">

            <h2 className="text-white">{props.name}</h2>

            <button
                className="text-white bg-red-500 p-2 rounded-md hover:bg-red-600"
                onClick={() => addToCart(props.name)}
            >
                Add</button>
        </div>
    );
}

export default MenuCard;