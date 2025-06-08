import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementCart, decrementCart } from "../redux/slice/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ id, name, price, img, qty }) => {
    const dispatch = useDispatch()

    return (
        <div className="flex shadow-md mx-4 mb-4 p-2 rounded-lg gap-4">
            <MdDelete onClick={() => {
                dispatch(removeFromCart({ id }))
                toast(`${name} removed!`, {
                    icon: '❌',
                });

            }} className="absolute right-7 text-xl hover:text-red-500 cursor-pointer" />
            <img src={img}
                alt="pizza img"
                className="w-[60px] h-[60px]"
            />
            <div >
                <h3 className="font-bold text-gray-800 text-md">{name}</h3>
                <div className="flex justify-between mt-2">
                    <span className='text-green-500 font-bold'>रु {price}</span>
                    <div className="flex items-center gap-2 absolute right-7">
                        <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decrementCart({ id })) : qty = 0} className="cart-plus-minus" />
                        <span>{qty}</span>
                        <AiOutlinePlus onClick={() => dispatch(incrementCart({ id }))} className="cart-plus-minus" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem